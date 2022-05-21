// OHW-1-JS After war continuing education.
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hi = 'hello';
// let own = 'owu';
// let com = 'com';
// let ua = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let tru = true;
// let fal = false;
//    console.log(hi);
// document.write(hi);
//          // alert(hi);
//    console.log(own);
// document.write(own);
//          // alert(own);
//    console.log(com);
// document.write(com);
//          // alert(com);
//    console.log(ua);
// document.write(ua);
//          // alert(ua);
//    console.log(num1);
// document.write(num1);
//          // alert(num1);
//    console.log(num2);
// document.write(num2);
// // alert(num2);
//    console.log(num3);
// document.write(num3);
// // alert(num3);
//    console.log(num4);
// document.write(num4);
// // alert(num4);
//    console.log(num5);
// document.write(num5);
// // alert(num5);
//    console.log(num6);
// document.write(num6);
// // alert(num6);
//    console.log(tru);
// document.write(tru);
// // alert(tru);
//    console.log(fal);
// document.write(fal);
// alert(fal);
// -------------------------------
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// -------------------------------
//     hi = 'new hello';
//     own = 'new owu';
//     com = 'new com';
//     ua = 'new ua';
//     num1 = 'Boolean';
//     num2 = -60;
//     num3 = 'sting';
//     num4 = 321;
//     num5 = Math.PI;
//     num6 = '3';
//     tru = false;
//     fal = 'true';
//
//    console.log(hi);
// document.write(hi);
//          // alert(hi);
//    console.log(own);
// document.write(own);
//          // alert(own);
//    console.log(com);
// document.write(com);
//          // alert(com);
//    console.log(ua);
// document.write(ua);
//          // alert(ua);
//    console.log(num1);
// document.write(num1);
//          // alert(num1);
//    console.log(num2);
// document.write(num2);
// // alert(num2);
//    console.log(num3);
// document.write(num3);
// // alert(num3);
//    console.log(num4);
// document.write(num4);
// // alert(num4);
//    console.log(num5);
// document.write(num5);
// // alert(num5);
//    console.log(num6);
// document.write(num6);
// // alert(num6);
//    console.log(tru);
// document.write(tru);
// // alert(tru);
//    console.log(fal);
// document.write(fal);
// // alert(fal);
// -------------------------------
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// -------------------------------
// let firstName = 'Alexandr';
// let middleName = 'Volodymyrovych'
// let lastName = 'Kazymyr';
//
// let person = firstName + ' ' +  middleName + ' ' + lastName;
// console.log(person);
// document.write(person)
// -------------------------------
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// -------------------------------
// let firstName = prompt("Введіть своє ім'я: ");
// let middleName = prompt("Введіть своє ім'я по батькові: ")
// let age = prompt("Введіть свій вік: ");
// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);
// document.write(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);
// alert(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);
// -------------------------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// -------------------------------
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// -------------------------------
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// -------------------------------
// 5 > 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
// -------------------------------

