var textSlot = $(".MainText").text;

$("#text-button").click(shuffleText);

$("#search-button").click(searchText);

function shuffleText(){
  event.preventDefault();
  showSpinner();
  $.get("http://localhost:3000/frases", changeRandomText)
  .fail(showError(1))
  .always(showSpinner);
}

function searchText(){
  event.preventDefault();
  showSpinner();
  var textId = $("#id-text").val();
  if (textId.length != 0){
    var dataId = {id: textId};
    $.get("http://localhost:3000/frases", dataId, changeText)
    .fail(showError)
    .always(showSpinner);
  }else{
    showError();
    showSpinner();
  }
}

function changeRandomText(data){
  var textContent = $(".MainText");
  var randoness = Math.floor(Math.random()*data.length);
  textContent.text(data[randoness].texto);
  timeUpdate(data[randoness].tempo);
}

function showError(id){
  if(id == 1){
    $("#error").toggle();
    setTimeout(function(){
      $("#error").toggle();
    },2000);
  }else {
    $("#name-error").toggle();
    setTimeout(function(){
      $("#name-error").toggle();
    },2000);
  }
}

function showSpinner(){
  $("#spinner").toggle();
}

function changeText(data){
  var textContent = $(".MainText");
  textContent.text(data.texto);
  timeUpdate(data.tempo);
}
