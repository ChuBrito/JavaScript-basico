var textWordsCount = $("#word-count");
var initialTime = $("#play-time").text();
var playerText = $(".player-text");
var mainText = $(".MainText");

$(function(){
    textUpdate();
    scoreUpdate();
    startTimer();
    wordsVerifier();
    $("#reset-button").click(gameReset);

});

function textUpdate(){
  var totalTextWords = mainText.text().split(" ").length;
  textWordsCount.text(totalTextWords);
}

function scoreUpdate(){
  playerText.on("input", function(){
    var playerContent = playerText.val();
    var playerWordsCount = playerContent.split(/\S+/).length - 1;
    var playerCharsCount = playerContent.length;
    $("#player-words").text(playerWordsCount);
    $("#player-chars").text(playerCharsCount);
  });
}

function startTimer(){
  var playTime = $("#play-time").text();
  playerText.one("focus", function(){
    var decayTime = setInterval(function(){
      playTime --;
      $("#play-time").text(playTime);
      if(playTime < 1){
        clearInterval(decayTime);
        finalGame();

      }
    },1000)
  });
}

function wordsVerifier(){
  playerText.on("input", function(){
    var typedByPlayer = playerText.val();
    var textToCompare = mainText.text().substr(0, typedByPlayer.length);
    console.log(textToCompare);
    console.log(typedByPlayer);
    if(typedByPlayer == textToCompare){
      playerText.addClass("correct-text");
      playerText.removeClass("wrong-text");
    }else{
      playerText.addClass("wrong-text");
      playerText.removeClass("correct-text");
    }
  });
}

function gameReset(){
  playerText.attr("disabled", false);
  playerText.val("");
  $("#player-words").text("0");
  $("#player-chars").text("0");
  $("#play-time").text(initialTime);
  startTimer();
  playerText.removeClass("disableText")
  playerText.removeClass("wrong-text");
  playerText.removeClass("correct-text");
}

function finalGame(){
  playerText.attr("disabled", true);
  playerText.addClass("disableText");
  scoreboardInsert();
}
