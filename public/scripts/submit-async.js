// resets tweet textbox and counter after posting
function resetTextbox () {
  $("#tweetTextbox").val("");
  $(".counter").text(140);
}

$(document).ready(function() {
  $("#postButton")
    .click(function(event) {
      let $text = $('#tweetTextbox')
      event.preventDefault();
      if ($text.val().length > 140) {
        $("#tooMany").slideToggle();                            // first condition if there are too many characters
      } else if ($text.val().length === 0) {                    // second condition if your tweet is empty
        $("#noChar").slideToggle();
      } else {
        let $tweetContent = $text.serialize();                  // form is serialized to a query string
        $.post("/tweets/", $tweetContent, function(data) {      // tweet ajax post where the tweet is added to Db and rendered
        $(".existingTweet").remove()
        loadTweets();
        resetTextbox();
        });
      }
    })
});