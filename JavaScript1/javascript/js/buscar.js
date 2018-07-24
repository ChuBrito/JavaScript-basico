var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click",function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    var errosImport = document.querySelector("#erro-importacao");

    if (xhr.status == 200) {
      errosImport.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteTabela(paciente);
      });
    }else {
      console.log(xhr.responseText);

      errosImport.classList.remove("invisivel");
    }
  });

  xhr.send();

});
