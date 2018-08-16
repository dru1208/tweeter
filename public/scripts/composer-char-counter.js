// this file is responsible for the character counter
"use strict";

$(document).ready(function() {
  // call the tweet textbox element
  const tweetTextbox = $("#tweetTextbox");

  // total tweet character limit, available to be changed
  let counterNumber = 140;

  // function for changing counter number and color based on positive or negative value
  const charCount = function() {
    $(".textResponse").css("display", "none"); // clears out your error message
    let newCount = counterNumber - $(this).val().length;
    let $counterBox = $(this)
      .parent()
      .children("span");
    $counterBox.text(newCount);
    if (newCount <= 0) {
      $counterBox.css("color", "red");
    } else {
      $counterBox.css("color", "black");
    }
  };

  tweetTextbox.on("input", charCount);
});
