'use strict';

function createStoryController(req, res, next) {
  return res.status(201).send('story created');
}

module.exports = createStoryController;
