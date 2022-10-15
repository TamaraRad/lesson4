/*
let str = '120';
let num = 100;


console.log(`str type: ${typeof (str)}`);
console.log(`num = ${num} type: ${typeof (num)}`);
console.log(typeof (str * num));
console.log(typeof (+str));

console.log('Первая строка');
console.log('Вторая строка');

let myName = prompt('Введите Ваше имя');

if (myName === 'Tamara') {

    console.log(`Добрый день, ${myName}`);

} else if (myName === 'Иван') {

    console.log(`${myName}, а где Тамара?`);

} else if (myName === 'Катя') {

    console.log(`${myName}, а Тамары или Ивана нет?`);

} else {

    console.log(`${myName}, а с Вами мы и вовсе не знакомы`);
}
*/

/*
let foundItems = 120;

if (foundItems) {

    console.log('Ничего не найдено');
}

else {

    console.log('Результаты поиска');
}


const num = 5;
let result = num === 5 ? 'пять' : 'не пять';
console.log(result);
*/

let i = 5;
/*
while (pass !== 'qwerty') {
    pass = prompt('Введите пароль');
}
console.log('Hello');
*/
/*
do {
    console.log(i);
    i++;
} while (i < 5);

while (i < 5) {
    console.log(i);
    i++;
}

console.log('Цикл for');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/
console.log('break');

let sum = 0;
while (true) {
    let value = +prompt('Введите число');
    if (value == 10) {
        break;
    }
    sum += value;
}

console.log(sum);