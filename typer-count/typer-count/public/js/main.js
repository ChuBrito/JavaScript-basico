var textWordsCount = $("#word-count");
var initialTime = $("#play-time");
var playerText = $(".player-text");
var mainText = $(".MainText");
var playTimer = $("#play-time").text();
var playerName = $("#id-name");

$(function(){
    playerName.text("Player");
    textUpdate();
    scoreUpdate();
    startTimer(initialTime.text());
    wordsVerifier();
    //loadDatabase();
    $("#reset-button").click(gameReset);
});

function timeUpdate(newtime){
  initialTime.text(newtime);
  playTimer = newtime.text();
}

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

function startTimer(newtime){
  playerText.one("focus", function(){
    var decayTime = setInterval(function(){
      newtime --;
      $("#play-time").text(newtime);
      if(newtime < 1){
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
  var timer = playTimer;

  playerText.attr("disabled", false);
  playerText.val("");
  $("#player-words").text("0");
  $("#player-chars").text("0");
  $("#play-time").text(timer);
  playerName.text("");
  startTimer(timer);
  playerText.removeClass("disableText");
  playerText.removeClass("wrong-text");
  playerText.removeClass("correct-text");
}

function finalGame(){
  playerText.attr("disabled", true);
  playerText.addClass("disableText");
  scoreboardInsert();
}
