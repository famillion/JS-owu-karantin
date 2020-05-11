'use script'

//                                              +++++++++++++++++++
//==============================================+++ HOME WORK 7 +++=====================================================
//                                              +++++++++++++++++++
{
//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".

    let wrapper = document.querySelector('.wrapper');
    let btnsDIV = document.querySelector('.two_btns');
    let text = document.querySelector('#text');
    let button = document.getElementsByClassName('btn')[0];

    button.onclick = () => {
        text.style.display = 'none';
    };


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

    let hideButton = document.createElement('button');
    hideButton.style.display = 'block';
    hideButton.classList.add('btn');
    hideButton.innerText = 'HIDE ME';
    btnsDIV.appendChild(hideButton);

    hideButton.onclick = function () {
        this.style.display = 'none';
    };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

    let outputText = document.getElementById('output');
    let inputAge = document.getElementById('input');
    let selectAgeBtn = document.getElementById('age');

    selectAgeBtn.onclick = () => {
        outputText.style.display = 'inline-block';
        if (inputAge.value && +inputAge.value != 0) {
            if (+inputAge.value < 0 || +inputAge.value > 100) {
                outputText.innerText = 'Seriously? Enter your real age!'
            } else if (+inputAge.value < 18) {
                outputText.innerText = 'You are less than 18';
            } else if (+inputAge.value >= 18) {
                outputText.innerText = 'You are over 18';
            }
        } else {
            outputText.innerText = 'Enter number';
        }
    };


// - Создайте меню, которое раскрывается/сворачивается при клике        ========================================

    let menu = document.getElementsByClassName('menu')[0];
    let menuTitle = document.getElementsByClassName('title_menu')[0];
    let menuList = document.getElementsByClassName('menu_list')[0];

    menuTitle.onclick = () => {
        if (menu.classList.contains('menu_open')) {
            menu.classList = 'menu';
            menuList.style.display = 'none';
        } else {
            menu.classList.add('menu_open');
            menuList.style.display = 'block';
        }
    };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

    function Comment(title, body) {
        this.title = title;
        this.body = body;
    }

    let commentsDIV = document.querySelector('.comments');

    let listComments = [
        new Comment('Lorem', 'Aut ex harum incidunt itaque iusto nesciunt quam reiciendis similique'),
        new Comment('harum', 'Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        new Comment('itaque', 'Aut ex harum incidunt itaque iusto nesciunt quam reiciendis similique. Adipisci architecto culpa doloribus\n' +
            ' eligendi ipsam iure, laborum nesciunt numquam provident totam?'),
        new Comment('incidunt', 'Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            ' Aut ex harum incidunt itaque iusto nesciunt quam reiciendis similique. Adipisci architecto culpa doloribus\n' +
            ' eligendi ipsam iure, laborum nesciunt numquam provident totam?e'),
        new Comment('nesciunt', 'Aut ex harum incidunt itaque iusto nesciunt quam reiciendis similique'),
        new Comment('quam', 'Aut ex harum incidunt itaque iusto nesciunt quam reiciendis similique'),
        new Comment('reiciendis', 'Aut ex harum incidunt itaque iusto nesciunt quam reiciendis similique')
    ];

    for (const comment of listComments) {
        let cmntWrapper = document.createElement('div');
        cmntWrapper.classList.add('comment-item');
        commentsDIV.appendChild(cmntWrapper);

        let title = document.createElement('h3');
        title.innerText = comment.title;
        cmntWrapper.appendChild(title);

        let body = document.createElement('div');
        body.innerText = comment.body;
        cmntWrapper.appendChild(body);

        let hidden = document.createElement('div');
        hidden.innerText = '{...}';
        hidden.style.display = 'none';
        cmntWrapper.appendChild(hidden);

        let button = document.createElement('button');
        button.innerText = 'Hide';
        cmntWrapper.appendChild(button);

        button.onclick = () => {
            if (body.style.display === 'none') {
                button.innerText = 'Hide';
                body.style.display = 'block';
                hidden.style.display = 'none';
            } else {
                body.style.display = 'none';
                hidden.style.display = 'block';
                button.innerText = 'Unhide';
            }
        };
    }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

    let formBtn = document.getElementById('forms_btn');
    formBtn.onclick = () => {
        console.log(`text = ${document.form1.text.value},
        checkbox = ${document.form1.check.value},  
        range = ${document.form2.range.value}, 
        color = ${document.form2.color.value}`);
    };

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

    let tableDiv = document.getElementById('table-block');

    function addTable(rows, columns, addTo, text) {
        let flag = document.getElementById('table');     // что-то намутил чтоб не дописівало таблицу
        if (flag) {
            tableDiv.removeChild(flag);
        }
        let table = document.createElement('table');
        table.setAttribute('id', 'table');
        table.setAttribute('border', '1');
        addTo.appendChild(table);
        for (let i = 0; i < rows; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let col = document.createElement('td');
                col.innerText = text;
                row.appendChild(col);
            }
            table.appendChild(row);
        }
    }

    // addTable(5, 8, tableDiv);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

    let tableBTN = document.getElementById('table-btn');
    let rows = document.tableForm.rows.value,
        cols = document.tableForm.cols.value,
        textTable = document.tableForm.text.value;

    tableBTN.onclick = () => {
        console.log('click');
        addTable(rows, cols, tableDiv, textTable);
    };

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

    let carouselBTNs = document.getElementsByClassName('carousel-btn');
    let listIMG = document.getElementsByClassName('carousel-list')[0];
    let pos = 0;
    let min = -3300;

    carouselBTNs[0].onclick = () => {
        pos -= 150;
        pos = Math.min(pos, 0);
        if (pos > min) {
            listIMG.style.transform = `translateX(${pos}px)`;
            listIMG.style.transition = 'transform .5s linear';
        }
    }

    carouselBTNs[1].onclick = () => {
        pos += 150;
        pos = Math.min(pos, 0);
        if (pos > min) {
            listIMG.style.transform = `translateX(${pos}px)`;
            listIMG.style.transition = 'transform .5s linear';
        }
    }

