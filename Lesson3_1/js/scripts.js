'use strict'
//                                            =========================
//==============================================+++ HOME WORK 3-1 +++===================================================
//                                            =========================

//      -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
let getElement = (atr, name) => {
    switch (atr) {
        case 'id':
            return document.getElementById(name);

        case 'class':
            return document.getElementsByClassName(name);

        case 'tag':
            return document.getElementsByTagName(name);

    }
}
//      -- Напишіть код,  який за допомоги document.getElementById
//      або document.getElementsByClassName або document.getElementsByTagName :
//      - отримує текст з параграфа з id "content"
{
//     let content = getElement("id", 'content');
//     console.log(content.innerText);
//
// //      - отримує текст з блоку з id "rules"
//
//     let rules = getElement('id', 'rules');
//     console.log(rules.innerText);
//
// //      - замініть текст параграфа з id 'content' на будь-який інший
//
//     content.innerText = 'замініть текст параграфа з id content на будь-який інший';
//
// //      - замініть текст параграфа з id 'rules' на будь-який інший
//
//     rules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt, tenetur, omnis atque cum fugiat incidunt dolores beatae similiqueautem consectetur repellat deserunt impedit perferendis ducimus magni asperiores corporis tempore porro';
//
// //      - змініть кожному елементу колір фону на червоний
//
//     content.style.background = 'red';
//     rules.style.background = 'red';
//
// //      - змініть кожному елементу колір тексту на синій
//
//     rules.style.color = 'blue';
//     content.style.color = 'blue';
//
// //      - отримати весь список класів елемента з id=rules і вивести їх в console.log
//
//     console.log(rules.classList);
//
// //      - отримати всі елементи з класом fc_rules
//
//     let fcRules = getElement('class', 'fc_rules');
//
// //      - поміняти колір тексту у всіх елементів fc_rules на червоний
//
//     for (const rule of fcRules) {
//         rule.style.color = 'red';
//     }

//Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

    let mainHeader = getElement('id', 'main_header');
    mainHeader.style.color = '#' + ((Math.random() * 1000).toFixed(0));

// -- робить шириниу елементу ul 400 пікселів

    let ulEl = getElement('tag', 'ul');
    ulEl[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%

    let link = getElement('class', 'linkList');
    for (const el of link) {
        el.style.width = '50%';
    }

// -- отримує текст який зберігається в елементі з класом listElement2

    let listEl = getElement('class', 'listElement2');
    console.log(listEl[0].innerText);

// -- отримує всі елементи li та змінює ім колір фону на сірий

    let liEl = getElement('tag', 'li');
    for (const li of liEl) {
        li.style.background = 'grey';
    }

// -- отримує всі елементи 'a' та додає їм клас anchor

    let anchor = getElement('tag', 'a');
    for (let a of anchor) {
        a.classList.add('anchor');
    }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

    for (let a of anchor) {
        if(a.innerText === 'link3'){
            a.style.fontSize = '40px';
        }
    }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

    for (let a of anchor) {
        a.classList.add(`element_${a.innerText}`);
    }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

    let subHeader = getElement('class', 'sub-header');

    for (const el of subHeader) {
        let color = prompt('Color');
        el.style.background = color;
    }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

    for (const el of subHeader) {
        if(el.innerText === 'content 2 segment'){
            let color = prompt('Color');
            el.style.color = color;
        }
    }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

    let con1 = getElement('class', 'content_1');
    con1[0].innerText = prompt();

// -- отримати елементи p та змінити їм paddin на довільне значення

    let pEl = getElement('tag', 'p');
    for (const p of pEl) {
        p.style.padding = '30px';
    }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

    let text = getElement('class', 'text2');

    for (const t of text) {
        t.innerText = `отримати елементи з класом text2 та змінити їм текст на довільне значення ${(Math.random() * 100).toFixed(0)}`;
    }
}