'use strict';

const axios = require('axios');

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

    console.log(id, timeIso, title);
}

function parseAllStoriesDetail(storiesDetailsResponse) {
  storiesDetailsResponse.forEach(parseNewsDetail);
}

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
  .catch(function (error) {
    // handle error
    console.log(error);
  });