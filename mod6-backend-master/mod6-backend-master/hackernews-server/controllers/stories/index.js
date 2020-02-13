'use strict';

const createStoryController = require('./create-story-controller');
const getTopStoriesController = require('./get-top-stories-controller');

const storyController = {
  createStoryController,
  getTopStoriesController,
};

module.exports = storyController;
