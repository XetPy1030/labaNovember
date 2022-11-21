// этот обработчик для скрытия/показа элементов задачы
function choiceTask(elem) {
    let sel = elem.selectedOptions[0].value;

    for (item of document.querySelectorAll('.task')) {
        item.style.display = 'none'; // скрывает прошлые
    }

    let elemTask = document.querySelector('.'+sel);
    elemTask.style.display = 'block'; // показывает выбранный
}

// спустя 3 сек перемотает страницу на 500
function sect1click() {
    setTimeout(function() { // функция ждать
        window.scrollBy(0, 500); // функция перемотки
    }, 3000); 
}

// проверяет, можно ли листать страницу
function sect2click() {
    if (window.scrollMaxY == 0) { // сколько можно макс скролить
        alert('Мотать нельзя');
    }
    else {
        alert('Мотать можно');
    }
}

// складывает все числа из инпутов и выводит это число
function form3click() {
    let form = document.querySelector('#form3'); // получает форму
    let sum = 0; // переменнвя для хранения суммы
    for (item of form.querySelectorAll('input')) { // получение и итератор всех инпутов
        sum += Number(item.value); // сложение к сумме значения из итератора
    }
    alert(sum); // вывод суммы
}

// Опции для стран
let sect4dict = {
    'rus': [
        new Option('Уфа', ''),
        new Option('Елабуга', ''),
        new Option('Москва', ''),
    ],
    'usa': [
        new Option('Нью-Йорк', ''),
        new Option('Калифорния', ''),
        new Option('Иллинойс', ''),
    ],
    'aus': [
        new Option('Канберра', ''),
        new Option('Арарат', ''),
        new Option('Арарат', ''),
    ],
};
// Сам обработчик, ставит города из страны
function sect4choice(elem) {
    let sel = elem.selectedOptions[0].value; // получение страны, которая была выбрана
    let elemNewOpt = document.querySelector('#sect4NewOptions'); // получение элемента 
    elemNewOpt.innerHTML = ''; // удалить прошлые города из прошлого выбора
    let newOptions = sect4dict[sel]; // Опции городов из страны

    for (item of newOptions) {
        elemNewOpt.appendChild(item); // добавление опции
    }
}

// Просто добавляет новый элемент к ol
function sect5() {
    let elemol = document.querySelector('.sect5ol'); // получение элемента списка
    let new_elem = document.createElement('li'); // создание нового элемента
    new_elem.innerText = 'пункт'; // добавление к нему текста
    elemol.appendChild(new_elem); // добавление нового элемента к списку
}
sect5();

// ставит событие при наведении на все ссылки, добавляет к тексту текст от href
function sect6() {
    for (item of document.querySelector('.sect6').querySelectorAll('a')) { // ставит итератор на все ссылки
        item.addEventListener('mouseenter', function(event) { // функция если мышка вошла
            event.target.innerText += "("+event.target.getAttribute('href')+")"; // то поставить текст из href
        })
    }
}
sect6();

// возводит в квадрат
function sect7click(event) {
    let elem = event.target; // куда тыкнули 
    elem.innerText = Number(elem.innerText) ** 2; // возведение в квадрат
}

// обработчик кликера
let sect8_num = 0;
function sect8click() {
    sect8_num++; // добавление к числу кликов
    document.querySelector('.sect8res').innerText = sect8_num; // поставить это число к элементу в html
}

// добавляет еще один элемент к ul
function sect9click() {
    let elem = document.querySelector('.sectul9'); // получение элемента списка
    let new_elem = document.createElement('li'); // создание нового элемента
    new_elem.innerText = 'пункт'; // добавление к нему текста
    elem.appendChild(new_elem); // добавление нового элемента к списку
}

// добавляет ! к элементу из события
function sect9clickul(event) {
    event.target.innerText += '!';
}

// добавляет к таблице новую строку
function sect10click1() {
    let table_elem = document.querySelector('#sect10'); // получение таблицы
    let fname = document.querySelector('#fname').value; // получение имени
    let lname = document.querySelector('#lname').value; // получение фамилии

    let tr_elem = document.createElement('tr'); // создание строки
    let td_fname = document.createElement('td'); // создание столбца имени
    td_fname.innerText = fname; // присвоение имени
    let td_lname = document.createElement('td'); // создание столбца фамилии
    td_lname.innerText = lname; // присвоение
    tr_elem.appendChild(td_fname); // добавление к строке
    tr_elem.appendChild(td_lname); // добавление к строке

    table_elem.appendChild(tr_elem); // добавление строки к таблице
}
// изменяет таблицу
function sect10click(event) {
    let change_tr_elem = event.target; // получает элемент из события
    let new_val = prompt('Новое значение: '); // спрашивает на что изменить
    change_tr_elem.innerText = new_val; // ставит это значение
}