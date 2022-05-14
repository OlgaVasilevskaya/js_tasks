//задачи learnJS 
//Типы данных: числа


//#1 Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

const a = +prompt("Введите первое число", "");

const b = +prompt("Введите второе число", "");

alert( a + b );


//#2 Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));


//#3 Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.Функция должна возвращать числовое значение.

function readNumber () {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

console.log(`Число: ${readNumber()}`);


//Типы данных Строки
//#1

const str = 'vasya';

const newStr = str[0].toUpperCase() + str.slice(1);

console.log(newStr);


//#2

function checkSpam(str) {
  const lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));


//#3

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + ' ';
  } else {
    return str;
  }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 30));
console.log(truncate("Всем привет!", 20));


//#4

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120") === 120);


//Типы данных Массивы 
//#1

const fruits = ["Яблоки", "Груша", "Апельсин"];

const shoppingCart = fruits;

shoppingCart.push("Банан");

console.log( fruits.length );


//#2

const styles = ['джаз', 'блюз'];

console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);


//#3

const arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();


//#4

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

alert( sumInput() );


//Типы данных Методы массива
//#1

function camelize(str) {

  return str.split('-').join('');
}

console.log(camelize("background-color"));


//#2

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

const arr = [5, 3, 8, 1];
const filtered = filterRange(arr, 1, 4);

console.log(filtered); 
console.log(arr);


//#3

const arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

console.log(arr);


//#4

const arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

const sorted = copySorted(arr);

console.log(sorted);
console.log(arr);


//#5

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const users = [ vasya, petya, masha ];

const names = users.map(item => item.name);

console.log(names); 


//#6

const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
const petya = { name: "Петя", surname: "Иванов", id: 2 };
const masha = { name: "Маша", surname: "Петрова", id: 3 };

const users = [ vasya, petya, masha ];

const usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );


//#7

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age 
  ? 1 
  : -1);
}

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const arr = [ vasya, petya, masha ];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name); 


//#8

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 29 };

const arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));


//#9

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

const strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));


//Рекурсия (learn js)
//#1

function sumTo(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum +=i;
  }

  return sum;
}

console.log(sumTo(100));


function sumTo(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumTo(n - 1);
}

console.log(sumTo(100));


//#2

function factorial(n) {
  return (n != 1) 
    ? n * factorial(n - 1) 
      : 1;
}

console.log(factorial(5));


//#3

function fib(n) {
  return n <= 1 
    ? n 
      : fib(n - 1) + fib(n - 2);
}

console.log( fib(3) );
console.log( fib(7) );

//#4

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }

}

printList(list);
