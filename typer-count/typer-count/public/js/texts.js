var textSlot = $(".MainText").text;

$("#text-button").click(shuffleText);

function shuffleText(){
  event.preventDefault();
  $.get("http://localhost:3000/frases", changeText);
}

function changeText(data){
  var textContent = $(".MainText");
  var randoness = Math.floor(Math.random()*data.length);
  textContent.text(data[randoness].texto);
  timeUpdate(data[randoness].tempo);
}
