var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.style.color = "red";
    }

    if (!alturaValida) {
        console.log("Altura inválido");
        alturaValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.style.color = "red"
    }

    if (alturaValida && pesoValido) {

        var imc = calcularImc(peso,altura);

        tdImc.textContent = imc;
    }
}

function calcularImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 300){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}