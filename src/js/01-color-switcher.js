/* //TODO ✅ Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

HTML містить кнопки «Start» і «Stop».
   <button type="button" data-start>Start</button>
   <button type="button" data-stop>Stop</button>
  
    УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */

// * Реалізація: пропустив оскільки зроблено акцент на логіці завдання а не на представленні на сторінці.
// Відповідність макету відео з ДЗ.
// function addMarkupToBody() {
//     const wrapBtnMarkup = `     <p><a href="index.html">Go back</a></p>
//     <div class="btn__wrapper">
//     <button type="button" data-start>Start</button>
//     <button type="button" data-stop>Stop</button>
// </div>`
//     document.body.innerHTML = "";
//     document.body.insertAdjacentHTML("afterbegin", wrapBtnMarkup);
// }

// function addStyles(elm) {
//     elm.style.display = "flex";
//     elm.style.height = "50vh";
//     elm.style.justifyContent = "center";
//     elm.style.alignItems = "center";
// }

// addMarkupToBody();

const elementDOM = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    // wrapBtnEl: document.querySelector(".btn__wrapper"),
};
// document.body.style.justifyContent = "center";

const { btnStart, btnStop /*, wrapBtnEl */ } = elementDOM;

// addStyles(wrapBtnEl);


let timerId = null;
btnStop.disabled = true;

function changeDisableBtn(btnStart, btnStop) {
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)} `;
}

function changeBackgroundColorBody() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStartClick(e) {
    changeDisableBtn(btnStart, btnStop);
    timerId = setInterval(changeBackgroundColorBody, 1000);
    // console.log(timerId);
}

function onBtnStopClick(e) {
    changeDisableBtn(btnStop, btnStart);
    clearInterval(timerId);
}

btnStart.addEventListener('click', onBtnStartClick)
btnStop.addEventListener('click', onBtnStopClick)

