if (localStorage.getItem("token") == null) {
  window.location.href = "index.html";
}
let music = new Audio("./audio/bg-music.mp3");
music.volume = 0.1;
music.loop = true;
music.autoplay = true;
music.play();

const contentContainer = document.querySelector(".contentContainer");
const CONTENT_CONTAINER_WIDTH = contentContainer.offsetWidth;

const noBtn = document.querySelector(".no");

const noBtnWidth = noBtn.offsetWidth;
const noBtnHeight = noBtn.offsetHeight;

let counter = 9;
const phrases = [
  "Тобто Ні!?",
  "Ти впевнена?",
  "На всі 100%",
  "Тотально?",
  "ТОЧНО???",
  "Подумай",
  "Точно точно?",
  "Ну ок...",
];
let currentInd = 0;

const jumpBtn = () => {
  let randomTop =
    -1 * getRandomNumberFromRange(-100, window.innerHeight + noBtnHeight);
  let randomLeft =
    -1 * getRandomNumberFromRange(-100, CONTENT_CONTAINER_WIDTH + noBtnWidth);

  console.log(`RANDOM_TOP: ${randomTop}, RANDOM_LEFT: ${randomLeft}`);
  if (randomLeft <= -1400) {
    randomLeft = -1000;
  }

  noBtn.setAttribute("value", phrases[currentInd++]);
  noBtn.style.top = `${randomTop}px`;
  noBtn.style.left = `${randomLeft}px`;
  counter--;
};
noBtn.addEventListener("click", jumpBtn);

function getRandomNumberFromRange(start, end) {
  return start + Math.floor(Math.random() * end);
}

noBtn.addEventListener("click", handleNoButtonEvent);
function handleNoButtonEvent() {
  if (counter == 0) {
    music.pause();
    let sad = new Audio("./audio/wah-wah-sad-trombone-6347.mp3");
    sad.play();
    noBtn.setAttribute("value", ":((");
    document.querySelector("body").innerHTML +=
      '<div id="noWindow">' +
      '  <div class="window">' +
      "<h3>ТА ЗА ЩО КОХУСЬ:( Давай тобі останій шанс</h3>" +
      " <p>" +
      "Вибирай з розумом моя квіточко, інакше станеться щось погане!" +
      "</p>" +
      '<img src="./images/angry-kitten-angry-kitty.gif" alt="" />' +
      '<button onclick="handleCloseBlock()" id="closeBlock">Закрити</button>' +
      "</div>" +
      "</div>";
  }
}

function handleCloseBlock() {
  document.querySelector("#noWindow").remove();
  document.querySelector(".no").remove();
  document
    .querySelector(".yes")
    .addEventListener("click", handleYesButtonEvent);
}

document.querySelector(".yes").addEventListener("click", handleYesButtonEvent);

function handleYesButtonEvent() {
  let yeepy = new Audio("./audio/yippee-tbh.mp3");
  yeepy.play();
  document.querySelector("body").innerHTML +=
    '<div id="yesWindow">' +
    '<div class="window">' +
    "<h3>ЄПІ ЄПІ ЄПІ ЄПІ ЄПІ ЄПІ!</h3>" +
    "<p>Ти моє безмежне котятко, <strong>КОХАЮ БЕЗМЕЖНО!!!</strong>. Цьомі цьомі!</p>" +
    '<img src="./images/hn.gif" alt="" />' +
    "</div>" +
    "</div>";

  document
    .querySelectorAll(".form-btn")
    .forEach((btn) => btn.classList.add("disable"));
}
