"use strict";

function sortNewest(a, b) {
  return a.created_at - b.created_at;
}

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets")
        .find()
        .toArray((err, tweetsArray) => {
          if (err) throw err;
          let sortedTweetsArr = tweetsArray.sort(sortNewest).reverse();
          callback(null, sortedTweetsArr);
        });
    }
  };
};
