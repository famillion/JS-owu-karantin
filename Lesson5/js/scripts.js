'use strict'
//                                                   +++++++++++++++++++
//===================================================+++ HOME WORK 5 +++======================================================
//                                                   +++++++++++++++++++

{
//      -  Створити функцію конструктор для об'єкту який описує теги
//       Властивості
//        -назва тегу
//        - опис його дій
//        - масив з атрибутами (2-3 атрибути максимум)
//        Кожен атрибут описати як окремий який буде містити
//        -назву атрибуту
//        -опис дії атрибуту
//        інформацію брати з htmlbook.ru

    {
        class AtrAndActions{
            constructor(titleOfAttr, actionOfAttr) {
                this.titleOfAttr = titleOfAttr;
                this.actionOfAttr = actionOfAttr;
            }
        }

        class TagDescription{
            constructor(titleOfTag, action, attrs) {
                this.titleOfTag = titleOfTag;
                this.action = action;
                this.attrs = attrs;
            }
        }

        let tagA = 'a',
            aAction = "Тег &lt;a&gt; является одним из важных элементов HTML и предназначен для создания ссылок." +
                " В зависимости от присутствия атрибутов name или href тег &lt;a&gt; устанавливает ссылку или якорь. " +
                "Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
                "При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.",
            aAtrArr = [
                new AtrAndActions('accesskey', 'Активация ссылки с помощью комбинации клавиш'),
                new AtrAndActions('coords', 'Устанавливает координаты активной области'),
                new AtrAndActions('download', 'Предлагает скачать указанный по ссылке файл'),
                new AtrAndActions('href', 'Задает адрес документа, на который следует перейти'),
                new AtrAndActions('hreflang', 'Идентифицирует язык текста по ссылке'),
                new AtrAndActions('name', 'Устанавливает имя якоря внутри документа'),
                new AtrAndActions('rel', 'Отношения между ссылаемым и текущим документами'),
                new AtrAndActions('rev', 'Отношения между текущим и ссылаемым документами.'),
                new AtrAndActions('shape', 'Задает форму активной области ссылки для изображений'),
                new AtrAndActions('tabindex', 'Определяет последовательность перехода между ссылками при нажатии на кнопку Tab.'),
                new AtrAndActions('target', 'Имя окна или фрейма, куда браузер будет загружать документ.'),
                new AtrAndActions('title', 'Добавляет всплывающую подсказку к тексту ссылки'),
                new AtrAndActions('type', 'Указывает MIME-тип документа, на который ведёт ссылка.')
            ];

        let tagDIV = 'div',
            divAction = 'Элемент &lt;div&gt; является блочным элементом и предназначен для выделения фрагмента документа ' +
                'с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. ' +
                'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей,' +
                ' а для тега добавить атрибут class или id с именем селектора.',
            divAttrArr = [
                new AtrAndActions('align', 'Задает выравнивание содержимого тега &lt;div&gt;.'),
                new AtrAndActions('title', 'Добавляет всплывающую подсказку к содержимому.')
            ];

        let tagH1 = 'h1',
            h1Action = 'Тег &lt;h1&gt; представляет собой наиболее важный заголовок первого уровня',
            h1AttrArr = [
                new AtrAndActions('align', 'Определяет выравнивание заголовка.')
            ];

        let tagSpan = 'span',
            spanAction = 'Тег &lt;span&gt; предназначен для определения строчных элементов документа.',
            spanAttrArr = [];

        let tagInput = 'input',
            inputAction = 'Главным образом &lt;input&gt; предназначен для создания текстовых полей, различных кнопок,' +
                ' переключателей и флажков.',
            inputAccept = 'accept',
            inputAcceptDescr = 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
            inputAccesskey = 'accesskey',
            inputAccesskeyDescr = 'Переход к элементу с помощью комбинации клавиш',
            inputAlign = 'align',
            inputAlignDescr = 'Определяет выравнивание изображения.',
            inputAlt = 'alt',
            inputAltDescr = 'Альтернативный текст для кнопки с изображением.',

            inputAttrArr = [
                new AtrAndActions(inputAccept, inputAcceptDescr),
                new AtrAndActions(inputAccesskey, inputAccesskeyDescr),
                new AtrAndActions(inputAlign, inputAlignDescr),
                new AtrAndActions(inputAlt, inputAltDescr),
                new AtrAndActions('autocomplete', 'Включает или отключает автозаполнение'),
                new AtrAndActions('autofocus', 'Устанавливает фокус в поле формы.'),
                new AtrAndActions('border', 'Толщина рамки вокруг изображения.'),
                new AtrAndActions('checked', 'Предварительно активированный переключатель или флажок.'),
                new AtrAndActions('disabled', 'Блокирует доступ и изменение элемента.'),
                new AtrAndActions('form', 'Связывает поле с формой по её идентификатору.'),
                new AtrAndActions('formaction','Определяет адрес обработчика формы.'),
                new AtrAndActions('formenctype','Устанавливает способ кодирования данных формы при их отправке на сервер.'),
                new AtrAndActions('formmethod','Сообщает браузеру каким методом следует передавать данные формы на сервер.'),
                new AtrAndActions('formnovalidate','Отменяет встроенную проверку данных на корректность'),
                new AtrAndActions('formtarget','Определяет окно или фрейм в которое будет загружаться результат, возвращаемый обработчиком формы'),
                new AtrAndActions('list','Указывает на список вариантов, которые можно выбирать при вводе текста.'),
                new AtrAndActions('max','Верхнее значение для ввода числа или даты'),
                new AtrAndActions('maxlength','Максимальное количество символов разрешенных в тексте.'),
                new AtrAndActions('min','Нижнее значение для ввода числа или даты.'),
                new AtrAndActions('placeholder','Выводит подсказывающий текст.'),
                new AtrAndActions('readonly','Устанавливает, что поле не может изменяться пользователем.')
            ];

        let tagForm = 'form',
            formAction = 'Тег &lt;form&gt; устанавливает форму на веб-странице. Форма предназначена для обмена данными между' +
                ' пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер,' +
                ' с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять ' +
                'по своему усмотрению.',
            formAttrArr = [
                new AtrAndActions('accept-charset','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'),
                new AtrAndActions('action','Адрес программы или документа, который обрабатывает данные формы'),
                new AtrAndActions('autocomplete','Включает автозаполнение полей формы.'),
                new AtrAndActions('enctype','Способ кодирования данных формы.'),
                new AtrAndActions('method','Метод протокола HTTP.'),
                new AtrAndActions('name','Имя формы'),
                new AtrAndActions('novalidate','Отменяет встроенную проверку данных формы на корректность ввода'),
                new AtrAndActions('target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.')
            ];

        let tagOption = 'option',
            optionAction = 'Тег &lt;option&gt; определяет отдельные пункты списка, создаваемого с помощью контейнера &lt;select&gt;.' +
                ' Ширина списка определяется самым широким текстом, указанным в теге &lt;option&gt;, а также может изменяться' +
                ' с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент' +
                ' &lt;select&gt; внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
            optionAttrArr = [
                new AtrAndActions('disabled','Заблокировать для доступа элемент списка'),
                new AtrAndActions('label','Указание метки пункта списка'),
                new AtrAndActions('selected','Заранее устанавливает определенный пункт списка выделенным.'),
                new AtrAndActions('value','Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')
            ];

        let tagSelect = 'select',
            selectAction = 'Тег &lt;select&gt; позволяет создать элемент интерфейса в виде раскрывающегося списка,' +
                ' а также список с одним или множественным выбором',
            selectAttrArr = [
                new AtrAndActions('accesskey','позволяет перейти к списку с помощью некоторого сочетания клавиш с заданной в атрибуте буквой или цифрой'),
                new AtrAndActions('autofocus','устанавливает, что список получает фокус после загрузки страницы, при этом список становится доступным для выбора пунктов, например, с помощью клавиатуры.'),
                new AtrAndActions('disabled','Блокирует доступ и изменение элементов списка'),
                new AtrAndActions('form','Связывает список с формой по её идентификатору'),
                new AtrAndActions('multiple','сообщает браузеру отображать содержимое элемента &lt;select&gt; как список множественного выбора.'),
                new AtrAndActions('name','Определяет уникальное имя элемента '),
                new AtrAndActions('required','Устанавливает список обязательным для выбора перед отправкой формы на сервер'),
                new AtrAndActions('size','Устанавливает высоту списка'),
                new AtrAndActions('tabindex','определяет последовательность перехода между элементами при нажатии на клавишу Tab.')
            ];







//        Таким чином описати теги

        let a = new TagDescription(tagA, aAction, aAtrArr),
            div = new TagDescription(tagDIV, divAction, divAttrArr),
            h1 = new TagDescription(tagH1, h1Action, h1AttrArr),
            span = new TagDescription(tagSpan, spanAction, spanAttrArr),
            input = new TagDescription(tagInput, inputAction, inputAttrArr),
            form = new TagDescription(tagForm, formAction, formAttrArr),
            option = new TagDescription(tagOption, optionAction, optionAttrArr),
            select = new TagDescription(tagSelect, selectAction, selectAttrArr);
//        Приклад результату
//          {
//               titleOfTag: 'area',
//               action: `Каждый элемент &lt;area&gt; определяет активные области изображения, которые являются ссылками...`,
//               attrs: [
//               {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//               {/*some props and values*/},
//               {/*...*/},
//               {/*...*/},
//               ]
//
//          }

    }



//       ================================================================================================================

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    let car = {
        model: 'vedro',
        maker: 'lada',
        year: '1985',
        maxSpeed : 55,
        engine: 0.7,
        drive: () => {
            console.log(`їдемо зі швидкістю ${car.maxSpeed}km на годину`)
        },
        info: () => {
            for (let key in car) {
                if (typeof car[key] !== 'function') {
                    console.log(`${key}: ${car[key]}`);
                    if (typeof car[key] === 'object') {
                        for (let k in car[key]) {
                            console.log(`${k}: ${car[key][k]}`);
                        }
                    }
                }
            }
        },
        increaseMaxSpeed: (newSpeed) =>{
            car.maxSpeed += newSpeed;
        },
        changeYear: (newValue) => {
            car.year = newValue;
        },

        addDriver:(driver) => {
            car.driver = driver
        }
    };


// ==============================================
//==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    function createCar(model, maker, year, maxSpead, engine) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpead = maxSpead;
        this.engine = engine;

        this.drive = () =>
        {
            console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
        }

        this.info=()=>
        {
            for (let key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key}: ${this[key]}`);
                    if (typeof this[key] === 'object') {
                        for (let k in this[key]) {
                            console.log(`${k}: ${this[key][k]}`);
                        }
                    }
                }
            }
        }

        this.increaseMaxSpeed = (newSpeed) =>
        {
            this.maxSpeed += newSpeed;
        }

        this.changeYear = (newValue) =>
        {
            this.year = newValue;
        }

        this.addDriver = (driver) =>
        {
            this.driver = driver;
        }

    }

// ==============================================
//==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    class Car{
    constructor(model, maker, year, maxSpeed, engine) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
    }

    info(){
        for (let key in this){
            console.log(`${key}: ${this[key]}`);
            if(typeof  this[key] === 'object'){
                for (let k in this[key]) {
                    console.log(`${k}: ${this[key][k]}`);
                }
            }
        }
    }

    increaseMaxSpeed (newSpeed){
        this.maxSpeed += newSpeed;
    }

    changeYear (newValue){
        this.year = newValue;
    }

    addDriver (driver){
        this.driver = driver;
    }
}

// ==============================================
//=====================================================================================================================
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
//     --Створити 10 попелюшок , покласти їх в масив
//     --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
    {
        class Character {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }

        class Cinderella extends Character {
            constructor(name, age, footSize) {
                super(name, age);
                this.footSize = footSize;
            }
        }

        class Prince extends Character {
            constructor(name, age, sizeShoes) {
                super(name, age);
                this.sizeShoes = sizeShoes;
            }
        }

        let cinderellasArr = [
            new Cinderella('natasha', 31, 45),
            new Cinderella('alina', 24, 39),
            new Cinderella('frosya', 23, 46),
            new Cinderella('traktorina', 43, 34),
            new Cinderella('fjokla', 35, 40),
            new Cinderella('dazdraperma', 19, 41),
            new Cinderella('maria', 21, 39),
            new Cinderella('pilata', 24, 38),
            new Cinderella('hveska', 33, 42),
            new Cinderella('nazar', 43, 37)
        ];

        let prince = new Prince('oleg', 25, 37);

        for (let cinderella of cinderellasArr) {
            if(prince.sizeShoes === cinderella.footSize){
                console.log(`Принц ${prince.name} знайшов свою наречену з ${prince.sizeShoes}-м розміром взуття, цю попелюшку звати ${cinderella.name}`);
            }
        }

    }

// ==============================================
//======================================================================================================================
//    ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

    {
        function Cinderella(name,age,footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }

        let cinderellasArr = [
            new Cinderella('natasha', 31, 45),
            new Cinderella('alina', 24, 39),
            new Cinderella('frosya', 23, 46),
            new Cinderella('traktorina', 43, 34),
            new Cinderella('fjokla', 35, 40),
            new Cinderella('dazdraperma', 19, 41),
            new Cinderella('maria', 21, 39),
            new Cinderella('pilata', 24, 38),
            new Cinderella('hveska', 33, 42),
            new Cinderella('nazar', 43, 37)
        ];

        function Prince(name,age,sizeShoes) {
            this.name = name;
            this.age = age;
            this.sizeShoes = sizeShoes;

            this.searchCinderella = (cinderellasArr) => {
                for (let cinderella of cinderellasArr) {
                    if(this.sizeShoes === cinderella.footSize){
                        console.log(`Принц ${this.name} знайшов свою наречену з ${this.sizeShoes}-м розміром взуття, цю попелюшку звати ${cinderella.name}`);
                    }
                }
            }
        }

        let prince = new Prince('petro', 24, 37);
        prince.searchCinderella(cinderellasArr);

    }


}