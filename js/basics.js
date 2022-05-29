// Условное ветвление
//#1 Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. 

const a = 10;

const result = a === 10 ? console.log('ok') : console.log('not ok');

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
