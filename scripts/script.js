document.getElementById("btn").addEventListener("click", generarMatricula);

function generarMatricula() {

    let letras = "BCDFGHJKLMNPRSTVWXYZ";
    let numeros = "0123456789";
    let matricula = "";

    // Función para generar una matrícula aleatoria
    for (let i = 0; i < 4; i++) {
        matricula += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    for (let j = 0; j < 3; j++) {
        matricula += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    matricula = matricula.replace("CH", "");
    matricula = matricula.replace("LL", "");

    document.getElementById("test").innerHTML = matricula;
}


// Función para calcular la matrícula

document.getElementById("calcularBtn").addEventListener("click", calcularMatrícula);
function calcularMatrícula() {

    let matricula = document.getElementById("inputMatricula").value;
    let number = parseInt(matricula.slice(0, 4)) + 1;
    let letras = matricula.slice(4, 7);
    let nuevaMatricula = number.toString() + letras.toUpperCase();



    document.getElementById("resultado").innerHTML = nuevaMatricula
}



