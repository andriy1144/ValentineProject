const contentContainer = document.querySelector(".contentContainer");
const CONTENT_CONTAINER_WIDTH = contentContainer.offsetWidth;

const noBtn = document.querySelector(".no");

const noBtnWidth = noBtn.offsetWidth;
const noBtnHeight = noBtn.offsetHeight;

let counter = 8;

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
  if (counter == 0) {
    noBtn.style.display = "none";
  }
};
noBtn.addEventListener("click", jumpBtn);

function getRandomNumberFromRange(start, end) {
  return start + Math.floor(Math.random() * end);
}
