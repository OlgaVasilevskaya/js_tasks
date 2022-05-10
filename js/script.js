// Условное ветвление
//#1 Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. 

const a = prompt('Введите число 10', '');

if (a === 10) {
  alert('Верно');
} else {
  alert('Неверно');
}

//#2 В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую). 

const min = prompt('Введите число от 0 до 59', '');

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

//#3 Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const a = prompt('write a number', '');

if (!a) {
  alert('you are right');
} else {
  alert('you are NOT right');
}

//#4 Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let a = prompt('write a number', '');

if (a > 0) {
  alert('you are right');
} else {
  alert('you are NOT right');
}


//Логические операторы
//#1  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

const a = prompt('write a number from 0 to 5', '');

if (a > 0 && a <= 5) {
  alert('right');
} else {
  alert('wrong');
}

//#2 Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.


let num = prompt('write a number', '');

let a = Number(num);

if (a == 0 || a ==2) {
  alert(a + 7);
} else {
  alert(a / 10);
}

//#3 Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let num1 = prompt('write a number', '');
let num2 = prompt('write a number', '');

let a = Number(num1);
let b = Number(num2);

if (a <= 1 && b >= 3) {
  alert(a + b);
} else {
  alert(a - b);
}

//#4 Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

let a = prompt('number', '');
let b = prompt('number', '');

if ((a > 2 && a < 11) && (b >= 6 && b < 14)) {
  alert('OK');
} else {
  alert('NOT OK');
}


//Циклы
//#1.1 Выведите столбец чисел от 1 до 50. (в консоль и в документ html с помощью document.write) Использовать два типа циклов, while и for 

let i = 1;

while (i <= 50) {
  console.log(i);
  i++;
}

// //#1.2

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// //#2.1 Выведите столбец чисел от 1 до 100.

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

// //#2.2

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// //#3.1 Выведите столбец чисел от 11 до 33.

let i = 11;

while (i <= 33) {
  console.log(i);
  i++;
}

// //#3.2

for (let i = 11; i <= 33; i++) {
  console.log(i);
}

// //#4.1 Выведите столбец четных чисел в промежутке от 0 до 100.

let i = 0;

while (i <= 100) {
  console.log(i);
  i += 2;
}

// //#4.2

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// //#5.1 С помощью цикла найдите сумму чисел от 1 до 100.

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

// //#6 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let num = 0;
let n = 1000;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log(n);
console.log(num);


//Switch
//#1 Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

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
//#1  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

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

//#2 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 8;

if (month == 12 && month === 1 && month === 2) {
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

//#3 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

const a = 'abcde';

if (a[0] === 'a') {
  console.log('yes');
} else {
  console.log('no');
}

//#4 Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let a = '12345';

if (a[0] == 1 || a[0] == 2 || a[0] ==3) {
  console.log('yes');
} else {
  console.log('no');
}

//#5 Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

const a = '111';
const sum = Number(a[0]) + Number(a[1]) + Number(a[2]);

console.log(sum);

//#6 Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let a = '123123';

if (Number(a[0]) + Number(a[1]) + Number(a[2]) == Number(a[3]) + Number(a[4]) + Number(a[5])) {
  console.log('yes');
} else {
  console.log('no');
}


//Задачи
//#1 Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.   

let str = 'abcde';

console.log(str[0], str[1], str[3]);

//#2 Напишите скрипт, который считает количество секунд в переданном кол-ве дней (кол-во дней вводим через prompt)

let a = 1;

console.log(a * 24 * 60 * 60);

//#3 Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
console.log(num);

//#4 Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

let str1 = 'Привет,';
let str2 = 'Мир!';

console.log(str1 + ' ' + str2);
console.log(`${str1} ${str2}`);

//#5 Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

let a = 'Olya';

console.log(`Hello, ${a}!`);

//#6 Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

let a = 11;

console.log(a**2);

//#7 Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

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
  );
}

console.log(getNum(10, 10));
console.log(getNum(1, 10));
console.log(getNum(10, 1));


//#2 Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.

function calcArea(a, b = 0) {
  if (!b) { 
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

  //#4 Функция sequence(start, step) при вызове возвращает функцию-генератор. Каждый вызов генератора возвращает новое число в числовой последовательности. start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1).

  const seguence = (start = 0, step = 1) => {
    return function () {
      start = start;
      step = step;
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

//Объекты
//#1 Проверьте, что этот объект не пустой и что в нем есть ключ age. 

let user = {
  name: "John",
  age: 30
};

console.log("age" in user);

//#2 Получите из объекта obj значение id в констанду id не используя выражение obj.id

const obj = {
  id: 5,
  token: 12343423
};

const { id } = obj;
console.log(id);

//#3 Получите из объекта obj значение id и разместите его в константу userId.

const obj = {
  id: 5,
  token: 12343423
};

const { id: userId } = obj;
console.log(userId);

//#1 Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.

const city1 = {
  name: 'ГородN',
  population: '10 млн'
}

//#2 Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

const city2 = {
  name: "ГородM",
  population: 1e6
}

//#3 Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов

function getName () {
  return this.name;
}

city1.getName = getName;
city2.getName = getName;

console.log(city1.getName());
console.log(city2.getName());

//#4 Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями.

function exportStr () {
  return `name=${this.name}\npopulation=${this.population}\n`;
}

city1.exportStr = exportStr;
city2.exportStr = exportStr;

console.log(city1.exportStr());
console.log(city2.exportStr());

//#5 Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj.

function getObj () {
  return this;
}

function getCity () {
  return getObj.apply(this).getName();
}

city1.getCity = getCity;
city2.getCity = getCity;

console.log(city1.getCity());
console.log(city2.getCity());

// (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().

const obj = {
  method1: function () {
    return this;
  },
  method2: function () {
    return this;
  },
  method3: function () {
    return 'метод3';
  }
}

console.log(obj.method1().method2().method3());


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



//Задания на алгоритмы 

//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function num(a, b) {
  if(a === b) {
    return true;
  }
  
  return false;
}

console.log(num(1, 1));
console.log(num(1, 2));


//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function num(a, b) {
  if (a + b > 10) {
    return true;
  }

  return false;
}

console.log(num(1, 10));
console.log(num(1, 2));


// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function num(a) {
  if (a < 0) {
    return true;
  }

  return false;
}

console.log(num(-1));
console.log(num(1));


//С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

let str = '';

for (let i = 1; i <= 9; i++) {
  str += i;
}

console.log(str);


//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let result = '';

for (let i = 1; i <= 20; i++) {
  for (let j = 0; j < i.length; j++) {
  }
  result += 'x';
  console.log(result);
}


//С помощью двух вложенных циклов нарисуйте следующую пирамидку:

let result = '';

for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < i; j++) {
  }
  result += i;
  console.log(result);
}


//Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

let result = '';
const length = 5;

for (let i = 1; i <= length; i++) {
  for (let j = 0; j < i; j++) {
  }
  result += 'xx';
  console.log(result);
}


//РЕШИТЬ!!!!!Давайте выведем на экран следующую пирамидку: 111 перенос строки 222 и т.д. до 999

let result = '';

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    result = result + i;
    if (result.length === 3){
      console.log(result);
    }
  }
}


//Выведем теперь следующую пирамидку:

let result = '';

for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < i; j++) {
  }
  result += i;
  console.log(result);
}


//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

const c = a.concat(b);
console.log(c);


//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

const a = ['a', 'b', 'c'];
a.push(1, 2, 3);

console.log(a);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const a = [1, 2, 3, 4, 5];
a.splice(1, 2);

console.log(a);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const a = [1, 2, 3, 4, 5];
a.splice(5, 0, 2, 3, 4);

console.log(a);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const a = [1, 2, 3, 4, 5];
a.splice(3, 0, 'a', 'b', 'c');

console.log(a);


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const a = [1, 2, 3, 4, 5];
a.splice(1, 0, 'a', 'b');
a.splice(6, 0, 'c');
a.splice(8, 0, 'e');

console.log(a);


//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const a = [3, 4, 1, 2, 7];
a.sort();

console.log(a);


//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const a = {js:'test', jq: 'hello', css: 'world'};

for (let key in a){
  console.log(key);
}


//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 

const str = '123456';
const a = str.split('').reverse().join('');

console.log(a);


//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

const str = 'hello';
const a = str[0].toUpperCase() + str.substring(1);

console.log(a);


//Проверьте, что строка начинается на http://.

const str = 'http://do';

const result = str.startsWith('http://');

console.log(result);


//Проверьте, что строка заканчивается на .html

const str = 'do.html';

const result = str.endsWith('.html');

console.log(result);


//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

const a = [1, 2, 3, 4, 5];
let result = '';

for (let i = 0; i < a.length; i++) {
  if (a[i] === 5){
    result = 'yes';
  } else {
    result = 'no';
  }
}

console.log(result);


//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

function checkNum (a) {
  if ((a % 1 === a) && (a % 31 === 1)) {
    return false;
  } else {
    return true;
  }
}

console.log(checkNum(31));


//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

const arr =[1, 1, 2];

function checkNum () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1])
    return (console.log('yes'));
    }
    return (console.log('no'));
}

checkNum (arr);


//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла) 

let result = '';
function getArr () {
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      result += i
    }
  }
  return [result];
}
console.log(getArr());


//РЕШИТЬ!!!!Fill. Напишите функцию, которая заполняет новый массив предоставленным значением. 

function fill (arraySize, value) {
  return 
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']


//Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

function reverse (array) {
  const newArr = [];
  
  for (let i = array.length - 1; i >= 0; i = i - 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]


//Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

const compact = (array) => 
  array.filter(item => item != undefined && item != 0 && item != null);

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]


//РЕШИТЬ!!!!!!!!!From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

const fromPairs = (array) => 


const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }


//Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

const without = (array, ...args) => {
  return array.filter(item => !args.includes(item));
}

const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]


//Unique. Напишите функцию, которая убирает повторяющиеся значения.

const unique = (array) => 
  array.filter((item, index) =>
    array.indexOf(item) === index);

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]


//РЕШИТЬ!!!!!!!!!IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

const isEqual = (firstArray, secondArray) => {
  if(firstArray.length === secondArray.length) {
    return true;
  }

  return false;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];

console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false


//РЕШИТЬ!!!!!!!!!Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

function chunk (array, size) {
  
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr = [[1, 2, 3], [4, 5], [6]];

const result = arr[0].reduce((sum, current) => sum + current, 0) + arr[1].reduce((sum, current) => sum + current, 0) + arr[2].reduce((sum, current) => sum + current, 0);

console.log(result);


//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное. 

const arr = [1, 2, 3, 4, -1];
const newArr = arr.filter(item => item > 0);

console.log(newArr);


//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

const a = 13;
const b = String(a);

function getDigitsSum() {
  return +b[0] + +b[1];
}

console.log(getDigitsSum(b));


//Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

const str = 'hello hello';
const result = [];

function ucfirst(a) {
  return a[0].toUpperCase() + a.substring(1);
}

const arr = str.split(' ');
for (let i = 0; i < arr.length; i++) {
   result.push(ucfirst(arr[i]));
}

console.log(result);


//Дана строка, например, '123456'. Сделайте из нее '214365'.

const str = '123456';
const result = str[1] + str[0] + str[3] + str[2] + str[5] + str[4];

console.log(result);
