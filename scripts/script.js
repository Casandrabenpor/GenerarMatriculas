document.getElementById("btn").addEventListener("click", generate);
let letters = "BCDFGHJKLMNPRSTVWXYZ";

function generate() {

    let numbers = "0123456789";
    let matricula = "";

    // Función para generar una matrícula aleatoria
    for (let i = 0; i < 4; i++) {
        matricula += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    for (let j = 0; j < 3; j++) {
        matricula += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    matricula = matricula.replace("CH", "");
    matricula = matricula.replace("LL", "");

    document.getElementById("test").innerHTML = matricula;
}


// Función para calcular la matrícula
document.getElementById("calcularBtn").addEventListener("click", calcularLetra);
function calcularLetra() {
    let matricula = document.getElementById("inputMatricula").value;
    let number = (matricula.slice(0, 4));
    let threeLetters = matricula.slice(4, 7).toUpperCase();
    let newLetter = "";

    if (number === "9999") {
        let letterChange = false;
        let rightLetter = threeLetters[2];
        if (rightLetter === "Z") {
            newLetter += "B";
            letterChange = true;
        } else {
            let index = letters.indexOf(rightLetter);
            newLetter += letters[index + 1];
        }
        let centerLetter = threeLetters[1];
        if (centerLetter === "Z" && letterChange) {
            newLetter = "B" + newLetter;
        } else if (letterChange) {
            let index = letters.indexOf(centerLetter);
            newLetter = letters[index + 1] + newLetter;
            letterChange = false;
        } else {
            newLetter = centerLetter + newLetter;
        }
        let leftLetter = threeLetters[0];
        if (letterChange) {
            let index = letters.indexOf(leftLetter);
            newLetter = letters[index + 1] + newLetter;
        } else {
            newLetter = leftLetter + newLetter;
        }
    }
    else {
        number = (parseInt(matricula.slice(0, 4)) + 1).toString().padStart(4, 0);
        newLetter = threeLetters;
    }


    document.getElementById("result").innerHTML = number + newLetter.toUpperCase()
}