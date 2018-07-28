$("#scoreboard-button").click(showScoreboard);
$("#sync-button").click(syncScoreboard);

function scoreboardInsert(){
  var scoreTable = $(".scoreboard").find("tbody");
  var scoreName = playerName.text();
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

function syncScoreboard(){
  var scoreArray = [];
  var lines = $("tbody>tr");

  lines.each(function(){
      var userName = $(this).find("td:nth-child(1)").text();
      var scorePoints = $(this).find("td:nth-child(2)").text();

      var score = {
        usuario: userName,
        pontos: scorePoints
      };
      scoreArray.push(score);

    });
    var data = {
      placar: scoreArray
    };
  $.post("http://localhost:3000/placar", data, showMsg).fail(showError);
}

function showMsg(msg){
  if (msg == 1){
    $("#complete").toggle();
    setTimeout(function(){
      $("#complete").toggle();
    },2000);
  }else{
    $("#correct").toggle();
    setTimeout(function(){
      $("#correct").toggle();
    },2000);
  }
}

function loadDatabase(){
  $.get("http://localhost:3000/placar", function(data){
    $(data).each(function(){
      var line = newline(this.usuario, this.tempo,);
      $("tbody").append(line);
    });
  });
}
