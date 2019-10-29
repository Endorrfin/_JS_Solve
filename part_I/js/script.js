/**
|--------------------------------------------------
| ======= <<<--- TASK #1 -  --->>>  =======
|--------------------------------------------------
*/

/*
Добавьте изображениям, по которым кликнул пользователь, класс bordered в оформлении которого содержиться граница и тень.
*/

// Вешаем событие на весь документ.
// event.target.tagName - индентирицирует объект по которому осуществлен клик.
// target - элемент по которому сделан клик
// classList - свойство для манимуляции css классами
// add - для добавления класса
// toggle - при повторном нажатии тень будет исчезать
document.onclick = function (event) {
  // console.log(event.target.tagName);
  event = event || window.event // кросбраузерный хак для старых браузеров
  if (event.target.tagName === 'IMG') {
    // event.target.classList.add('bordered');
    event.target.classList.toggle('bordered');
  }
}


/**
|--------------------------------------------------
| ======= <<<--- TASK #2 -  --->>>  =======
|--------------------------------------------------
*/
/* 
Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока.
Координаты выводить под блоком.
*/

// onmousemove - исследование движения мыши внутри блока
// offsetX; - свойство события, помогающее определить координаты миши внутри объекта

// Для получения координат, необходимо на сам блок повесить события
document.querySelector(".Task2").onmousemove = function (event) {
  event - event || window.event; // для кросбраузерности
  console.log(event);
  document.querySelector('#offx').innerHTML = event.offsetX;
  document.querySelector('#offy').innerText = event.offsetY;

}




/**
|--------------------------------------------------
| ======= <<<--- TASK #3 -  --->>>  =======
|--------------------------------------------------
*/
/* 
Всплывающее по таймеру окно на Bootstrap 4
Создайте окно, которое всплывает через 4 секунды после загрузки страницы. В окне - опция "Согласен".
Если пользователь выбирает данную опцию и закрывает окно, то при последующих обновлениях окно не показывается.
Если пользователь не выбрал опцию "Согласен", то повторяйте вывод окна после обновления страницы.
*/

const ariseModal = document.querySelector("#myModal");
const ariseBtn = document.querySelector("#myBtn");
const ariseSpan = document.getElementsByClassName("closeAriseModal")[0];

ariseBtn.onclick = function () {
  ariseModal.style.display = "block";
}

ariseSpan.onclick = function () {
  ariseModal.style.display = "none";
}

// Реализуем вариант, когда пользователь кликает вокруг модального окна, а не только по кнопке
window.onclick = function (event) {
  if (event.target == ariseModal) {
    ariseModal.style.display = "none";
  }
}


/**
|--------------------------------------------------
| ======= <<<--- TASK #4 -  --->>>  =======
|--------------------------------------------------
*/
/*
Условие задачи: есть orogress bar который должен заполнятся за заданное количество времени. Время задает разработчик (не пользователь).
 */

function userProgress(time){
  let start = 0;
  var time = Math.round(time*1000/100); // переводим вводимое значение в милисекунды
  const progressElement = document.getElementById('user-progress'); // получение элемента progress bar
  const intervalId = setInterval(function(){
    if (start > 100) {
      clearInterval(intervalId); // остановить анимацию
      userProgressCallBack();

    } else {
      progressElement.value = start;
    }
    start++;
  }, time);
}

function userProgressCallBack() {
  // code from user
  document.querySelector('.hidden-block').style.display = 'block';
}

// Запуск функции с заданным интервалом
userProgress(1);



/**
|--------------------------------------------------
| ======= <<<--- TASK #5 -  --->>>  =======
|--------------------------------------------------
*/
/*
/* 
Создать панель меню, где пользователь может 
*/

const btnHideYourself = document.querySelector('#btn-hidYourself');
btnHideYourself.onclick = fHideYourself;

function fHideYourself() {
  btnHideYourself.style.display = 'none';
}

/**
|--------------------------------------------------
| ======= <<<--- TASK #6 -  --->>>  =======
|--------------------------------------------------
*/
/* Создайте кнопку, которая при нажатии выводит вместо текста на себе - предупреждение "не нажимать".*/
const btnNotPush = document.querySelector('#btn-not-push');
btnNotPush.onclick = fNotPush;

function fNotPush() {
  btnNotPush.innerHTML = "Не нажимать";
}