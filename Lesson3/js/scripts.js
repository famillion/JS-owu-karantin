'use strict'
//                                        ++++===========++++
//========================================+++ HOME WORK 3 +++===============================================
//                                        ++++===========++++


{
    // 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
    // (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

    {
        let obj1 = {
            color: 'white',
            isWhite: true,
            item: 'table'
        };

        let obj2 = {
            id: 100012,
            city: 'Mexico',
            coordinates: {
                latitude: 19.4284700,
                longitude: -99.1276600
            }
        };

        let obj3 = {
            brand: 'lada',
            model: 'vidro',
            engine: 'none',
            mileage: 100500,
            isNew: true
        };

        let obj4 = {
            firstName: 'Eros',
            surname: 'Ramazotti',
            age: 90,
            marital: false
        };

        let obj5 = {
            contry: 'Gondor',
            city: 'Muhosransk',
            population: 100500
        };
    }

    // 2 - создать 5 объектов с полностью разным набором полей.
    // В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно,
    // машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] ,
    // wife: { name: 'cherry' } };

    {
        let obj1 = {
            color: 'white',
            nature: ['moderate', 'northen'],
            communications: {
                wife: 'radistka Ket',
                bestFriend: 'porudchik Rjavsky',
                brother: 'table'
            }
        };

        let obj2 = {
            id: 100012,
            city: 'Mexico',
            transport: ['bus', 'lags'],
            coordinates: {
                latitude: 19.4284700,
                longitude: -99.1276600
            }
        };

        let obj3 = {
            brand: 'lada',
            model: ['vidro', 'vidro XS', 'vidro Lux'],
            engine: {
                capacity: 'none',
                mileage: 100500,
                isNew: true
            }
        };

        let obj4 = {
            firstName: 'Eros',
            surname: 'Ramazotti',
            age: 90,
            marital: false,
            pseudonym: ['DJ Tractor', 'kon v palto', 'rumjani zajac'],
            income: {
                pension: 300,
                backyard: 200
            }
        };

        let obj5 = {
            contry: 'Gondor',
            city: ['Muhosransk', 'Zagopinsk'],
            fauna: {
                animals: ['cats', 'dogs', 'cows'],
                fish: ['karas', 'seledka']
            }
        };
    }

    // 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

    {
        let obj1 = {
            color: 'white',
            isWhite: true,
            item: 'table'
        };

        let obj2 = {
            id: 100012,
            city: 'Mexico',
            coordinates: {
                latitude: 19.4284700,
                longitude: -99.1276600
            }
        };

        let obj3 = {
            brand: 'lada',
            model: 'vidro',
            engine: 'none',
            mileage: 100500,
            isNew: true
        };

        let obj4 = {
            firstName: 'Eros',
            surname: 'Ramazotti',
            age: 90,
            marital: false
        };

        let obj5 = {
            contry: 'Gondor',
            city: 'Muhosransk',
            population: 100500
        };

        let obj6 = {
            color: 'white',
            nature: ['moderate', 'northen'],
            communications: {
                wife: 'radistka Ket',
                bestFriend: 'porudchik Rjavsky',
                brother: 'table'
            }
        };

        let obj7 = {
            id: 100012,
            city: 'Mexico',
            transport: ['bus', 'lags'],
            coordinates: {
                latitude: 19.4284700,
                longitude: -99.1276600
            }
        };

        let obj8 = {
            brand: 'lada',
            model: ['vidro', 'vidro XS', 'vidro Lux'],
            engine: {
                capacity: 'none',
                mileage: 100500,
                isNew: true
            }
        };

        let obj9 = {
            firstName: 'Eros',
            surname: 'Ramazotti',
            age: 90,
            marital: false,
            pseudonym: ['DJ Tractor', 'kon v palto', 'rumjani zajac'],
            income: {
                pension: 300,
                backyard: 200
            }
        };

        let obj10 = {
            contry: 'Gondor',
            city: ['Muhosransk', 'Zagopinsk'],
            fauna: {
                animals: ['cats', 'dogs', 'cows'],
                fish: ['karas', 'seledka']
            }
        };

        //        масив об'єктів
        let arrObjs = [
            obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10
        ];

        for (const obj of arrObjs) {
            for (const objKey in obj) {
                console.log(objKey);
            }
        }


        // 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

        for (const obj of arrObjs) {
            let key = Object.keys(obj);
            console.log(key);
        }

    }

    // 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
    // год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)


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
        {model: 'stupa', year: 1520, power: 10, color: 'brown'}
    ];


    // 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция,
    // страна, регион. (Значаения полей могу быть выдуманными)

    let cities = [
        {name: 'Kukolovka', population: 12, country: 'Ganduras', region: 'Monterey'},
        {name: 'Pechka', population: 12000, country: 'Kakmandu', region: 'Sever'},
        {name: 'Manka', population: 19092, country: 'Zanzibar', region: '13'},
        {name: 'Ejevikosk', population: 1902, country: 'Mordor', region: 'Gruntovka'},
        {name: 'Prichoska', population: 4, country: 'Parikmaheria', region: 'Lokon'}
    ];

    // 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска,
    // мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

    let carsVsDrivers = [
        {
            model: 'ererer', year: 1920, power: 300, color: 'red',
            driver: {name: 'Ivav', age: 30, male: true, experience: 5}
        },
        {
            model: 'vidro', year: 1820, power: 12, color: 'blue',
            driver: {name: 'Petro', age: 60, male: true, experience: 45}
        },
        {
            model: 'mustang', year: 1970, power: 700, color: 'yellow',
            driver: {name: 'Tamara', age: 30, male: false, experience: 0}
        },
        {
            model: 'ishak', year: 1990, power: 0.3, color: 'grey',
            driver: {name: 'Marusia', age: 40, male: false, experience: 20}
        },
        {
            model: 'ligi', year: 1920, power: 0, color: 'pink',
            driver: {name: 'Ivav', age: 30, male: true, experience: 20}
        }
    ];

    // 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

    let i = 0;

    while (i < cars.length) {
        console.log(cars[i]);
        i++;
    }

    i = 0;
    while (i < cities.length) {
        console.log(cities[i]);
        i++;
    }

    i = 0;
    while (i < carsVsDrivers.length) {
        console.log(carsVsDrivers[i]);
        i++;
    }

    // 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

    for (let j = 0; j < cars.length; j++) {
        console.log(cars[i]);

    }

    for (let j = 0; j < cities.length; j++) {
        console.log(cities[i]);

    }

    for (let j = 0; j < carsVsDrivers.length; j++) {
        console.log(carsVsDrivers[i]);

    }

    // 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

    for (const car of cars) {
        console.log(car);
    }

    for (const city of cities) {
        console.log(city);
    }

    for (const cd of carsVsDrivers) {
        console.log(cd);
    }

    // 11 - взять объекты из задания 1 и превратить каждый в json.

    {

        let obj1 = {
            color: 'white',
            isWhite: true,
            item: 'table'
        };

        let obj2 = {
            id: 100012,
            city: 'Mexico',
            coordinates: {
                latitude: 19.4284700,
                longitude: -99.1276600
            }
        };

        let obj3 = {
            brand: 'lada',
            model: 'vidro',
            engine: 'none',
            mileage: 100500,
            isNew: true
        };

        let obj4 = {
            firstName: 'Eros',
            surname: 'Ramazotti',
            age: 90,
            marital: false
        };

        let obj5 = {
            contry: 'Gondor',
            city: 'Muhosransk',
            population: 100500
        };

        let arrObjs = [obj1, obj2, obj3, obj4, obj5],
            arrObjJSON = [];

        for (let el of arrObjs) {
            let str = JSON.stringify(el);
            arrObjJSON.push(str);
        }

        for (const json of arrObjJSON) {
            console.log(json);
        }

        // 12 - взять json из задания 11 и превратить их обратно в объекты.

        let arrObjs2 = [];

        for (let el of arrObjJSON) {
            let strToObj = JSON.parse(el);
            arrObjs2.push(strToObj);
        }

        for (const obj of arrObjs2) {
            console.log(obj);
        }
    }

    // 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

    {
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
            {model: 'stupa', year: 1520, power: 10, color: 'brown'}
        ];

        for (let car of cars) {
            console.log(JSON.stringify(car));
        }
    }

    // 14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

    {
        let cities = [
            {name: 'Kukolovka', population: 12, country: 'Ganduras', region: 'Monterey'},
            {name: 'Pechka', population: 12000, country: 'Kakmandu', region: 'Sever'},
            {name: 'Manka', population: 19092, country: 'Zanzibar', region: '13'},
            {name: 'Ejevikosk', population: 1902, country: 'Mordor', region: 'Gruntovka'},
            {name: 'Prichoska', population: 4, country: 'Parikmaheria', region: 'Lokon'}
        ];

        for (const city of cities) {
            console.log(JSON.stringify(city));
        }
    }

    // 15 - взять массив из задания 7,в цикле перебрать его объекты превратив
    // их в json и сразу скоприовать в новый массив.

    {
        let carsVsDrivers = [
            {
                model: 'ererer', year: 1920, power: 300, color: 'red',
                driver: {name: 'Ivav', age: 30, male: true, experience: 5}
            },
            {
                model: 'vidro', year: 1820, power: 12, color: 'blue',
                driver: {name: 'Petro', age: 60, male: true, experience: 45}
            },
            {
                model: 'mustang', year: 1970, power: 700, color: 'yellow',
                driver: {name: 'Tamara', age: 30, male: false, experience: 0}
            },
            {
                model: 'ishak', year: 1990, power: 0.3, color: 'grey',
                driver: {name: 'Marusia', age: 40, male: false, experience: 20}
            },
            {
                model: 'ligi', year: 1920, power: 0, color: 'pink',
                driver: {name: 'Ivav', age: 30, male: true, experience: 20}
            }
        ];

        let arrJson = [];

        for (let car of carsVsDrivers) {
            arrJson.push(JSON.stringify(car));
        }
    }

    // 16 - Создать массив пользователей. У каждого пользователя обязательно должено быть
    // поле skills которое является массивом. Проитерировать массив пользователей и
    // в каждом пользователе проитерировать его массив skills

    {
        let arrUsers = [
            {id: 1, name: "Pedro", age: 44, skills: ['eat', 'sleep', 'cook', 'drive']},
            {id: 2, name: "Gomes", age: 23, skills: ['eat', 'sleep', 'run', 'speak']},
            {id: 3, name: "Rodrigo", age: 32, skills: ['eat', 'sleep']},
            {id: 4, name: "Maria", age: 39, skills: ['eat', 'sleep', 'cook', 'sing', 'dance']},
            {id: 5, name: "Gita", age: 34, skills: ['dance', 'sing', 'cook', 'run', 'have a sister']},
        ];

        for (const user of arrUsers) {
            console.log(user);
            for (const key in user) {
                if ((typeof user[`${key}`]) === 'object') {
                    console.log(`User with id = ${user.id} have ${user[`${key}`].length} ${key}! 
                    This is: `)
                    for (const el of user[`${key}`]) {
                        console.log(el);
                    }
                }
            }
        }
    }

    // 17 - Создать массив пользователей. У каждого пользователя обязательно должено быть
    // поле skills которое является массивом. Проитерировать массив пользователей и
    // в каждом пользователе проитерировать его массив skills. Скопировать все skills
    // всех пользователей в отедльный массив
    {
        et
        arrUsers = [
            {id: 1, name: "Pedro", age: 44, skills: ['eat', 'sleep', 'cook', 'drive']},
            {id: 2, name: "Gomes", age: 23, skills: ['eat', 'sleep', 'run', 'speak']},
            {id: 3, name: "Rodrigo", age: 32, skills: ['eat', 'sleep']},
            {id: 4, name: "Maria", age: 39, skills: ['eat', 'sleep', 'cook', 'sing', 'dance']},
            {id: 5, name: "Gita", age: 34, skills: ['dance', 'sing', 'cook', 'run', 'have a sister']},
        ];

        let arrUsersSkills = [];

        for (const user of arrUsers) {
            console.log(user);
            for (const key in user) {
                if ((typeof user[`${key}`]) === 'object') {
                    console.log(`User with id = ${user.id} have ${user[`${key}`].length} ${key}! 
                    This is: `)
                    for (const el of user[`${key}`]) {
                        arrUsersSkills.push(el);
                        console.log(el);
                    }
                }
            }
        }

        // for (const usersSkill of arrUsersSkills) {
        //     console.log(usersSkill);
        // }
    }
}

