// Условное ветвление
//#1

const a = prompt('Введите число 10', '');

if (a === 10) {
  alert('Верно');
} else {
  alert('Неверно');
}

//#2

let min = prompt('Введите число от 0 до 59', '');

if (min >= 0 && min <= 14) {
  alert('первая');
} else if (min >= 15 && min <= 29) {
  alert('вторая');
} else if (min >= 30 && min <= 44) {
  alert('третья');
} else if (min >= 45 && min <= 60) {
  alert('четвертая');
} else { 
  alert('ошибка');
}

//#3

let a = prompt('write a number', '');

if (a === 0) {
  alert('you are right');
} else {
  alert('you are NOT right');
}

//#4

let a = prompt('write a number', '');

if (a > 0) {
  alert('you are right');
} else {
  alert('you are NOT right');
}


//Логические операторы
//#1

let a = prompt('write a number from 0 to 5', '');

if (a > 0 && a <= 5) {
  alert('right');
} else {
  alert('wrong');
}

//#2

let num = prompt('write a number', '');

let a = Number(num);

if (a == 0 || a ==2) {
  alert(a + 7);
} else {
  alert(a / 10);
}

//#3

let num1 = prompt('write a number', '');
let num2 = prompt('write a number', '');

let a = Number(num1);
let b = Number(num2);

if (a <= 1 && b >= 3) {
  alert(a + b);
} else {
  alert(a - b);
}

//#4

let a = prompt('number', '');
let b = prompt('number', '');

if ((a > 2 && a < 11) && (b >= 6 && b < 14)) {
  alert('OK');
} else {
  alert('NOT OK');
}


//Циклы
//#1.1

let i = 1;

while (i <= 50) {
  console.log(i);
  i++;
}

// //#1.2

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// //#2.1

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

// //#2.2

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// //#3.1

let i = 11;

while (i <= 33) {
  console.log(i);
  i++;
}

// //#3.2

for (let i = 11; i <= 33; i++) {
  console.log(i);
}

// //#4.1

let i = 0;

while (i <= 100) {
  console.log(i);
  i += 2;
}

// //#4.2

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// //#5.1

let i = 1;
let sum = 0;

while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum);

// //#5.2

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// //#6

let num = 0;
let n = 1000;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log(n);
console.log(num);


//Switch
//#1

let num = prompt('write a number from 1 to 4', '');

switch(num) {
  case '1':
    alert('winter');
    break;
  case '2':
    alert('spring');
    break;
  case '3':
    alert('summer');
    break;
  case '4':
    alert ('autumn');
    break;
  default:
    alert('error');
}


//Реализуем задания через любые конструкции
//#1

let day = 22;

if (day >= 1 && day <= 10) {
  console.log('first');
} else if (day >=11 && day <= 20) {
  console.log('second');
} else if (day >= 21 && day <= 31) {
  console.log('third');
} else {
  console.log('error');
}

//#2

let month = 8;

if (month == 12 || month === 1 && month === 2) {
  console.log('winter');
} else if (month >= 3 && month <= 5) {
  console.log('spring');
} else if (month >= 6 && month <= 8) {
  console.log('summer');
} else if (month >= 9 && month <= 11) {
  console.log('autumn');
} else {
  console.log('error');
}

//#3

const a = 'abcde';

if (a[0] === 'a') {
  console.log('yes');
} else {
  console.log('no');
}

//#4

let a = '12345';

if (a[0] == 1 || a[0] == 2 || a[0] ==3) {
  console.log('yes');
} else {
  console.log('no');
}

//#5

const a = '111';
const sum = Number(a[0]) + Number(a[1]) + Number(a[2]);

console.log(sum);

//#6

let a = '123123';

if (Number(a[0]) + Number(a[1]) + Number(a[2]) == Number(a[3]) + Number(a[4]) + Number(a[5])) {
  console.log('yes');
} else {
  console.log('no');
}


//Последние задачи
//#1

let str = 'abcde';

console.log(str[0], str[1], str[3]);

//#2

let a = 1;

console.log(a * 24 * 60 * 60);

//#3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
console.log(num);

//#4

let str1 = 'Привет,';
let str2 = 'Мир!';

console.log(str1 + ' ' +str2);
console.log(`${str1} ${str2}`);

//#5

let a = 'Olya';

console.log('Hello,' + ' ' + `${a}` + '!');

//#6

let a = 11;

console.log(a**2);

//#7

let num = '12345';

console.log(num[0] * num[1] * num[2] * num[3] * num[4]);

// Функции

//#1.1 Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

function getNumber(a, b) {
  if (a > b) {
    console.log(1);
  } else if (a < b) {
    console.log(-1);
  } else if (a == b) {
    console.log(0);
  }
}

getNumber(10, 10);
getNumber(1, 10);
getNumber(10, 1);

//#1.2 Второй способ

const getNum = (a, b) => {
  return (
    a > b
    ? 1
    : a < b
    ? -1
    : 0
  )
}

getNum(10, 10);
getNum(1, 10);
getNum(10, 1);


//#2 Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.

function calcArea(a, b = 0) {
  if (b == 0) { 
    return a ** 2; 
  }
  return a * b;
  }

  console.log(calcArea(3));
  console.log(calcArea(2,3));

  //#3 Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

  function num(a, b) {
    if (a % 2 && b % 2) {
      return a + b;
    } else if (a % 2 || b % 2) {
      if (a % 2) {
        return a;
      }
      return b;
    } else {
      return a * b;
    }   
  }

  console.log(num(4, 4));
  console.log(num(3, 3));
  console.log(num(2, 3));

  //#4 

  function seguence(start, step) {
    return function () {
        start = start || 0;
        step = step || 1;
        start += step;

        return start;
    }
  };
  
  const generator = seguence (10, 3);

  console.log(generator());
  console.log(generator());
  console.log(generator());

  // Свойство  arguments функции

  //#1 Напишите функцию, которая принимает произвольное количество аргументов в виде строк и выводит их через пробел с помощью document.write() в тело html-документа. Например, функция  showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") должна вывести фразу "I've been learning JavaScript for a month".

  function showWords() {
    let sum = '';
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i] + ' ';
    }
    return sum;
  }
  
  console.log(showWords("I've", "been", "learning", "JavaScript", "for", "a", "month")); 

//#2 Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и возвращает 1 многозначное число. Например, функция с именем complexDigit() при вызове  complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.

function complexDigit() {
  let sum = '';
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(complexDigit(3,6,7));
console.log(complexDigit(1,9,4,8,3));
