const textElement = ["Programmer.", "Full Stack Web Developer."];
let count = 0;
let textIndex = 0;
let currentText = "";
let words = "";

(function writeAnimation() {
  if (count === textElement.length) {
    count = 0;
  }

  currentText = textElement[count];
  words = currentText.slice(0, ++textIndex);
  document.querySelector(".write-animation").textContent = words;

  if (words.length === currentText.length) {
    count++;
    textIndex = 0;
  }

  setTimeout(writeAnimation, 200);
})();

const textOnProgress = ["On Progress . . ."];
let countOnProgress = 0;
let textIndexOnProgress = 0;
let currentTextOnProgress = "";
let wordsOnProgress = "";

(function onProgress() {
  if (countOnProgress === textOnProgress.length) {
    countOnProgress = 0;
  }

  currentTextOnProgress = textOnProgress[countOnProgress];
  wordsOnProgress = currentTextOnProgress.slice(0, ++textIndexOnProgress);
  document.querySelector(".on-progress").textContent = wordsOnProgress;

  if (wordsOnProgress.length === currentTextOnProgress.length) {
    countOnProgress++;
    textIndexOnProgress = 0;
  }

  setTimeout(onProgress, 200);
})();
