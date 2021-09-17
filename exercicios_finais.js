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
let temperatureToConvert = '212 F'

function convertTemperatures(temperatureToConvert) {
    let temperatureValue = parseFloat(temperatureToConvert);
    if  (String(temperatureToConvert).slice(-1) == 'C'){

        return ((temperatureValue*9/5 + 32).toString() + ' F');
    }
    return (((temperatureValue-32)*5/9).toString() + ' C');
}

console.log(convertTemperatures(temperatureToConvert));

/*
    4 - Buscando e encontrando dados em Array
    
*/