//========================================================================================================================

//    - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

    let matukiArr = ['ебаный', 'похую', 'пиздато', 'припиздень', 'уебище', 'хyйня', 'пизда', 'пиздато',
        'пидор', 'хуй', 'хуек', 'трахаеб', 'хуя', 'заебись', 'нихуя', 'охуенно', 'заебал', '6лядь', 'eбать', 'xyёв', '6ля'];

    let checkWordBtn = document.getElementById('check-word-btn');
    let inputs = document.getElementsByClassName('matuki-check');

    checkWordBtn.onclick = () => {
        if (matukiArr.some(val => val === inputs[0].value)) {
            alert('Виввели матюк! Будьте уважніші!');
        }
    }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

    let checkTextBtn = document.getElementById('check-text-btn');

    checkTextBtn.onclick = () => {
        let inpArr = inputs[1].value.split(' ');
        for (const word of inpArr) {
            if (matukiArr.some(val => val === word)) {
                alert('Виввели матюк у реченні! Будьте уважніші!');
            }
        }
    }


//======================================================================================================================

//  -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
//  по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

    let ruleNav = document.getElementsByClassName('content-menu')[0];
    let rulesTitles = document.querySelectorAll('.rules h2');
    let rulesBodies = document.querySelectorAll('.rules p');
    let rulesDivEls = document.getElementsByClassName('rules');
    let navUl = document.createElement('ul');
    ruleNav.appendChild(navUl);

    let rulesObj = [];

    function RulesObjs(divEl, title, body) {
        this.divEl = divEl;
        this.title = title;
        this.body = body;
    }

    for (let i = 0; i < rulesDivEls.length; i++) {
        rulesObj.push(new RulesObjs(rulesDivEls[i], rulesTitles[i], rulesBodies[i]));
    }

    for (let el of rulesTitles) {
        let li = document.createElement('li');
        li.classList.add('li');
        li.style.fontSize = '20px';
        li.style.marginBottom = '15px';
        li.style.color = 'blue';
        li.style.fontWeight = 'bold';
        li.innerText = el.innerText;
        navUl.appendChild(li);
    }

    let lishki = document.getElementsByClassName('li');


    for (let i = 0; i < lishki.length; i++) {
        lishki[i].onclick = function () {
            lishki[i].style.fontSize = '22px';
            lishki[i].style.transition = 'font-size .2s linear';

            setTimeout(() => {
                lishki[i].style.fontSize = '20px';
                lishki[i].style.transition = 'font-size .2s linear';
            }, 250);

            for (let el of rulesObj) {
                if (rulesObj[i].divEl === el.divEl) {

                    el.divEl.style.backgroundColor = 'aqua';
                    el.divEl.style.transition = 'background-color .8s linear';
                    el.title.style.fontSize = '14px';
                    el.body.style.fontSize = '26px';
                    el.body.style.color = 'blue';
                    el.body.style.fontWeight = 'bold';
                    el.body.style.transition = 'font-size .2s linear';
                    el.title.style.transition = 'font-size .2s linear';
                } else {

                    el.divEl.style.backgroundColor = 'white';
                    el.divEl.style.transition = 'background-color .4s linear';
                    el.title.style.fontSize = '24px';
                    el.body.style.fontSize = '14px';
                    el.body.style.color = '';
                    el.body.style.fontWeight = '';
                    el.body.style.transition = 'font-size .2s linear';
                    el.title.style.transition = 'font-size .2s linear';
                }
            }
        };

    }


