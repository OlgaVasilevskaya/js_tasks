//Задания на алгоритмы 

//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

let checkNum = (a, b) => a === b;

console.log(checkNum(1, 1));
console.log(checkNum(1, 2));


//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

let checkNum = (a, b) => a + b > 10;

console.log(checkNum(1, 10));
console.log(checkNum(1, 2));


// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

let checkNum = (a) => a < 0;

console.log(checkNum(-1));
console.log(checkNum(1));


//С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

let str = '';

for (let i = 1; i <= 9; i++) {
  str += i;
}

console.log(str);


//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let result = '';

for (let i = 1; i <= 20; i++) {
  result += 'x';
  console.log(result);
}


//С помощью двух вложенных циклов нарисуйте следующую пирамидку:

let result = '';

for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < i; j++) {
    result += i;
  }
  result += '\n';
}

console.log(result);


//Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

let result = '';
const length = 5;

for (let i = 1; i <= length; i++) {
  result += 'xx';
  console.log(result);
}


//Давайте выведем на экран следующую пирамидку: 111 перенос строки 222 и т.д. до 999

let result = '';

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    result += i; 
  }
  result += '\n';
}

console.log(result);


//Выведем теперь следующую пирамидку:

let result = '';

for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < i; j++) {
    result += i;
  }
  result += '\n';
}

console.log(result);


//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

const [item1, item2, item3] = a;
const [item4, item5, item6] = b;

const c = [item1, item2, item3, item4, item5, item6];

console.log(c);


//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

const a = ['a', 'b', 'c'];
const [item1, item2, item3] = a;
const b = [item1, item2, item3, 1, 2, 3];

console.log(b);


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

console.log(Object.keys(a));


//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 

const str = '123456';

console.log(str.split('').reverse().join(''));


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

const isFive = (value) => value === 5;

console.log(a.some(isFive));


//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

function checkNum (a) {
  for (let i = 2; i < a; i++) {
    return a % i === 0;
  }
}

console.log(checkNum(31));


//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

const arr =[1, 1, 2];

function checkNum() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return (console.log('yes'));
    }

    return (console.log('no'));
}

checkNum(arr);


//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла) 

let result = [];

for (let i = 1; i <= 3; i++) {
  let str = ' ';
  for (let j = 0; j < i; j++) {
    str += i;
  }

  result.push(str);
}

console.log(result);


//Fill. Напишите функцию, которая заполняет новый массив предоставленным значением. 

function fill(arraySize, value) {
  let arr = [];

  for(let i = 0; i < arraySize; i++) {
    arr.push(value);
  }

  return arr;
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']


//Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

function reverse(array) {
  const newArr = [];
  
  for (let i = array.length - 1; i >= 0; i = i - 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]


//Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

const compact = array => 
  array.filter(item => item);

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]


//From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

const fromPairs = array => 
  array.reduce((key, item) => {
    key[item[0]] = item[1];
    
  return key;
  }, {});


const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }


//Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

const without = (array, ...args) => 
array.filter(item => !args.includes(item));


const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]


//Unique. Напишите функцию, которая убирает повторяющиеся значения.

const unique = (array) => 
  array.filter((item, index) =>
    array.indexOf(item) === index);

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]


//IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

const isEqual = (firstArray, secondArray) => {
  //наведи, пжл, на мысль 
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];

console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false


//Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

function chunk (array, size) {
  const arr =[];

  let i = 0;

  while (i < array.length) {
    arr.push(array.slice(i, size + i));
    i = i + size;
  }

  return arr;
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr = [[1, 2, 3], [4, 5], [6]];

let result = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result += arr[i][j];
  }
}

console.log(result);


//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное. 

const arr = [1, 2, 3, 4, -1];
const newArr = arr.filter(item => item > 0);

console.log(newArr);


//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

const a = 13;

function getDigitsSum(a) {
  const b = String(a);
  return +b[0] + +b[1];
}

console.log(getDigitsSum(a));


//Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

const str = 'hello hello';


function ucfirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}

const arr = str.split(' ').map(item => (ucfirst(item)));

console.log(arr);


//Дана строка, например, '123456'. Сделайте из нее '214365'.

const str = '123456';
const result = str[1] + str[0] + str[3] + str[2] + str[5] + str[4];

console.log(result); //не могу проследить логику перемешивания цифр. Подскажи, пжл :)
