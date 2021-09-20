//------------------------------------------------------------------
// EXERCÍCIOS FINAIS DE FIXAÇÃO
//------------------------------------------------------------------

/*
    1 - Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C D F
        A - [90,100]
        B - [80,90)
        C - [70,80)
        D - [60,70)
        F - Menor que 60

*/

// função de conversão
function gradeConverter(numericalGrade) {
    if  (numericalGrade < 0 || numericalGrade > 100){
        return 'Nota inválida';
    } else if  (numericalGrade >= 90.0) {
        return 'A';
    } else if  (numericalGrade >= 80.0) {
        return 'B';
    } else if  (numericalGrade >= 70.0) {
        return 'C';
    } else if  (numericalGrade >= 60.0) {
        return 'D';
    } else {
        return 'F';
    }
}

// script de teste
for (let i=5; i<=11 ;i++) {
    console.log(gradeConverter(i*10));
}

/*
    2 - Sistema de gastos familiar
    Crie um objeto que possuirá duas propriedades, ambas do tipo array:
        - receitas: []  // income
        - despesas: []  // expenses
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let familyAccounting = {
    income: [100,200,300,400],
    expenses: [100,200,300,401]
}

function familyViability (familyAccounting) {
    let netIncome = totalIncome = totalExpenses = 0;
    for (let incomeItem of familyAccounting.income){
        totalIncome += incomeItem;
    }
    for (let expenseItem of familyAccounting.expenses){
        totalExpenses += expenseItem;
    }
    netIncome = totalIncome - totalExpenses;
    console.log((netIncome >= 0 ? 'Positivo.': 'Negativo.') + ` Saldo: ${netIncome.toFixed(2)}`);
}

familyViability(familyAccounting);

/*
    3 - Conversão de Celsius para Fahrenheit
    Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para a outra
    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/
let temperatureToConvert = '212.1 F'

function convertTemperatures(temperatureToConvert) {
    let temperatureValue = parseFloat(temperatureToConvert);
    if  (String(temperatureToConvert).slice(-1) == 'C'){
        return ((temperatureValue*9/5 + 32).toString() + ' F');
    } else if (String(temperatureToConvert).slice(-1) == 'F'){
        return (((temperatureValue-32)*5/9).toString() + ' C');
    }
    throw new Error('Unidade de temperatura inválida.');
}
try {
    console.log(convertTemperatures(temperatureToConvert));    
} catch (error) {
    console.log(error);
}

/*
    4 - Buscando e contando dados em Array
    Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios:
        - Contar o número de categorias e o número de livros em cada categoria
        - Contar o número de autores
        - Mostrar livros do autor Augusto Cury
        - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaky e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Quantidade de categorias
const totalCategories = booksByCategory.length
console.log(`Quantidade de categorias: ${totalCategories}`);

// Quantidade de livros em cada categoria
let booksPerCategory = [];
for (let category of booksByCategory){
    booksPerCategory.push(category.length);
    console.log(`Quantidade de livros da categoria ${category.category}: ${category.books.length}`);
}

// Contar o número de autores
let totalAuthors = [];
for (let category of booksByCategory){
    for (let books of category.books){
        if  (!totalAuthors.includes(books.author)){
            console.log(`Entrou ${books.author}`)
            totalAuthors.push(books.author)
        }
    }  
}
console.log (`Quantidade total de autores: ${totalAuthors.length}`);

// Mostrar os livros do autor Augusto Cury

let augustoCuryBooks = [];

for (let category of booksByCategory){
    for (let books of category.books){
        if  (books.author === "Augusto Cury"){
            augustoCuryBooks.push(books.title);
        }
    }  
}
console.log(`Livros de Augusto Cury: ${augustoCuryBooks} `);

// Função que fala o autor e são mostrados os livros
function anyAuthorsBook (author){
    let anyAuthor = []
    for (let category of booksByCategory){
        for (let books of category.books){
            if  (books.author === author){
                anyAuthor.push(books.title);
            }
        }
    }
    if  (anyAuthor.length > 0)
        console.log(`Livros de ${author}: ${anyAuthor}`);
    else
        console.log(`Autor(a) ${author} não possui livros aqui`);
}
anyAuthorsBook("vitor");
anyAuthorsBook("T. Harv Eker");
