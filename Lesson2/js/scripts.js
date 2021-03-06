'use strict'
//                                            +++++++++++++++++
//============================================++ HOME WORK 2 ++=======================================================
//                                            +++++++++++++++++


//          1. --створити масив та вивести його в консоль:
//          - з 5 числових значень
//          - з 5 стічкових значень
//          - з 5 значень стрічкового, числового та булевого типу
//          -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//          Вивести в консоль

{
    let arrNums = [1, 2, 3.14, 4, 5],
        arrStr = ['mama', 'mila', 'masha', 'ela', 'milo'],
        arrAll = [13, 'mihur', 'konjaka', true, false];

    for (let i = 0; i < arrNums.length; i++) {   // - з 5 числових значень в консоль
        console.log(arrNums[i]);
    }

    for (const string of arrStr) {              // - з 5 стічкових значень в консоль
        console.log(string);
    }

    for (const val of arrAll) {                 // - з 5 значень стрічкового, числового
        console.log(val);                       // та булевого типу в консоль
    }

    let emptyArr = [];                          //  -- Створити пустий масив.

    for (let i = 0; i < 10; i++) {                           //Наповнити його будь-якими значеннями звертаючись
        emptyArr[i] = `будь-яке значення ${i + 1}`;         // до конкретного індексу.
        console.log(emptyArr[i]);                            // Вивести в консоль
    }

}

//======================================================================================================================

//          2.

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом { '
        + i + ' } всередині</div>')
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

{
    let i = 0;

    while (i < 20) {
        i++;
        document.write(`<h1>Це H1</h1>`)
    }
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

{
    let i = 0;

    while (i < 20) {
        i++;
        document.write(`<h1>Це H1 #${i}</h1>`)
    }
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

{
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = i;
        console.log(arr[i]);
    }
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

{
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = `string ${i + 1}`;
        console.log(arr[i]);
    }
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

{
    let arr = [true, false, [1, 2], {name: 'pedro', age: 43}, 12, 'ployka'];

    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи

{
    let arr = [true, false, 1, 2, 'name', 'pedro', 'age', 43, 12, 'ployka'];

    for (let el of arr) {
        if (typeof el === "boolean") {
            console.log(el);
        }
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

{
    let arr = [true, false, 1, 2, 'name', 'pedro', 'age', 43, 12, 'ployka'];

    for (let el of arr) {
        if (typeof el === "number") {
            console.log(el);
        }
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

{
    let arr = [true, false, 1, 2, 'name', 'pedro', 'age', 43, 12, 'ployka'];

    for (let el of arr) {
        if (typeof el === "string") {
            console.log(el);
        }
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

{
    let emptyArr = [];

    let arr = [true, false, 1, 2, 'name', 'pedro', 'age', 43, 12, 'ployka'];

    for (let i = 0; i < 10; i++) {
        emptyArr[i] = arr[i];
        console.log(emptyArr[i]);
    }
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(`loop #${i + 1}`);
    document.write(`loop #${i + 1}<br>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(`loop #${i + 1}`);
    document.write(`loop #${i + 1}<br>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

{
    let count = 0;
    for (let i = 0; i < 100; i += 2) {
        count++;
        console.log(`loop #${count}, i = ${i}`);
        document.write(`loop #${count}, i = ${i}<br>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`i = ${i}`);
        document.write(`i = ${i}<br>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(`i = ${i}`);
        document.write(`i = ${i}<br>`);
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for(let i = 2; i >= 0; i--){
//     for(let j = 59; j >= 0; j--){
//         console.log(`${i}:${j}`);
//     }
// }

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        console.log(`${i}:${j}`);
    }
}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
            if (i === 2 && j > 19) {
                break;
            } else {
                console.log(`${i}:${j}:${k}`);
            }
        }
    }
}

// Додатково ========================================================================
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

{
    let str = '';
    let arr = ['a', 'b', 'c'];
    for (let i = 0; i < arr.length; i++) {
        str += s;
    }
    console.log(str);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let str = '';
let i = 0;
let arr = ['a', 'b', 'c'];
while (i < arr.length) {
    str += s;
    i++;
    console.log(str);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

{
    let str = '';
    let arr = ['a', 'b', 'c'];
    for (let s of arr) {
        str += s;
    }
    console.log(str);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

//=======================================================================================================================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

{
    let arr = ['a', 'b', 'c'];

    arr.push(1, 2, 3);

}

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

{
    let arr = [1, 2, 3];

    // arr.reverse();          // без цикла

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] -= arr[j];
            }
        }
    }
}

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

{
    let arr = [1, 2, 3];

    arr.push(4, 5, 6);

}
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

{
    let arr = [1, 2, 3];

    arr.unshift(4, 5, 6);
}

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

{
    let arr = ['js', 'css', 'jq'];

    let el = arr.shift();

    console.log(el);
}

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

{
    let arr = ['js', 'css', 'jq'];

    let el = arr.pop();

    console.log(el);
}

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

{
    let arr = [1, 2, 3, 4, 5],
        arr1 = arr.slice(3);

    console.log(arr1);
}

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

{
    let arr = [1, 2, 3, 4, 5],
        arr1 = arr.slice(0, 2);

    // console.log(arr1);
}

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

{
    let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);

    // console.log(arr);
}

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

{
    let arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, 'a', 'b', 'c');

    // console.log(arr);
}

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

{
    let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
}

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

{
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = i + (i * (i - 1));    // та й таке...
    }

    for (let el of arr) {
        if (el % 2 === 0) {
            console.log(el);
        }
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

{
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = i + (i * (i - 1));
    }

    let arr1 = [];

    for (let el of arr) {
        arr1.push(el);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

{
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = i + (i * (i - 1));
    }

    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        arr1[i] = arr[i];
    }
}

//=====================================================================================================================

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
{
    let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

    let i = 0;

    while (i < arr.length) {
        console.log(arr[i] + ' WHILE' + ' index = ' + i);
        i++;
    }

// 2. перебрати його циклом for

    for (const el of arr) {
        console.log(el + ' FOR');
    }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

    while (i < arr.length) {
        if (i % 2 !== 0) {
            console.log(arr[i] + ' WHILE index % 2 != 0' + ' index = ' + i);
        }
        i++;
    }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            console.log(arr[i] + ' FOR index % 2 != 0' + ' index = ' + i);
        }
    }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i] + ' WHILE value % 2 == 0' + ' index = ' + i);
        }
        i++;
    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

    for (const el of arr) {
        if (el % 2 === 0) {
            console.log(el + ' FOR value % 2 == 0');
        }
    }

// 7. замінити кожне число кратне 3 на слово "okten"


    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            arr.splice(i, 1, 'okten');
        }
    }

    console.log(arr);

