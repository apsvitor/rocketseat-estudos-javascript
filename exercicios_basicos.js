//  1. Declare uma variável de nome weight
let weight;

//  2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        - name:         String
        - age:          Number (integer)
        - stars:        Number (float)
        - isSubscribed: Boolean

*/
let name3 = "nome da pessoa";
let age3 = 25;
let stars3 = 4.5;
let isSubscribed3 = false;


/*
    4. A variável student abaixo é de que tipo de dados?

        4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

        4.2 Mostre no console a seguite mensagem:
            <name> de idade <age> pesa <weight> kg.
*/
let student = {};

console.log(typeof student);

student = {
    name4: 'nome da pessoa',
    age4: 25,
    weight4: 64.5,
    isSubscribed4: true
};

console.log(`${student.name4} de idade ${student.name4} e pesa ${student.weight4} kg.`);


/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
*/

students[0] = student;

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

studens[1] = {
    name4: 'nome da outra pessoa',
    age4: 26,
    weight4: 69.1,
    isSubscribed4: false
};

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
        
        console.log(a);
        var a = 1;
        
        Resposta: undefined
*/