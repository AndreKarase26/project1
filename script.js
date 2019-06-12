
let startBtn = document.getElementById('start'),
budgetValue = document.getElementsByClassName('budget-value')[0],
daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

expensesItem = document.getElementsByClassName('expenses-item'),
expensesItemBtn = document.getElementsByTagName('button')[0],
optionalexpensesBtn = document.getElementsByTagName('button')[1],
countBudgetBtn = document.getElementsByTagName('button')[2],
optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
chooseIncome = document.querySelector('.choose-income'),
savings = document.querySelector('#savings'),
chooseSum = document.querySelector('.choose-sum'),
choosePercent = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items;
        do {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        }
        while(typeof(items) != 'string' || items == '' || items == null);
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        alert("Способы доп. заработка: ");
        appData.income.forEach(function(item,i){
            alert(i + 1 + ': ' + item);
        });
    }
};
console.log("Наша программа включает в себя данные: ");
for(let key in appData) {
    console.log(key);
}

 
