//////////////////////////////////
// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга -   li

// function getFirstListItemText() {
// const firstLiItem = document.querySelector('.list-item');
// return firstLiItem.textContent;
// }
// let green = document.querySelector('.green')
// console.log(green.textContent);


//////////////////////////////////
// Task 2
// Напишите функцию, которая вернет массива с текстами внутри тэгов - li  

// let ul = document.getElementsByTagName('li')
// console.log(ul);

//////////////////////////////////
// Task 3
// Напишите функцию, которая вернет массива с текстами внутри тэгов   элементов с классом list-item 

// let textItems = document.querySelectorAll('.list-item')
// function getElements() {
//   console.log(textItems);
// }

// getElements();

//////////////////////////////////
// Task 4
// Напишите функцию, которая вернет массив   со значениями аттрибута class внутри тэгов элементов с классом list-item

// let lists = document.querySelectorAll('.list-item')
// function getClasses() {
//   for (let i = 0; i < lists.length; i++) {
//     console.log(lists[i].textContent);
//   }
// }
// getClasses();

//////////////////////////////////
// Task 5
// Напишите функцию, которая вернет массива со значениями аттрибута data-test-id  внутри тэгов элементов с классом  list-item.
// Этот аттрибут написан для тестирования программ специальным роботом и по нему этот робот находит нужные элементы. Цель его - дать возможность роботу зацепиться за нужные элементы.

// function getTestDataIds() {
//     const listItems = document.querySelectorAll('.list-item');
//     const testDataIds = [];
//     for (let i = 0; i < listItems.length; i++) {
//       testDataIds.push(listItems[i].getAttribute('data-test-id'));
//     }
//     return testDataIds;
// }
// console.log(getTestDataIds());

//////////////////////////////////
// Task 6
// Вы пишите робота, который проверяет, что страница отображается корректно, по правилам внутри класс с текстом цвета.

//<li class="list-item green" data-test-id=«1">green</li>

// Но база данных была повреждена и по ошибке некоторые элемента стали отображаться с некорректными цветами.

//<li class="list-item orange" data-test-id=«3">yellow</li>

// Ваша задача вернуть массив аттрибутов data-test-id  у элементов, у которых сломана логика. То есть текст внутри не имеет соответсвующего класса.

// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.

// const lists = document.querySelectorAll('li');
// function getClasses() {
  // for(let i = 0; i < lists.length; i++) {
    // lists[i].className.includes(lists[i].textContent) === false ? console.log(lists[i])  : ''
//  }
// }
// getClasses();

//////////////////////////////////
// Task 7
// Обновите текст всех элементов с классом list-item,  по следующему шаблону

//<li class="list-item green" data-test-id=‘1’>green</li>

// Стало
//<li class="list-item green" data-test-id=  ‘1’> 1 green</li>

// То есть  ${data-test-id} ${text}
// Используйте forEach

// yourElementsArray.forEach ( (element) => {


// } )


// const lists = document.getElementsByClassName('list-item');



// function changeText() {
//   for(let i = 0; i < lists.length; i++) {
//     lists[i].textContent = lists[i].getAttribute('data-test-id') + ' ' + lists[i].textContent;
//   }
// }

// changeText()



//////////////////////////////////
// Task 8
// На сайте есть поле для ввода с id = ‘secret-login’.  Ваша задача - изменить его содержимое на You were hacked

// document.getElementById('secret-login').value = 'You were hacked';
// console.log(getElementById);