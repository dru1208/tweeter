/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

// array for testing adding tweets function
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

// creates an outline for each tweet to be added to the #tweetsContainer
  function convertDate(tweet) {
    let createDateInMs = (new Date(tweet.created_at)).getTime(); //.getTime() changes to milliseconds
    let currentDateInMs = (new Date(Date.now())).getTime();
    let dayinMs = 24 * 60 * 60 * 1000;
    let timePassedInDays = Math.floor((currentDateInMs - createDateInMs) / dayinMs);
    return timePassedInDays;
  }


  function createTweetElement (tweet) {
    let htmlCode = `
    <article class="existingTweet">
      <header>
        <h3 class="username">${tweet.user.name}</h3>
        <p>${tweet.user.handle}</p>
      </header>
      <p>${tweet.content.text}</p>
      <footer>
        <p class="time">${convertDate(tweet)} days ago</p>
        <i class="fas fa-flag"></i>
      </footer>
    </article>`;
    return htmlCode;
  };

  function renderTweets (tweets) {
    for (let entry of tweets) {
      let $tweet = createTweetElement(entry);
      $('#tweetsContainer').append($tweet);
    }
  }

  renderTweets(data);
});


