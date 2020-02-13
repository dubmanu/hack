'use strict';

const axios = require('axios');

axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then((response) => {
    // handle success
    const arrayOfTopStoriesIds = response.data;
    const theMostTopId = arrayOfTopStoriesIds[0];

    // https://hacker-news.firebaseio.com/v0/item/theMostTopId.json
    const urlDetail = `https://hacker-news.firebaseio.com/v0/item/${theMostTopId}.json`;
    axios.get(urlDetail).then((response) => {
      const details = response.data;

      const {
        id,
        time,
        title,
      } = details;

      const timeIso = new Date(time * 1000).toISOString();

      console.log(id, timeIso, title);
    }).catch((err) => {
      console.error(err);
    });

    console.log(theMostTopId);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });