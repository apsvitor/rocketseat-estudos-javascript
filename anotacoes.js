// Primeiro script em JS

// Impressao de mensagens no console.
console.log('Alo mundo');
//------------------------------------------------------------------
/* 
    Gramática
        - Elementos de sua linguagem e combinações
        - A arte de falar e escrever corretamente

    Vocabulário
        - Conjunto de termos e expressões
        - Agrupamento de palavras

    *Como escrever?
    *Qual o significado?
    *Como ampliar o vocabulário?
*/

//------------------------------------------------------------------
// TIPOS DE DADOS
//------------------------------------------------------------------
/*  String
        - Cadeia de caracteres
        - "" aspas duplas
        - '' aspas simples
        - `` template literals ou strings

*/

console.log("Aspas duplas")
console.log('aspas simples')
console.log(`Expressões de linguagem 
${10+19}
e ainda pular linhas`)
/*  Number
        - Números
            - inteiros (int)
            - reais (float)
            - NaN (not a number)
            - Infinity (com I maiúsculo mesmo)
*/

/*  Boolean
        - somente 2 valores: true ou false
*/

/*  undefined
        - indefinido
    
    null
        - nulo
        - objeto não possui nada dentro
    
    NULL != UNDEFINED
*/

/*  Object
        - Estruturar Dados
        - Objeto
        - Propriedades / Atributos
        - Funcionalidades / Métodos

        { propriedadeX: "valorY" }
*/
console.log({
    name:"NomeX",
    idade: 2324,
    andar: function(){
        console.log('andar')
    }
})

/*  Array - Vetor
        - Uma lista
        - Um agrupamento de dados
        ['nome', 100]
*/

console.log([
    "Leite",
    "Ovos",
    2,
    3
])

/* ECMASript - 9 tipos de dados
    - Primitive / Primitive Value           (Primitivos)
        - String
        - Number 
        - Boolean
        - undefined
        - Symbol
        - BigInt
    
    - Structural                            (Estruturais)
        - Object
            - Array
            - Map
            - Set
            - Date
            - ...
        - Function
    
    - Structural Root Primitive             (Primitivo Estrutural)
        - null -> "Caixa (objeto) vazia"

*/

//------------------------------------------------------------------
//  VARIÁVEIS
//------------------------------------------------------------------
/*
    - Nomes simbólicos para receber algum valor
    - Atalhos de código
    - Identificadores
    - 3 palavras reservadas para criar uma variável
        - var       -> é global e local
            -> JS coloca declarações var no "início do código" (hoisting)

        - let       -> local
        - const     -> local e não pode ser alterada

    - JS é fracamente tipada - não precisa dizer o tipo da variável ao declarar
    - JS é dinâmica - O tipo de uma variável pode mudar ao longo do uso

*/

//------------------------------------------------------------------
//  SCOPE - Escopo
//------------------------------------------------------------------
/*  
    Escopo determina a visibilidade de uma variável no JS
    É possível escrever em blocos com {}

*/

{
    // Código do bloco (block-scoped)
}

//------------------------------------------------------------------
// NOME DE VARIÁVEIS
//------------------------------------------------------------------
/*
    - JS é case-sensitive
    - JS aceita a cadeia de caracteres em Unicode
    
    -> PODE:
        - Iniciar com $ e _
        - Iniciar com letras
        - Colocar acentos

    -> NÃO PODE:
        - Iniciar com números
        - Colocar espaços vazios no nome

    -> BOAS PRÁTICAS:
        - Criar nomes que fazem sentido
        - Que explique o que a variável é ou faz (em inglês)
        - camelCase
        - snake_case
*/

//------------------------------------------------------------------
// PRATICANDO COM DIFERENTES VARIÁVEIS/ESTRUTURAS
//------------------------------------------------------------------

/*
    // CONSOLE.LOG 

    Tipo de uma variável
        console.log(typeof nomeDaVar);

    Concatenando strings
        console.log('o' + name + 'tem ' + age + ' anos.');
    
    Interpolar valores com template literals ou template strings
        console.log(`o ${name} tem ${age} anos.`);

*/

/*
    // OBJETOS
    const person = {
        name: 'João',
        age: 30,
        weight: 65.2,
        isAdmin: true
    }
    console.log(person)                 -> todas as propriedades
    console.log(person.name)            -> somente a propriedade name
*/

/*
    // ARRAYS
    const animals = [
        'Lion',
        'Monkey',
        'Cat'
    ]
    console.log(animals)                -> todo o conteúdo do array
    console.log(animals[0])             -> Lion - primeiro elemento

*/

//------------------------------------------------------------------
// FUNÇÕES
//------------------------------------------------------------------

/*
    É um bloco estruturado de instruções
        - declaration (declaração)
        - function statment
        - execute, run, call, invoke (chamar a função)
*/

/*
    Function expression
    Function anonymous
        - função atribuída a uma variável
        - const sum = function () {}
*/

/*
    Function Hoisting
        Eleva a função declarada normalmente
        
        nameOfTheFunction()

        function nameOfTheFunction(){ codigo }
*/

/*
    Arrow Function
        - Compacto
        - Não sofre hoisting (deve ser definida antes de usar)
        const qualquerNome = () => { codigo }

*/

/*
    Callback function
        - Passando uma função como parâmetro para outra
        - Pode-se executar a qualquer momento dentro da função, basta chamar (da mesma maneira que uma variável)

*/

/*
    Function() constructor
        - expressão new
        - criar um novo objeto
        - this keyword
*/

//------------------------------------------------------------------
// MANIPULAÇÃO DE DADOS
//------------------------------------------------------------------

/*
    Prototype (protótipo) - aquilo que foi criado antes
        - prototype-based language
        - prototype chain
        - __proto__         

*/

/*
    Type conversion (typecasting) - alteração explicita
    Type coersion - JS altera implicitamente
        - Alteração de um tipo de dado para outro tipo
*/

// String em numeros
let string = "123";
console.log(Number(string));

// Numero em string
let numero = 321;
console.log(String(numero));

// Contar quantos caracteres tem uma palavra
let word = "paralelepipedo"
console.log(word.length);

// Contar quantos dígitos tem um número
let numero5 = 12445;
console.log(String(numero5).length); 

// Transformar um número decimal e trocar ponto por vírgula
numero5 = 42342.33234234
console.log(numero5.toFixed(2).replace(".", ","));

// Transformar letras minúsculas em maiúsculas.
word = "AsiD suHf dgGGFlfg"
console.log(word.toUpperCase());
console.log(word.toLowerCase());

/*  Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e, onde eram espaços, coloque _
*/

let arrayTexto = word.split(" ");
console.log(arrayTexto);
wordWithUnderscore = arrayTexto.join("_");
console.log(wordWithUnderscore); 

// Verificar se o texto contém a palavra "astr"
console.log(word.includes("astr"));

// Criando Array com construtor
let theArray = new Array(10);
console.log(theArray);

// Contar elementos de um Array
console.log([
    "a", 
    {type: "array"}, 
    function() {return "alo"}
].length);

// Transformar uma cadeia de caracteres em elementos de um array
console.log(Array.from(word));


/*
    Manipulando Arrays
*/
let techs = ["html", "css", "JS"];

// Adicionar um item no  fim
techs.push("nodejs");
// Adicionar no começo
techs.unshift("sql");
// Remover do fim 
techs.pop();
// Remover do começo
techs.shift();
// Pegar somente alguns elementos do array
console.log(techs.slice(1,3));
// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2);
// Encontrar a posição de um elemento no array
console.log(techs.indexOf("aaa"));

// Resultado final de techs
console.log(techs);

//------------------------------------------------------------------
// EXPRESSÕES DE OPERADORES
//------------------------------------------------------------------

/*
    Expressões e Operadores
        - Expressions = ";" no fim das expressões é opcional

        - Operators
            - Binary = x+y
            - Unary = ++i, typeof, ...
            - Ternary = comparação ? 'se true' : 'else (false)';
*/

/*
    New
        - left-hand-side expression
        - criar um novo objeto
*/
let newName = new String('vitor');
newName.surName = 'pimenta';
let newAge = new Number(100);
console.log(`
    newName: ${newName} ${newName.surName}
    newAge: ${newAge}`);

/*
    Operadores Unários
        - typeof
        - delete
*/
const pessoaDeletada = {
    name: 'vito',
    age: 2500
}
delete pessoaDeletada.age;
console.log(pessoaDeletada);
console.log(typeof 'Isso precisa ser uma string');

/*
    Operadores Aritméticos
        ->  +   -   /   *   %   ++  --  **(exponencial)
*/

/*
    Grouping operator ( )
        - Ordem de precedência em operações
*/

/*
    Operadores de Comparação
        -> Retornar true ou false
        -> ==   !=  <   >   <=  >=
        -> === estritamente igual (compara valor e tipo)
        -> !== estritamente diferente
*/

/*
    Operadores de Atribuição (Assignment)
        -> =    +=  -=  *=  /=  %=  **=
*/

/*
    Operadores Lógicos (logical operators)
        - Compara valores booleanos
        -> AND(&&)  OR(||)  NOT(!)
*/

/*
    Operador Condicional Ternário
        comparação ?   true  :  false
                  "if"     "else"
*/

/*
    Operador de String (String operator)
        - Comparison (comparação)
            -> console.log('a' == 'a');
        
        - Concatenation (concatenação)
            -> União de duas ou mais strings
            console.log('a' + 'b' + ...);
*/

/*
    Falsy
        - Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

        -> false    0   -0  ""  null    undefined   NaN

    Truthy
        - Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

        -> true  {} [] 1 3.23  "0"  "false" -1 Infinity -Infinity
*/

/*
    Operator Precedence - Precedência de Operadores
        ORDEM:
        - Grouping                          ()
        - Negação e Incremento              ! ++ --
        - Multiplicação e Divisão           * /
        - Adição e subtração                + -
        - Relacional                        < <= > >=
        - Igualdade                         == != === !==
        - AND                               &&
        - OR                                ||
        - Condicional                       ?:
        - Assignment (atribuição)           = += -= *=
*/

//------------------------------------------------------------------
// CONTROLE DE FLUXO DA APLICAÇÃO
//------------------------------------------------------------------

/* 
    if / else
        - Se / senão
*/

let temperature = 36.5;

if  (temperature >= 38){
    console.log('Febre alta');
} else if (temperature >= 37){
    console.log('Febre moderada');
} else {
    console.log('Saudável');
}

/*
    Switch case
*/
let expressao = 'b';
switch(expressao) {
    case 'a':
        // codigo
        break;
    case 'b':
        // codigo
        break;
    default:
        // codigo
        break;
}

/*
    throw ... try/catch
        try - tentiva de executar determinada tarefa
        throw - na execução foi identificado algo irregular. o erro é lançado para a instância que chamou a tarefa
        catch - a instância que chamou a tarefa captura o erro lançado pela exceção
    Importante para o programa não quebrar
*/
function sayMyName(name = '') {
    if  (name === ''){
        throw 'Nome é obrigatório';
    }
    console.log('será que chega aqui?');
}

try {
    sayMyName();
} catch (e) {
    console.log(e)
}

//------------------------------------------------------------------
// ESTRUTURA DE REPETIÇÃO
//------------------------------------------------------------------

// for (condição inicial; condição de continuação; increm./decrem.)

for (let i=5; i<10;i++){
    console.log(i);
}

// while (condição)
let i=0;
while (i<5){
    console.log(i++);
}

// for...of -> percorrer arrays/string

let nameForOf = 'Vitor'
let namesForOf = ['Vitor', 'Paulo', 'Pedro']

for (let char of nameForOf){
    console.log(char);
}
for (let name of namesForOf){
    console.log(name);
}


// for...in -> loop em cima das propriedades de um objeto
let personForIn = {
    name: 'vitor',
    age: 25,
    weight: 65.3
}

for (let property in personForIn){
    console.log(property);              // nome da propriedade
    console.log(personForIn[property]); // valor da propriedade
}



