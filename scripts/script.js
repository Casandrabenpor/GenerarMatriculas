document.getElementById("btn").addEventListener("click", generarMatricula);

function generarMatricula() {

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let matricula = "";
    
    for (let j = 0; j < 4; j++) {
        matricula += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    for (let i = 0; i < 3; i++) {
        matricula += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    document.getElementById("test").innerHTML = matricula;


}



