// this file is responsible for the character counter

$(document).ready(function() {

// call the tweet textbox element
  const tweetTextbox = document.querySelector('#tweetTextbox');


// total tweet character limit, available to be changed
  let counterNumber = 140;


// function for changing counter number and color based on positive or negative value
  const charCount = function() {
    let newCount = counterNumber - this.value.length;
    $(this).parent().children("span").text(newCount);
    if (newCount <= 0) {
      $(this).parent().children("span").css("color", "red");
    } else {
      $(this).parent().children("span").css("color", "black");
    }
  }

  tweetTextbox.addEventListener("keyup", charCount);
});

