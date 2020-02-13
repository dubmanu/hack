'use strict';

const express = require('express');
/*
const createStoryController = require('../controllers/stories/create-story-controller');
const getTopStories = require('../controllers/stories/get-top-stories-controller');
*/
const {
  createStoryController,
  getTopStoriesController,
} = require('../controllers/stories');

const storyRouter = express.Router();
storyRouter.get('/top',   getTopStoriesController);
storyRouter.post('/', createStoryController);
storyRouter.delete('/:idStory', (req, res) => res.send('story deleted'));
storyRouter.put('/:idStory', (req, res) => res.send('story updated'));

module.exports = storyRouter;
