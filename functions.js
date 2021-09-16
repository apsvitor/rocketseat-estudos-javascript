function createPhrases() {
    console.log("Frase 1");
    console.log("Frase 2");
    console.log("Frase 3");
}

const sum = function(number1, number2) {
    return (number1+number2);
}

let n1 = 3, n2 = 100;
console.log(`O número 1 é ${n1}`);
console.log(`O número 1 é ${n2}`);
console.log(`A soma é ${sum(n1,n2)}`);

// arrow function
const qualquerNome = (parametroX) => {
    console.log(parametroX);
}

qualquerNome(2103);

// callback function
function printName(name){
    console.log("antes de chamar a callback");
    name();
    console.log("depois de chamar a callback");
}

printName(
    () => {
        console.log("Callback na área");
    }
)

// function() constructor
function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando";
    }
}
const vitor = new Person("Vitor")

console.log(vitor.walk());
