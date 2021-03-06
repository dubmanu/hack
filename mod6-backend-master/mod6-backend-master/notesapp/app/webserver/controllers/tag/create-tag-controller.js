'use strict';

const Joi = require('@hapi/joi');
const uuidV4 = require('uuid/v4');
const mysqlPool = require('../../../database/mysql-pool');

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

async function validateSchema(payload) {
  const schema = Joi.object({
    name: Joi.string().trim().min(1).max(40).required(),
    userId: Joi.string().guid({
      version: ['uuidv4'],
    }).required(),
  });

  Joi.assert(payload, schema);
}

/**
 * Create a new tag if does not exist
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} Tag created
 */
async function createTag(req, res, next) {
  const { userId } = req.claims;
  const tagData = {
    ...req.body,
    userId,
  };

  try {
    await validateSchema(tagData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  // Check if tag exists. If exist, return it
  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT id 
      FROM tags
      WHERE tag = '${tagData.name}'
      AND user_id = '$userId'`;

    // const [r] = connection.execute('SELECT id FROM tags WHERE tag = ?', [tagData.name]);

    const [result] = await connection.query(sqlQuery);
    if (result.length !== 0) {
      const { id, } = result[0];
      res.setHeader('Location', `${httpServerDomain}/api/tags/${id}`);
      return res.status(201).send();
    }

    const tagId = uuidV4();
    try {
      const sqlCreateTag = 'INSERT INTO tags SET ?';
      await connection.query(sqlCreateTag, {
        id: tagId,
        tag: tagData.name,
        user_id: tagData.userId,
        created_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
      });

      connection.release();
      res.setHeader('Location', `${httpServerDomain}/api/tags/${tagId}`);
      return res.status(201).send();
    } catch (e) {
      if (connection) {
        connection.release();
      }

      console.error(e);
      return res.status(500).send({
        message: e.message,
      });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = createTag;