// 8. вивести масив в зворотньому порядку.
    arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


    for (i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] += arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] -= arr[j];
            }
        }
    }


    for (const el of arr) {
        console.log(el + ' в зворотньому порядку');
    }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
    arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

    i = arr.length;

    while (i > 0) {
        i--;
        console.log(arr[i] + ' WHILE в зворотньому циклі (с заду на перед)');
    }

// 2. перебрати його циклом for


    for (i = arr.length; i > 0;) {
        i--;
        console.log(arr[i] + ' FOR в зворотньому циклі (с заду на перед)');
    }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

    i = arr.length;

    while (i > 0) {
        i--;
        if (i % 2 !== 0) {
            console.log(arr[i] + ' WHILE index % 2 != 0 в зворотньому циклі (с заду на перед)' + ' index = ' + i);
        }
    }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

    for (i = arr.length; i > 0;) {
        i--;
        if (i % 2 !== 0) {
            console.log(arr[i] + ' FOR index % 2 != 0 в зворотньому циклі (с заду на перед)' + ' index = ' + i);
        }
    }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

    i = arr.length;
    while (i > 0) {
        i--;
        if (arr[i] % 2 === 0) {
            console.log(arr[i] + ' WHILE value % 2 == 0 в зворотньому циклі (с заду на перед)' + ' index = ' + i);
        }
    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

    for (i = arr.length; i > 0; i--) {
        if (arr[i - 1] % 2 === 0) {
            console.log(arr[i - 1] + ' FOR value % 2 == 0 в зворотньому циклі (с заду на перед)' + ' index = ' + i);
        }
    }
// 7. замінити кожне число кратне 3 на слово "okten"

    for (i = arr.length; i > 0;) {
        i--;
        if (arr[i] % 3 === 0) {
            arr.splice(i, 1, 'okten');
        }
    }

    console.log(arr);

// 10
//  створити пустий масив та :

    let arr1 = [];

// - заповнити його 50 парними числами за допомоги циклу.

    for (i = 0; i < 50; i++) {
        arr1.push((i + 1) * 2);
    }

    console.log(arr1);

// - заповнити його 50 непарними числами за допомоги циклу.

    let arr2 = [];

    for (let i = 0; i < 50; i++) {
        arr2.push(((i + 1) * 2) + 1);
    }

    console.log(arr2);

}

//==========================================================================================================================
{
//3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(+(Math.random() * 100).toFixed(0));
    }

//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
    let arr1 = [];

    for (let i = 0; i < 10; i++) {
        let flag = false;
        let r = 0;
        while (!flag) {
            r = (Math.random() * 1000).toFixed(0);
            if (r > 8 && r < 732) {
                flag = true;
            }
        }
        arr1.push(+r);
    }
//  2. вывести на консоль  каждый третий елемент

    for (let i = 2; i < arr1.length; i += 3) {
        console.log(arr1[i]);
    }

//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

    for (let i = 2; i < arr1.length; i += 3) {
        if (arr1[i] % 2 === 0) {
            console.log(arr1[i]);
        }
    }

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

    let arr2 = [];

    for (let i = 2; i < arr1.length; i += 3) {
        if (arr1[i] % 2 === 0) {
            console.log(arr1[i]);
            arr2.push(arr1[i]);
        }
    }


//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный

    for (let i = 2; i < arr1.length - 1; i += 3) {
        if (arr1[i + 1] % 2 === 0) {
            console.log(arr1[i]);
        }
    }

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//   обрахувати середній чек.

    let arrCheck = [100, 250, 50, 168, 120, 345, 188];
    let sum = 0;

    for (const el of arrCheck) {
        sum += el;
    }

    let avrgCheck = sum / arrCheck.length;

    console.log(avrgCheck.toFixed(2));
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

    let arr3 = [];
    let arr4 = [];
    for (let i = 0; i < 10; i++) {
        arr3.push(+(Math.random() * 100).toFixed(0));
        arr4.push(arr3[i] * 5);
    }
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

    let arr5 = [];
    let arr6 = [];
    for (let i = 0; i < 20; i++) {
        if (i % 3 === 0) {
            arr5.push(+(Math.random() * 100).toFixed(0));
        } else if (i % 2 === 0) {
            arr5.push((Math.random() * 100).toFixed(0));
        } else {
            arr5.push(true);
        }
    }

    for (const el of arr5) {
        if (typeof el == 'number') {
            arr6.push(el);
        }
    }

}


//=======================================================================================================================