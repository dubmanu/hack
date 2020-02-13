'use strict';

function getTopStories(req, res, next) {
  return res.send({
    stories: [{ title: 'all top stories' }],
  });
}

module.exports = getTopStories;
