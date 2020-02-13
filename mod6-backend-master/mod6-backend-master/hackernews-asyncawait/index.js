'use strict';

const axios = require('axios');

/*
async function sumar(n1, n2) {
  return n1 + n2;  
}
*/

async function getTopStories() {
  const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

  const response = await axios.get(url);
  const top10Stories = response.data.slice(0, 10);

  return top10Stories;
}


async function main() {
  const topStoriesIds = await getTopStories();

  const storyResponsesPromises = topStoriesIds.map((storyId) => {
    const urlDetail = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;

    return axios.get(urlDetail); // return Promise<Object axios response>
  });

  const storiesDetailsResponse = await Promise.all(storyResponsesPromises);

  const storiesData = storiesDetailsResponse.map((storyDetailResponse) => {
    const details = storyDetailResponse.data;
  
    const {
      id,
      time,
      title,
    } = details;

    const timeIso = new Date(time * 1000).toISOString();

    return {
      id,
      timeIso,
      title,
    };
  });

  console.log(storiesData);
}

main();

/*
sumar(2, 3).then((resultado) => {
  console.log('result using promises', resultado);
});
*/