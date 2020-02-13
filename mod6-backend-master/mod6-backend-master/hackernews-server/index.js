'use strict';

const axios = require('axios');
const express = require('express');
const storyRouter = require('./routes/story-router');

const app = express();

const puerto = 3000;



/**
 * Print the top 10 news of hackernews
 * Technical details
 *  1. Call endpoint to get all top stories ids
 *  2. Get the top 10 ids
 *  3. For the top 10 ids, get story details
 *  4. Pick the id, time and title
 * 
 * FYI: You need to wait for any response before start point 4
 */
function parseNewsDetail(axiosResponse) {
  const details = axiosResponse.data;

    const {
      id,
      time,
      title,
    } = details;

    const timeIso = new Date(time * 1000).toISOString();

    const storyDetail = {
      id, // id: id
      time: timeIso,
      title,
    };

    return storyDetail;
}

/**
 * @returns {Array<Object>} storyDetail
 */
function parseAllStoriesDetail(storiesDetailsResponse) {
  return storiesDetailsResponse.map(parseNewsDetail);
}

function processTopStoriesRequest(req, res ) {
  axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then((response) => {
    // handle success
    const arrayOfTopStoriesIds = response.data;
    const theMostTop10Ids = arrayOfTopStoriesIds.slice(0, 10);

    const storyResponsesPromises = theMostTop10Ids.map((storyId) => {
      const urlDetail = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;

      return axios.get(urlDetail); // return Promise<Object axios response>
    });

    return Promise.all(storyResponsesPromises); // return Promise<Array of axios results>
  })
  .then(parseAllStoriesDetail)
  .then((arrayOfStories) => {
    res.status(200).send(arrayOfStories);
  })
  .catch((error) => { // function (error) {}
    res.status(500).send(error.message);
  });
}

/**
 * endpoint GET http://localhost:3000/stories/top
 */
/*
app.get('/stories/top', processTopStoriesRequest);
app.post('/stories', () => res.send('story created'));
app.delete('/stories/:idStory', () => res.send('story deleted'));
app.put('/stories/:idStory', () => res.send('story updated'));
*/

app.use('/stories', storyRouter);

// http://localhost:3000/operacion/sum?n1=3&n2=5
app.get('/operacion/:operation', function doOperation(req, res) {
  const { operation } = req.params;
  const {
    n1,
    n2,
   } = req.query;

  const validOperations = [
    'sum',
    'sub',
    'div',
    'mul',
  ];

  if (!validOperations.includes(operation)) {
    return res.status(400).send('operation is not valid');
  }

  const result = n1 + n2;
  return res.send({
    result,
    operation,
  });
});

app.listen(puerto, (err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(`Server listening on port 3000`);
});