//==========================================================================================================

//      18. - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

{
    let users = [
        {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
        {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
        {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
        {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
        {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
    ];

    for (const user of users) {
        console.log(user);
        if (user.skills != null && user.skills.length > 0){
            for (const el of user.skills) {
                console.log(el);
            }
        }
    }
}

//+=========================================================================================================
{
//      19. - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
//              їх в інший порожній масив.

    let users = [{
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    }, {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    }, {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    }, {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    }, {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    }, {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];



//          - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок

//          - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
//          за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

//          - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
//          за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
//          блок з адресою зробити окремим блоком, з блоками для кожної властивості
//          за допомоги document.createElement. Всі данні в одному блоці.
    let arrAddress = [];

    for (let user of users) {
        arrAddress.push(user.address);
    }


    for (let i = 0; i < users.length; i++) {

        let user = users[i];
        let divWrapper = document.createElement('div');
        let title = document.createElement('h2');
        let innerDiv = document.createElement('div');
        let ageDiv = document.createElement('div');
        let statusDiv = document.createElement('div');
        let addressDiv = document.createElement('div');
        let cityDiv = document.createElement('div');
        let countryDiv = document.createElement('div');
        let streetDiv = document.createElement('div');
        let houseNumberDiv = document.createElement('div');

        divWrapper.appendChild(title);
        divWrapper.appendChild(innerDiv);

        innerDiv.appendChild(ageDiv);
        innerDiv.appendChild(statusDiv);
        innerDiv.appendChild(addressDiv);

        addressDiv.appendChild(cityDiv);
        addressDiv.appendChild(countryDiv);
        addressDiv.appendChild(streetDiv);
        addressDiv.appendChild(houseNumberDiv);

        title.innerText = user.name;

        let keysUser = Object.keys(user);
        ageDiv.textContent = `${keysUser[1]}: ${user[keysUser[1]]}`;
        statusDiv.textContent = `${keysUser[2]}: ${user[keysUser[2]]}`;
        ageDiv.textContent = `${keysUser[1]}: ${user[keysUser[1]]}`;

        let keysAddress = Object.keys(arrAddress[i]);     // или user.address
        cityDiv.textContent = `${keysAddress[0]}: ${user.address[keysAddress[0]]}`;
        countryDiv.textContent = `${keysAddress[1]}: ${user.address[keysAddress[1]]}`;
        streetDiv.textContent = `${keysAddress[2]}: ${user.address[keysAddress[2]]}`;
        houseNumberDiv.textContent = `${keysAddress[3]}: ${user.address[keysAddress[3]]}`;

        document.body.appendChild(divWrapper);
    }


}

//==========================================================================================================
{
//      20. - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
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
    let usersWithCities = [];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false,
// address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

    for (let user of usersWithId) {
        usersWithCities.push(user);
        for (let city of citiesWithId) {
            if(user.id === city.user_id){
                usersWithCities[usersWithCities.length - 1].address = city;
            }
        }
    }

    // for (const el of usersWithCities) {
    //     console.log(el);
    // }
}

//=========================================================================================================

//         21. - створити розмітці блок з id, class та текстом в середені.
//         Зчитати окремо цей текст з селекторів по id ,
//         class та тегу

{
    let id = document.getElementById('id');
    let textClass = document.getElementsByClassName('text');
    let tagName = document.getElementsByTagName('span');

    console.log(id.innerText);

    for (const el of textClass) {
        console.log(el.innerText);
    }

    for (const el of tagName) {
        console.log(el.innerText);
    }

//      - змінити цей текст використовуючи селектори id, class,  tag

    id.innerText = 'kokoshnik';

    let count = 0;
    for (const el of textClass) {
        count++;
        el.innerText = `${count}. Lorem ipsum dolor sit amet, consectetur`;
    }

    for (const el of tagName) {
        count++;
        el.innerText = `${count}. Lorem ipsum dolor SPAN ELEMENT`;
    }

//      - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

    id.style.background = 'red';
    id.style.width = '300px';
    id.style.height = '100px';
    id.style.textAlign = 'center';

    for (const el of textClass) {
        el.style.display = 'block';
        el.style.background = 'green';
        el.style.margin = '10px';
        el.style.width = ((Math.random()*1000) + 150) + 'px';
        el.style.height = ((Math.random()*100) + 50) + 'px';
    }

    for (const el of tagName) {
        el.style.display = 'block';
        el.style.background = 'yellow';
        el.style.margin = '10px';
        el.style.width = ((Math.random()*1000) + 150) + 'px';
        el.style.height = ((Math.random()*100) + 50) + 'px';
    }

//      - за допомоги document.createElement та appendChild створити таблицю на 1 рядок
//      з трьома ячейками всередені

    let table = document.createElement('table');
    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');

    table.appendChild(trEl);
    table.style.padding = '10px';

    for (let i = 0; i < 3; i++) {
        let td = tdEl.cloneNode();
        let rand = (Math.random() * 1000 + 100).toFixed(0)
        let color = '#' + rand;
        td.textContent = color;
        td.style.background = color;
        trEl.appendChild(td);
    }

    document.body.appendChild(table);

//      - за допомоги document.createElement, appendChild та циклу створити таблицю
//      на 10 рядків з трьома ячейками всередені

    for (let i = 0; i < 10; i++) {
        let tr = trEl.cloneNode();
        table.appendChild(tr);

        for (let i = 0; i < 3; i++) {
            let td = tdEl.cloneNode();
            let rand = (Math.random() * 1000 + 100).toFixed(0)
            let color = '#' + rand;
            td.textContent = color;
            td.style.background = color;
            tr.appendChild(td);
        }
    }

//      - за допомоги document.createElement, appendChild та 2х циклів створити таблицю
//      на 10 рядків з 5 ячейками всередені

    for (let i = 0; i < 10; i++) {
        let tr = trEl.cloneNode();
        table.appendChild(tr);

        for (let i = 0; i < 5; i++) {
            let td = tdEl.cloneNode();
            let rand = (Math.random() * 1000 + 100).toFixed(0)
            let color = '#' + rand;
            td.textContent = color;
            td.style.background = color;
            tr.appendChild(td);
        }
    }

//      - за допомоги document.createElement, appendChild та 2х циклів створити таблицю
//      на n рядків з m ячейками всередені. n та m отримати з prompt

    let n = +prompt('rows'),
        m = +prompt('columns');

    for (let i = 0; i < n; i++) {
        let tr = trEl.cloneNode();
        table.appendChild(tr);

        for (let i = 0; i < m; i++) {
            let td = tdEl.cloneNode();
            let rand = (Math.random() * 1000 + 100).toFixed(0)
            let color = '#' + rand;
            td.textContent = color;
            td.style.background = color;
            tr.appendChild(td);
        }
    }

//      --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
//      У файлі прописати наступні доступи та дії

    // template.htm - скачаний шаблон
    // testTemplate.js - подключений js

//       - знайти всі елементі, які мають class

    let allTags = document.getElementsByTagName('*');
    let allClasses = [];

    for (const el of allTags) {
        if(el.classList != null && el.classList.length > 0){
            allClasses.push(el);
        }
    }

//       - знайти всі параграфи ,та змінити текст на hello oktenweb!

    let allParagrTags = document.getElementsByTagName('p');
    for (let par of allParagrTags) {
        par.innerText = 'hello oktenweb!';
    }

//       - знайти всі div та змінити ім колір на червоний

    let allDivs = document.getElementsByTagName('div');

    for (const el of allDivs) {
        el.style.background = 'red';
    }

}

//=======================================================================================================================

//          22. ============
//              ====class===
//              ============
//
//          - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
//          Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//          створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//          який буде змістом того, що знаходиться на сторінці.
//          Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

{
    let allHeaders = document.getElementsByTagName('h2');
    let contentDiv = document.createElement('div');
    let uList = document.createElement('ul');

    contentDiv.id = 'content';
    contentDiv.appendChild(uList);

    for (const el of allHeaders) {
        let liElement = document.createElement('li');
        uList.appendChild(liElement);
        liElement.innerText = el.innerText;
    }

    document.body.insertBefore(contentDiv, document.getElementsByTagName('div')[0]);
}

//          -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив,
//          та робить з кожне правило в окремому блоці.
//          При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//          Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
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

{
    let wrap = document.createElement('div');

    for (const el of rules) {
        let divEl = document.createElement('div');
        let title = document.createElement('h2');
        let bodyEl = divEl.cloneNode();
        bodyEl.textContent = el.body;
        title.innerText = el.title;
        divEl.appendChild(title);
        divEl.appendChild(bodyEl);
    }
}

