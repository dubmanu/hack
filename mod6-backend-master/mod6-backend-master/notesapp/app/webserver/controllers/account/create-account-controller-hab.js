'use strict';

const bcrypt = require('bcrypt');
const cryptoRandomString = require('crypto-random-string');
const Joi = require('@hapi/joi');
const uuidV4 = require('uuid/v4');
const sendgridMail = require('@sendgrid/mail');
const mysqlPool = require('../../../database/mysql-pool');

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

async function validateSchema(payload) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  });

  Joi.assert(payload, schema);
}

async function sendEmailRegistration(userEmail, verificationCode) {
  const linkActivacion = `${httpServerDomain}/api/account/activation?verification_code=${verificationCode}`;
  const msg = {
    to: userEmail,
    from: {
      email: 'notesapp@yopmail.com',
      name: 'Notes App :)',
    },
    subject: 'Welcome to Hack Notes App',
    text: 'Start taking notes of your favourites topics',
    html: `To confirm the account <a href="${linkActivacion}">activate it here</a>`,
  };

  const data = await sendgridMail.send(msg);

  return data;
}


/**
 * Crea un codigo de verificacion para el usuario dado e inserta este codigo
 * en la base de datos
 * @param {String} uuid User id
 * @returns {String} verificationCode
 */
async function addVerificationCode(userId) {
  const verificationCode = cryptoRandomString({ length: 64, });

  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
  const id = uuidV4();

  const sqlQuery = 'INSERT INTO users_activation SET ?';

  const connection = await mysqlPool.getConnection();

  await connection.query(sqlQuery, {
    id,
    user_id: userId,
    verification_code: verificationCode,
    created_at: createdAt,
  });

  connection.release();

  return verificationCode;
}

async function createAccount(req, res, next) {
  /*
  const {
    email,
    password,
  } = req.body;
  */
  const accountData = { ...req.body };

  /**
   * Validar datos entrada y si no son correctos,
   * devolver http status 400 Bad Request + explicación
   */
  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * Tenemos que insertar el usuario en la bbdd, para ello:
   * 1. Generamos un uuid v4
   * 2. Miramos la fecha actual created_at
   * 3. Calculamos hash de la password que nos mandan para almacenarla
   * de forma segura en la base de datos usando bcrypt
   */
  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
  const userId = uuidV4();
  const securePassword = await bcrypt.hash(accountData.password, 10);

  try {
    const connection = await mysqlPool.getConnection();
    const sqlInsercion = 'INSERT INTO users SET ?';
    await connection.query(sqlInsercion, {
      id: userId,
      email: accountData.email,
      password: securePassword,
      created_at: createdAt,
    });
    connection.release();

    const verificationCode = await addVerificationCode(userId);

    await sendEmailRegistration(accountData.email, verificationCode);

    res.status(201).send('account created');
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = createAccount;
