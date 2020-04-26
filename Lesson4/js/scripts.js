'use strict'

//                                                 +++++++++++++++++++
//=================================================+++ HOME WORK 4 +++==================================================
//                                                 +++++++++++++++++++
{
//       - створити функцію яка виводить масив
    function arrayShow(arr) {
            console.log(arr);
    }

    // function arrayShowElInLine(arr) {
    //     for (const el of arr) {
    //         console.log(el);
    //     }
    // }
// своя сортировка массива, потому как глючит встроенная чего-то...
    function mySort(arr) {
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[i] < arr[j]){
                    arr[i] += arr[j];
                    arr[j] = arr[i] - arr[j];
                    arr[i] -= arr[j];
                }
            }
        }
    }

//        - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню
//        функцію.

    function arrPushRand(x, arr) {
        for (let i = 0; i < x; i++) {
            arr.push((Math.random() * 100).toFixed(2));
        }
        arrayShow(arr);
    }
//        - створити функцію яка приймає три числа та виводить та повертає найменьше.

    function minNum(a, b, c) {
        let arr = [a, b, c];
        arr.sort();
        console.log(arr[0]);
        return arr[0];
    }

//        - створити функцію яка приймає три числа та виводить та повертає найбільше.

    function maxNum(a, b, c) {
        let arr = [a, b, c];
        arr.sort();
        console.log(arr[2]);
        return arr[2];
    }

//        - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

    function minMaxNum(...x) {
        mySort(x);
        console.log(x[x.length-1]);
        return x[0];
    }

//        - створити функцію яка виводить масив
//        - створити функцію яка повертає найбільше число з масиву

    function maxArrNum(arr) {
        mySort(arr);
        return arr[arr.length-1];
    }
//        - створити функцію яка повертає найменьше число з масиву

    function minArrNum(arr) {
        mySort(arr);
        return arr[0];
    }

//        - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

    function sumArrayElements(arr) {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        }
        return sum;
    }

//        - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    function averageArrayElements(arr) {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        }
        return sum / arr.length;
    }
//        - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

    function arrayLength(arr) {
        return arr.length;
    }

//        - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

    function objFieldInArray(arr){
        let fields = 0;
        for (const obj of arr) {
            for (const arrKey in obj) {
                fields++;
            }
        }
        return fields;
    }

//        - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//          Приклад
//          [1,2,3,4]
//          [2,3,4,5]
//          результат
//          [3,5,7,9]

    function sumOfArrays(arr1, arr2) {
        let arr = [];
        for (let i = 0; i < arr1.length; i++) {
            arr.push(arr1[i] + arr2[i]);
        }

        return arr;
    }
    
//    - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
    
    function changeElement(arr, i) {
        if(arr[i+1] < arr.length){
            let obj = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = obj;
        }else{
            console.log(`Объект с введенным индексом i(${i}) не может поменятся со следующим индексом, т.к
             длина массива равна ${arr.length}`);
        }
    }
    
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

    function transferZero(arr) {
        let c = 0;
        while (arr.includes(0)){
            arr.splice(arr.indexOf(0), 1);
            c++;
        }
        for (let i = 0; i < c; i++) {
            arr.push(0);
        }
    }


//    ================================================================================

//    Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

    function addHello() {
        let div = document.createElement('div');
        div.innerText = 'Hello owu';
        document.body.appendChild(div);
    }

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

    function addElAndTextToBody(element, text) {
        let el = document.createElement(element);
        el.innerText = text;
        document.body.appendChild(el);
    }

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту
// в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці

    let cars = [
        {model: 'ererer', year: 1920, power: 300, color: 'red'},
        {model: 'vidro', year: 1820, power: 12, color: 'blue'},
        {model: 'mustang', year: 1970, power: 700, color: 'yellow'},
        {model: 'ishak', year: 1990, power: 0.3, color: 'grey'},
        {model: 'ligi', year: 1920, power: 0, color: 'pink'},
        {model: 'cartonka', year: 1999, power: 3000, color: 'green'},
        {model: 'lamborgini', year: 1978, power: 300, color: 'red'},
        {model: 'derun', year: 1920, power: 30, color: 'black'},
        {model: 'abirvalg', year: 120, power: 700, color: 'gold'},
        {model: 'stupa', year: 1520, power: 10, color: 'brown'}];

    function addListFromArray(arr, element) {
        let el = document.createElement(element);
        for (let item of arr) {
            let div = document.createElement('div');
            let list = document.createElement('ul');
            let title = document.createElement('h2');
            div.appendChild(title);
            div.appendChild(list);
            el.appendChild(div);

            let count = 0;
            for (let key in item) {
                count++;
                if(count === 1){
                    title.innerText = item[key];
                }else {
                    let li = document.createElement('li');
                    li.innerText = `${key}: ${item[key]}`;
                    list.appendChild(li);
                }
            }
        }
        return el;
    }

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно
// додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

    function addListFromArray1(arr, element) {
        let el = document.createElement(element);
        for (let item of arr) {
            let div = document.createElement('div');
            let title = document.createElement('h2');
            div.appendChild(title);
            el.appendChild(div);

            let count = 0;
            for (let key in item) {
                count++;
                if(count === 1){
                    title.innerText = item[key];
                }else {
                    let itemDiv = document.createElement('div');
                    itemDiv.innerText = `${key}: ${item[key]}`;
                    div.appendChild(itemDiv);
                }
            }
        }
        return el;
    }


//===================================================================================================================

//    (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто
// з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
        ];
    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
        ];

    function addressToUser(arrUser, arrCities) {
         let arrRes = [];
         for (const user of usersWithId) {
             for (const city of citiesWithId) {
                 if(user.id === city.user_id){
                     user.address = city;
                     arrRes.push(user);
                 }
             }
         }

         return arrRes;

    }


//======================================================================================================================

//    ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

    let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},
			];

    function addRules(arrRules) {
        let wrapDiv = document.createElement('div');
        wrapDiv.classList.add('wrap');

        for (let rule of arrRules) {
            let ruleDIV = document.createElement('div'),
                title = document.createElement('h3'),
                ruleDescr = document.createElement('div');
            title.innerText = rule.title;
            ruleDescr.innerText = rule.body;
            ruleDIV.appendChild(title);
            ruleDIV.appendChild(ruleDescr);
            wrapDiv.appendChild(ruleDIV);
        }

        return wrapDiv;
    }

}
//======================================================================================================================

//    ===========додаткове від віктора========
//      1) Точная степень двойки.
//      Дано натуральное число N.
//      Выведите слово YES, если число N является точной степенью двойки,
//      или слово NO в противном случае.
//      Операцией возведения в степень пользоваться нельзя!

{
    function isTwo(a) {
        while(a > 1){
            if(a % 2 !== 0){
                return false;
            }
            a /= 2;
        }
        return true;
    }
}

//
//      2) Deep Copy
//      реалізувати глибоке копіювання обєкту за допомогою рекурсій

{
    function deepCopy(obj) {
        let o = {};
        for (let key in obj) {
            if(typeof obj[key] == 'object'){
                deepCopy(obj[key]);
            }
            o[key] = obj[key];
        }
        return o;
    }
}

//
//      3) Flat
//      Вирівняти багаторівневий масив в однорівневий
//      [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

{
    let arr = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];

    let arrFlat = arr.flat(2);

}






