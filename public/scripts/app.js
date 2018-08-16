/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
"use strict";

function escape(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function convertDate(tweet) {
  let createDateInMs = new Date(tweet.created_at).getTime(); //.getTime() changes to milliseconds
  let currentDateInMs = new Date(Date.now()).getTime();
  let dayinMs = 24 * 60 * 60 * 1000;
  let timePassedInDays = Math.round(
    (currentDateInMs - createDateInMs) / dayinMs
  );
  return timePassedInDays;
}

// creates an outline for each tweet to be added to the #tweetsContainer
function createTweetElement(tweet) {
  let htmlCode = `
  <article class="existingTweet">
    <header>
      <img src=${tweet.user.avatars.small} class="userpic">
      <h3 class="username">${tweet.user.name}</h3>
      <p>${tweet.user.handle}</p>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
      <p class="time">${convertDate(tweet)} days ago</p>
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-flag"></i>
    </footer>
  </article>`;
  return htmlCode;
}

// function that loops through an array of tweet objects and renders it on the page
function renderTweets(tweets) {
  for (let entry of tweets) {
    let $tweet = createTweetElement(entry);
    $("#tweetsContainer").append($tweet);
  }
}

// function that fetches tweets from /tweets page and renders the tweets for each
function loadTweets() {
  $.get("/tweets", function(data) {
    renderTweets(data);
  });
}

$(document).ready(function() {
  // add event listener for compose button (to make the form appear or disappear)
  $("#composeButton").click(function() {
    $(".newTweet").slideToggle("slow");
    $("#tweetTextbox").focus();
  });
  loadTweets();
});
