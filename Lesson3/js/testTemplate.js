'use strict'

//==========================================================================================

////      --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// //      У файлі прописати наступні доступи та дії
//
//     // template.htm - скачаний шаблон
//     // testTemplate.js - подключений js
//
// //       - знайти всі елементі, які мають class
//
    let allTags = document.getElementsByTagName('*');
    let allClasses = [];

    for (const el of allTags) {
        if(el.classList != null && el.classList.length > 0){
            allClasses.push(el);
        }
    }

// console.log(allClasses);

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