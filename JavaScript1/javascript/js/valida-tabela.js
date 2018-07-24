var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")


for (var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;
  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;
  var tdimc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if(!validaPeso(peso)) {
     pesoEhValido = false;
     tdimc.textContent = 'peso inválido';
     paciente.classList.add("paciente-invalido");
  }

  if(!validaAltura(altura)) {
    alturaEhValida = false;
    tdimc.textContent = 'altura inválida';
    paciente.classList.add("paciente-invalido");
  }

  if(pesoEhValido && alturaEhValida) {
     var imc = calculaIMC(peso, altura)
     tdimc.textContent = imc;
  }

}
function validaNome(nome){
  if(paciente.nome.length > 1){
    return true;
  }else{
    return false;
  }
}

function validaPeso(peso){
  if(peso.length > 0 || (peso > 0 && peso < 400)){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura.length > 0 || (altura > 0 && altura < 3)){
    return true;
  } else{
    return false;
  }
}

function validaGordura(gordura){
  if(gordura.length > 0 || (gordura > 0 && gordura < 100)){
    return true
  }else{
    return false;
  }
}

function calculaIMC(peso, altura){
    var imc = 0
    imc = peso / ( altura * altura);

    return imc.toFixed(2);
}