//======================================================================================================================

//    -- взять массив пользователей
    let usersWithAddress = [
        {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
        {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
        {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
        {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
        {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
        {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
        {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
        {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
        {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
        {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
        {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
    ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

    let checkStatus = document.getElementById('status'),
        checkAge = document.getElementById('ageCh'),
        checkCity = document.getElementById('city');

    let checkResult = document.getElementsByClassName('check-result')[0];

    let checkArrayBtn = document.getElementById('check-array-btn');

    function checkArr(checked, text, nameClass, callback) {
        if (checked) {
            let stDiv = document.getElementsByClassName(`${nameClass}`);
            if (stDiv.length > 0) {
                checkResult.removeChild(stDiv[0]);
            }
            let div = document.createElement('div');
            div.classList.add(`status-div`);
            div.classList.add(`${nameClass}`);
            div.style.minHeight = '100px';
            let span = document.createElement('span');
            let inDiv = document.createElement('div');
            div.appendChild(span);
            div.appendChild(inDiv);
            span.innerText = text;


            let filter = usersWithAddress.filter(callback);
            let inText = '';

            for (const el of filter) {
                inText += `id: ${el.id}, name: ${el.name}, age: ${el.age}, status: ${el.status}, 
                address: {city: ${el.address.city}, street: ${el.address.street}, number: ${el.address.number}\n------------------------------------------------\n`;
            }

            inDiv.innerText = inText;

            checkResult.appendChild(div);
        } else {
            let stDiv = document.getElementsByClassName(`${nameClass}`);
            if (stDiv.length > 0) {
                checkResult.removeChild(stDiv[0]);
            }
        }
    }

    checkArrayBtn.addEventListener('click', () => {
        checkArr(checkStatus.checked, 'со статусом false', 'statusCheck', (v) => !v.status);
        checkArr(checkAge.checked, 'старше 29 лет', 'check-age', (v) => v.age >= 29);
        checkArr(checkCity.checked, 'город Kиев', 'cityCheck', (v) => v.address.city === 'Kyiv');
    });

//======================================================================================================================

//    *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

}