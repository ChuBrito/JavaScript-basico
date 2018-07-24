$("#scoreboard-button").click(showScoreboard);

function scoreboardInsert(){
  var scoreTable = $(".scoreboard").find("tbody");
  var scoreName = "Felipe";
  var finalScore = $("#player-words").text();

  var newLine = addLineScore(scoreName, finalScore);
  newLine.find(".removeBotton").click(lineRemove);

  scoreTable.append(newLine);
}

function addLineScore(scoreName, finalScore){
  var line = $("<tr>");
  var colScoreName = $("<td>").text(scoreName);
  var colFinalScore = $("<td>").text(finalScore);
  var colBtnRemove = $("<td>");
  var link = $("<a>").addClass("removeBotton").addClass("btn-floating").addClass("btn-small").addClass("red");
  var icon = $("<i>").addClass("material-icons").text("delete");

  link.append(icon);
  colBtnRemove.append(link);
  line.append(colScoreName);
  line.append(colFinalScore);
  line.append(colBtnRemove);

  return line
}

function lineRemove(){
    event.preventDefault();
    var td = $(this).parent().parent();
    td.fadeOut(800);
    setTimeout(function(){
      td.remove();
    },800);
}

function showScoreboard(){
  $(".scoreboard").stop().slideToggle(600);
}

function scrollScoreboard(){
  $("#scoreboard").slideDown();
  var scoreboardPosition = $(".scoreboard").offset().top;
  $("body").animate({
    scrollTop: scoreboardPosition+"px"
  }, 1000);
}
