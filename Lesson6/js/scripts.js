'use strict'

//                                            +++++++++++++++++++
//============================================+++ HOME WORK 6 +++=======================================================
//                                            +++++++++++++++++++
{
    {
//    - создать массив с 20 числами.
        let testArray = [];

        for (let i = 0; i < 20; i++) {
            testArray.push((Math.random() * 100).toFixed(0));
        }

// -- при помощи метода sort и колбека  отсортировать массив.

        testArray.sort((a, b) => a - b);

        console.log(testArray);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

        testArray.sort((a, b) => b - a);

        console.log(testArray);

// -- при помощи filter получить числа кратные 3

        let testArr1 = testArray.filter(val => val % 3 === 0);

        console.log(testArr1);

// -- при помощи filter получить числа кратные 10

        let testArr2 = testArray.filter(val => val % 10 === 0);

        console.log(testArr2);

// -- перебрать (проитерировать) массив при помощи foreach()

        testArray.forEach(val => console.log(val));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

        let newtestArray = testArray.map(val => val * 3);

    }

//======================================================================================================================
    {
//    - создать массив со словами на 15-20 элементов.

        let strtestArray = ['создать', 'массив', 'словами', 'элементов', 'отсортировать', 'алфавиту', 'восходящем', 'порядке',
            'отфильтровать', 'нисходящем', 'длиной', 'символов', 'перебрать', 'получить', 'все', 'будут', 'знаком',
            'конце', 'числа'];

// -- отсортировать его по алфавиту в восходящем порядке.

        strtestArray.sort();
        console.log(strtestArray);

// -- отсортировать его по алфавиту  в нисходящем порядке.

        strtestArray.sort((str1, str2) => str1 > str2 ? -1 : 1);
        console.log(strtestArray);

// -- отфильтровать слова длиной менее 4х символов

        let newStrtestArr = strtestArray.filter(val => val.length < 4);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

        let mapStrtestArr = strtestArray.map(val => val + '!');
        console.log(mapStrtestArr);

    }

//======================================================================================================================
    {
//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
         let users = [
             {name: 'vasya', age: 31, status: false},
             {name: 'petya', age: 30, status: true},
             {name: 'kolya', age: 29, status: true},
             {name: 'olya', age: 28, status: false},
             {name: 'max', age: 30, status: true},
             {name: 'anya', age: 31, status: false},
             {name: 'oleg', age: 28, status: false},
             {name: 'andrey', age: 29, status: true},
             {name: 'masha', age: 30, status: true},
             {name: 'olya', age: 31, status: false},
             {name: 'max', age: 31, status: true}
             ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

        users.sort((a, b) => a.age - b.age);    //зростання

        users.sort((a, b) => b.age - a.age);    //спадання

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

        users.sort((a, b) => a.name.length - b.name.length);    //зростання

        users.sort((a, b) => b.name.length - a.name.length)     //спадання

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

        let usersWithID = users.map((val, index) => {
            return {
                age: val.age,
                name: val.name,
                status: val.status,
                id: index + 1
            };
        });

        console.log(usersWithID, 'usersWithID');

        console.log(users, 'users');

// - відсортувати його за індентифікатором

        usersWithID.sort((a, b) => b.id - a.id);

    }

//======================================================================================================================

    {
//    -- наисать функцию калькулятора с 2мя числами и колбеком
        function calculator(a,b, callback) {
            return callback(a, b);
        }

        console.log(calculator(10, 20, (a, b) => a / b));

// -- наисать функцию калькулятора с 3мя числами и колбеком

        function calculator1(a,b,c, callback) {
            return callback(a, b, c);
        }

        console.log(calculator1(10, 20, 30, (a, b,c) => a / b + c));

    }

//
//========================================КЛАССНАЯ РАБОТА================================================================================
//

    {
        let cars = [
            {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
            {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
            {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
            {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
            {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
            {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
            {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
            {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
            {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
            {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
            {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
            {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
            {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
            ];
        // Відфільтрувати масив за наступними крітеріями :

        function showInConsole(res,comment){
            for (const elRes of res) {
                console.log(elRes, comment);
            }
        }

// - двигун більше 3х літрів

        let engineOverV3 = cars.filter(val => val.volume >= 3);
        showInConsole(engineOverV3, 'двигун більше 3х літрів');
        console.log('=============================================================================');

// - двигун = 2л

        let engineV2 = cars.filter(val => val.volume === 2);
        showInConsole(engineV2, 'двигун = 2л');
        console.log('=============================================================================');
// - виробник мерс

        let meren = cars.filter(val => val.producer === 'mercedes');
        showInConsole(meren, 'виробник мерс');
        console.log('=============================================================================');
// - двигун більше 3х літрів + виробник мерседес

        let marenOverV3 = cars.filter(val => val.producer === 'mercedes' && val.volume >= 3);
        showInConsole(marenOverV3, 'двигун більше 3х літрів + виробник мерседес');
        console.log('=============================================================================');
// - двигун більше 3х літрів + виробник субару

        let subaruOverV3 = cars.filter(val => val.producer === 'subaru' && val.volume >= 3);
        showInConsole(subaruOverV3, 'двигун більше 3х літрів + виробник субару');
        console.log('=============================================================================');
// - сили більше ніж 300

        let powerOver300 = cars.filter(val => val.power > 300);
        showInConsole(powerOver300, 'сили більше ніж 300');
        console.log('=============================================================================');
// - сили більше ніж 300 + виробник субару

        let subaruOver300 = cars.filter(val => val.power > 300 && val.producer === 'subaru');
        showInConsole(subaruOver300, 'сили більше ніж 300 + виробник субару');
        console.log('=============================================================================');
// - мотор серіі ej

        let engineEJ = cars.filter(val => val.engine.startsWith('ej'));
        showInConsole(engineEJ, 'мотор серіі ej');
        console.log('=============================================================================');
// - сили більше ніж 300 + виробник субару + мотор серіі ej

        let subaruOver300EJ = cars.filter(val => val.engine.startsWith('ej') && val.producer === 'subaru' && val.power > 300);
        showInConsole(subaruOver300EJ, 'сили більше ніж 300 + виробник субару + мотор серіі ej');
        console.log('=============================================================================');
// - двигун меньше 3х літрів + виробник мерседес

        let merenLessV3 = cars.filter(val => val.volume < 3 && val.producer === 'mercedes');
        showInConsole(merenLessV3, 'двигун меньше 3х літрів + виробник мерседес');
        console.log('=============================================================================');
// - двигун більше 2л + сили більше 250

        let engineOverV2P250 = cars.filter(val => val.volume > 2 && val.power > 250);
        showInConsole(engineOverV2P250, 'двигун більше 2л + сили більше 250');
        console.log('=============================================================================');
// - сили більше 250  + виробник бмв

        let behaPOver250 = cars.filter(val => val.producer === 'bmw' && val.power > 250);
        showInConsole(behaPOver250, 'сили більше 250  + виробник бмв');
        console.log('=============================================================================');

    }

//======================================================================================================================

    {
//- взять слдующий массив

        let usersWithAddress = [
            {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
            {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Adisabeba', number: 1}},
            {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Koronavirus', number: 121}},
            {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Barada', number: 90}},
            {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Koklush', number: 115}},
            {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Vilka', number: 2}},
            {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Kazinaki', number: 22}},
            {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Brila', number: 43}},
            {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Flo', number: 12}},
            {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Kokoshnik', number: 16}},
            {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Sosjura', number: 121}}
            ];

// -- отсортировать его по id пользователей

        usersWithAddress.sort((user1, user2) => user1.id - user2.id);

 // -- отсортировать его по id пользователей в обратном опрядке

        usersWithAddress.sort((user1, user2) => user2.id - user1.id)

// -- отсортировать его по возрасту пользователей

        usersWithAddress.sort((user1, user2) => user1.age - user2.age);

// -- отсортировать его по возрасту пользователей в обратном порядке

        usersWithAddress.sort((user1, user2) => user2.age - user1.age)

// -- отсортировать его по имени пользователей

        usersWithAddress.sort((user1, user2) => {
            let a = user1.name.toLowerCase(),
                b = user2.name.toLowerCase();
            if(a < b){
                return -1;
            }
            if(a > b){
                return 1;
            }
            return 0;
        });

// -- отсортировать его по имени пользователей в обратном порядке

        usersWithAddress.sort((user1, user2) => {
            let a = user2.name.toLowerCase(),
                b = user1.name.toLowerCase();
            if(a < b){
                return -1;
            }
            if(a > b){
                return 1;
            }
            return 0;
        });

// -- отсортировать его по названию улицы  в алфавитном порядке

        usersWithAddress.sort((user1, user2) => {
            let str1 = user1.address.street.toLowerCase(),
                str2 = user2.address.street.toLowerCase();
            if (str1 < str2) {
                return -1;
            }
            if (str1 > str2) {
                return 1;
            }
            return 0;
        });

// -- отсортировать его по номеру дома по возрастанию

        usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number);

// -- отфильтровать (оставить) тех кто младше 30

        let usersLess30 = usersWithAddress.filter(user => user.age < 30);
        console.log(usersLess30);

// -- отфильтровать (оставить) тех у кого отрицательный статус

        let falseStatus = usersWithAddress.filter(user => !user.status);
        console.log(falseStatus);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

        let falseStatusAndLess30 = usersLess30.filter(user => !user.status);
        console.log(falseStatusAndLess30);

// -- отфильтровать (оставить) тех у кого номер дома четный

        let evenHouseNumbers = usersWithAddress.filter(user => user.address.number % 2 === 0);
        console.log(evenHouseNumbers);

    }

//====================================================================================================================
// ======ДОПОЛНИТЕЛЬНО========
// ======================================================================================================================

    {
    //    Створити обєкт автомобіля з полями:
        // Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
        // Власник автомобіля теж має бути обєкт, у якого є поля
        // Імя, вік, стаж водіння.

        class Car{
            constructor(brand, enginePower, price, year, name, age, experience) {
                this.brand = brand;
                this.enginePower = enginePower;
                this.price = price;
                this.year = year;
                this.driver = {
                    name,age,experience
                };
            }
        }

        // Створити не менше 7 та не більше 20 машинок.

        let cars = [
            new Car('vedro', 200, 100, 1890, 'pedro', 30, 4),
            new Car('ferara', 270, 1000, 1994,'Wu', 42,12),
            new Car('konjaka', 1, 1200, 2008, 'chapaev', 48, 29),
            new Car('belaz', 2700, 100000, 1994,'ivan', 42,12),
            new Car('volvo', 150, 1000, 1995, 'chelentano', 89, 70),
            new Car('kraz', 1700, 1040000, 1994,'nestor', 42,22),
            new Car('laz', 2000, 1500000, 1980, 'stepan', 20, 2),
            new Car('ford', 350, 102000, 1994,'tramp', 60,19),
            new Car('lada-sedan-baklajan', 250, 3000, 1990, 'ashot', 39, 25),
            new Car('renault', 300, 121000, 2010,'makron', 42,12),
            new Car('mercedes', 450, 130000, 2004, 'Merkel', 69, 15),
            new Car('ferrero-roshen', 12, 24.50, 2004,'petro', 64,45),
            new Car('stupa', 40, 12500, 1490, 'Jaga', 300, 290),
            new Car('metla', 32, 12300, 1608,'Klara', 142,122),
            new Car('brevno', 1, 2, 1943, 'ignat', 65, 55),
            new Car('mazda', 340, 10000, 1994,'gomes', 42,21)
        ];

        // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
        // (переприсвоєння змінної потужності).
        // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
        // Для початку вкладіть всі наші створені автомобілі в масив cars.

        // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності
        // двигуна на 10% та ціну на 5%

        cars.forEach((car, index) => {
            if(index%2===0){
                car.enginePower += car.enginePower *0.1;
                car.price += car.price * 0.05;
            }
        });

        // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
        // але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
        // що збільшить йому досвід на 1 рік.

        cars.forEach(car => {
            if (car.driver.experience < 5 && car.driver.age > 25) {
                car.driver.experience += 1;
            }
        });

        // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

        let allPriceSum = cars.map(car => car.price)
            .reduce((p1, p2) => p1 + p2);

        console.log(cars);
        console.log('===================================');
        console.log(allPriceSum);

    }

//======================================================================================================================

    {
    //    Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший
        //    и наибольший индекс заданного элемента.
        // Входные данные: testArr — массив целых чисел значения которых по модулю не больше 10.
        // Размер массива не более 10 элементов.
        // Вывод: наибольший и наименьший индекс в массиве заданного элемента.
        // Если такого элемента нет в массиве, выведите -1.
        //
        // Пример:
        // testArr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
        // 1. Key = 1
        // Answer: MinIndex = 0, MaxIndex = 0.
        // 2. Key = 4
        // Answer: MinIndex = 3, MaxIndex = 6.

        let testArr = [];

        for (let i = 0; i < 10; i++) {
            let rand = Math.random();
            if ((Math.random() * 10) > 8 && rand !== 0) {
                testArr.push(+(rand * 10 * -1).toFixed(0));
            } else {
                testArr.push(+(rand * 10).toFixed(0));
            }
        }

        testArr.sort((a, b) => a - b);

        function minAndMaxIndex(key,arr){
            let MinIndex = 0,
                MaxIndex = 0,
                count = 0;
            arr.forEach((el, index) => {
                if (el === key) {
                    if (count < 1) {
                        MinIndex = index;
                        count++;
                    } else {
                        MaxIndex = index;
                        count++;
                    }
                }
            });

            if (count > 0) {
                if(count === 1){
                    MaxIndex = MinIndex;
                }
                return {MinIndex, MaxIndex};
            }else {
                return -1;
            }
        }

        console.log(testArr);

        let key = 4;

        let minMaxIndex = minAndMaxIndex(key, testArr);

        if(minMaxIndex !== -1){
            for (const k in minMaxIndex) {
                console.log(`${k} = ${minMaxIndex[k]}`);
            }
        }else {
            console.log(`Масив не має ${key}`);
        }
    }

}