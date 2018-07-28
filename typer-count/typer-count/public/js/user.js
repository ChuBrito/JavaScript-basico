$("#name-button").click(saveName);

function saveName(){
  event.preventDefault();

  var name = $("#id-name").val();
    if(name != ""){
      playerName.text(name);
      showMsg(2);
    }else{
      showError(2);
    }
}