// --------------------------------------------------------------------------------
// OCW-1-JS After War continuing education.
// --------------------------------------------------------------------------------
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// -------------------------------
// let str = '«Привіт»';
// let num = 123;
// let flag = true;
// let txt = '«true»';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
// -------------------------------
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За допомогою 3х математичних операцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
// -------------------------------
// let a1 = 10 * 2 + 14;
// let a2 = a1 / 2 - 5;
// let a3 = 112 - (a1 + a2);
// let a4 = 10 * 10 - 10;
// let a5 = a4 - a2 + 9;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// -------------------------------
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// -------------------------------
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// -------------------------------
// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// -------------------------------
// let height = 23;
// let width = 10;
//
// let s = width * height;
// console.log(`Площа прямокутника висотою 23см. та шириною 10см. = ${s} см2`);
// -------------------------------
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// -------------------------------
// let heightC = 10;
// let dC = 4;
//
// let v = (Math.PI * Math.pow(dC, 2)/4) * heightC;
// console.log(`Oбъем цилиндра высотой 10м и диаметром основания 4м = ${v} м3`);
// -------------------------------
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// -------------------------------
// let n = 3;
// let m = 4;
//
// let k = Math.sqrt((Math.pow(n,2) + Math.pow(m,2)));
// console.log(k);
// -------------------------------
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// -------------------------------
// let firstName = 'Olexandr';
// let midlName = 'Volodymyrovych';
// let lastName = 'Kazymyr';
// let age = 38;
// let hobby = 'Soccer';
// console.log(`Name: ${firstName}\nMidl Name: ${midlName}\nLast Name: ${lastName}\nAge: ${age}\nHobby: ${hobby}`);
// alert(`Name: ${firstName}\nMidl Name: ${midlName}\nLast Name: ${lastName}\nAge: ${age}\nHobby: ${hobby}`);
// -------------------------------
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// -------------------------------
// let str1 = 'Кто ';
// let str2 = 'ты ';
// let str3 = 'такой? ';
// let concatenation = str1 + str2 + str3;
// console.log(concatenation);
// document.write(concatenation);
// -------------------------------
// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//     let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// -------------------------------
// 205
// 15
// 40
// 10
// -------------------------------


// --------------------------------------------------------------------------------
// OAW-1-JS After War continuing education.
// --------------------------------------------------------------------------------
// - С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// -------------------------------
// let num1 = prompt('Enter First Number :');
// let num2 = prompt('Enter Next Number :');
// let sum = (+num1) + (+num2);
// alert(`Sum of Number ${num1} and ${num2} = ${sum}`);
// -------------------------------
// - С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
//     а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// -------------------------------
// let firstName = prompt("Введіть своє ім'я: ");
// let middleName = prompt("Введіть своє ім'я по батькові: ")
// let age = prompt("Введіть свій вік: ");
// alert(`Доброго вечера ${firstName} ${middleName},\n мои поздравления что Bам ${age}`);
// -------------------------------
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // -> false;
// console.log(34 > 33 && 23 < 90 ); // -> true;
// console.log(99 > 100 && 45 > 12 ); // -> false;
// console.log(132 > 100 || 45 < 12 ); // -> true;
// console.log(111 > 11 || 45 < 111 ); // -> true;
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12)); // -> true;
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // -> true;
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // -> false;
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // -> true;
// console.log(!!'-1'); // -> true;
// console.log(!!-1); // -> true;
// console.log(!!'0'); // -> true;
// console.log(!!'null'); // -> true;
// console.log(!!'undefined'); // -> true;
// console.log(!!(3/'owu')); // -> false;
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // -> true;
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // -> false;
// -------------------------------

// - Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// -------------------------------
// let num1 = prompt('Number One: ');
// let num2 = prompt('Number Two: ');
// let num3 = prompt('Number Three: ');
//
// if (num1 < num2 && num1 < num3 && num2 < num3) {
//     console.log(`${num1}\n${num2}\n${num3}`);
// } else if (num1 < num2 && num1 < num3 && num3 < num2) {
//     console.log(`${num1}\n${num3}\n${num2}`);
// } else if (num2 < num1 && num2 < num3 && num1 < num3) {
//     console.log(`${num2}\n${num1}\n${num3}`);
// } else if (num2 < num1 && num2 < num3 && num1 > num3) {
//     console.log(`${num2}\n${num3}\n${num1}`);
// } else if (num3 < num1 && num3 < num2 && num2 < num1) {
//     console.log(`${num3}\n${num2}\n${num1}`);
// } else if (num3 < num1 && num3 < num2 && num2 > num1) {
//     console.log(`${num3}\n${num1}\n${num2}`);
// };
// -------------------------------
// - Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// -------------------------------
// let data = prompt('Enter зеленый, желтый, красный, авария');
//
// if (data === 'зеленый') {
//     alert("иди");
// } else if (data === 'желтый') {
//     alert("подожди");
// } else if (data === 'красный') {
//     alert("стой");
// } else {
//     alert("делай что хочешь");
// };
// -------------------------------
//     - Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// -------------------------------
// let isRoadClear = confirm('Есть ли машины на дороге?');
// if (isRoadClear) {
//     console.log('Yes');
// } else {
//     console.log('No');
// };
// -------------------------------
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// -------------------------------
// let data = prompt('Enter зеленый, желтый, красный, авария');
// let isRoadClear = confirm('Есть ли машины на дороге?');
//
// if (data === 'зеленый' && isRoadClear === false) {
//     alert("иди");
// } else if (data === 'зеленый' && isRoadClear) {
//     alert('подожди пока нарушители проедут');
// } else if (data === 'желтый' && isRoadClear) {
//     alert("жди");
// } else if (data === 'желтый' && isRoadClear === false) {
//     alert('все рано жди');
// } else if (data === 'красный' && isRoadClear) {
//     alert("стой все рано");
// } else if (data === 'красный' && isRoadClear === false) {
//     alert('стой и жди');
// } else {
//     alert("делай что хочешь");
// };
// -------------------------------------------------------------------------------


/*
Використовуючи данні з масиву, за допомоги document.write
побудувати структуру по шаблону template1.1
*/
// -------------------------------
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// // let template_11 = document.getElementById('template_11');
// document.write(`<ul>`);
// for (let i = 0; i < listOfItems.length; i++) {
//     let listOfItem = listOfItems[i];
//     // let li = document.createElement('li');
//         // li.innerText = listOfItem;
//         // template_11.append(li);
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);
// -------------------------------

/*
Використовуючи данні з масиву, за допомоги document.write
побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
Шаблон застосувати до кожного об'єкта в масиві
*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

<!--template 2.1-->
// document.write(`<div>`);
// for (let simpson of simpsons) {
//     document.write(`<hr>`);
//     for (let simpsonKey in simpson) {
//         if (simpsonKey === 'photo') {
//             document.write(`<p>${simpsonKey.toUpperCase()} :</p> <img src = ${simpson.photo}>`);
//         } else {
//             document.write(`${simpsonKey.toUpperCase()}: ${simpson[simpsonKey]}<br>`);
//         };
//     };
// };
// document.write(`</div>`);

<!--template 2.2-->
// document.write(`<div>`);
// for (let simpson of simpsons) {
//     document.write(`<hr>`);
//     for (let simpsonKey in simpson) {
//         if (simpsonKey === 'photo') {
//             document.write(`<p>${simpsonKey.toUpperCase()} :</p> <img src = ${simpson.photo}>`);
//         } else if (simpsonKey === 'name' || simpsonKey === 'surname' || simpsonKey === 'age') {
//             document.write(`<h2>${simpsonKey.toUpperCase()}: ${simpson[simpsonKey]}</h2>`);
//         } else if (simpsonKey === 'info') {
//             document.write(`<p>${simpsonKey.toUpperCase()}: ${simpson[simpsonKey]}</p>`);
//         } else {
//             document.write(`${simpsonKey.toUpperCase()}: ${simpson[simpsonKey]}<br>`);
//         };
//     };
// };
// document.write(`</div>`);
// -------------------------------

/*
Використовуючи данні з масиву, за допомоги document.write
побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
    */
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// -------------------------------
// document.write(`<div>`);
// for (let product of products) {
//     document.write(`<div class="product-card">`);
//     document.write(`<hr>`);
//     for (let productKey in product) {
//         if (productKey === 'image') {
//             document.write(`<img src=${product.image} alt="image" class="product-image">`);
//         } else {
//             document.write(`<h3>${productKey.toUpperCase()} : ${product[productKey]}</h3>`);
//         };
//     };
//     document.write(`</div>`);
// };
// document.write(`</div>`);
// -------------------------------