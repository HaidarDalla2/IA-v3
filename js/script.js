let score = 0;
let photo = document.querySelector(".photo");
let currentQuistionIndex = 0;
let unserText = document.querySelectorAll(".unserText")[0];
let unserTextFalse = document.querySelectorAll(".unserText")[1];
let ansurButton = document.querySelectorAll(".ansur")[0];
let overLayTwo = document.querySelector("#overLayTwo");
let overLayOne = document.querySelector("#overLayOne");
let resolt = false;
// const q = [
//   "cheese",
//   "meat",
//   "meet",
//   "phone",
//   "rice",
//   "pie",
//   "pine",
//   "read",
//   "shell",
//   "tie",
// ];
const q = ["cheese", "meat", "tie", "pine"];

// function playAudio(text) {
//   const audio = new SpeechSynthesisUtterance(text);
//   audio.voice = speechSynthesis
//     .getVoices()
//     .find((voice) => voice.name.includes("Google UK Fnglish Female"));
//   window.speechSynthesis.speak(audio);
// }
function playAudio(text) {
  const audio = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  audio.voice =
    voices.find((voice) => voice.name.includes("Google UK English Female")) ||
    voices.find((voice) => voice.gender === "female");
  window.speechSynthesis.speak(audio);
}

function askQuestion() {
  playAudio("Whats That ?");
}

function updatImg(src) {
  setTimeout(() => {
    photo.src = `./img/${src}.jfif`;
  }, 4000);
}

function udateScore() {
  score++;
}

function setScore() {
  let scor = document.querySelector(".scor-count");
  scor.innerHTML = score;
}

function updateUnser(ansur) {
  ansurButton.setAttribute("unsur", ansur);
  window.localStorage.setItem("score", score);
  setTimeout(() => {
    unserText.innerHTML = `${ansur}`;
    unserTextFalse.innerHTML = `${q[currentQuistionIndex - 1]}`;
  }, 4000);
}
function handleRemoveClass() {
  setTimeout(async () => {
    overLayOne.classList.remove("overLayOne");
    overLayTwo.classList.remove("overLayTwo");
  }, 6000);
}

function handleAddClass() {
  setTimeout(() => {
    overLayOne.classList.add("overLayOne");
    overLayTwo.classList.add("overLayTwo");
  }, 3000);
}

function handleNextQuistion() {
  if (score + 1 !== q.length) {
    playAudio(`"its a "${q[currentQuistionIndex]}`);
    currentQuistionIndex += 1;
    console.log(currentQuistionIndex);
    updatImg(q[currentQuistionIndex]);
    udateScore();
    setScore();
    updateUnser(q[currentQuistionIndex]);
    handleAddClass();
    handleRemoveClass();
    createCelebrationAnimation();
    createCelebrationAnimationRed();
  } else {
    playAudio(`"its a "${q[currentQuistionIndex]}`);
    setTimeout(() => {
      window.location.href = "endPage.html";
    }, 4500);
  }
}

function handlUnser(event) {
  if (
    event.target.attributes.unsur &&
    event.target.attributes.unsur.value === q[currentQuistionIndex]
  ) {
    console.log("true");
    playCelebrationSound();
    handleNextQuistion();
    setTimeout(() => {
      askQuestion();
      askQuestion();
    }, 5000);
  } else if (
    event.target.attributes.unsur &&
    event.target.attributes.unsur.value !== q[currentQuistionIndex]
  ) {
    playAudio("wrong unser !");
    resolt = true;
  }
}
function createCelebrationAnimation() {
  const celebrationContainer = document.createElement("div");
  celebrationContainer.classList.add("celebration-container");

  for (let i = 0; i < 100; i++) {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    celebrationContainer.appendChild(cube);

    // تعيين موقع عشوائي للمكعب
    cube.style.left = Math.random() * 90 + "vw";
    cube.style.top = Math.random() * 90 + "vh";

    // تعيين وقت اختفاء المكعب
    setTimeout(() => {
      cube.remove();
    }, 7000);
  }

  document.body.appendChild(celebrationContainer);

  // إزالة الحاوية بعد فترة قصيرة
  setTimeout(() => {
    celebrationContainer.remove();
  }, 3500);
}
function createCelebrationAnimationRed() {
  const celebrationContainer = document.createElement("div");
  celebrationContainer.classList.add("celebration-container");

  for (let i = 0; i < 100; i++) {
    const cube = document.createElement("div");
    cube.classList.add("cubeRed");
    celebrationContainer.appendChild(cube);

    // تعيين موقع عشوائي للمكعب
    cube.style.left = Math.random() * 90 + "vw";
    cube.style.top = Math.random() * 90 + "vh";

    // تعيين وقت اختفاء المكعب
    setTimeout(() => {
      cube.remove();
    }, 7000);
  }

  document.body.appendChild(celebrationContainer);

  // إزالة الحاوية بعد فترة قصيرة
  setTimeout(() => {
    celebrationContainer.remove();
  }, 3500);
}

function playCelebrationSound() {
  setTimeout(() => {
    const audio = document.getElementById("audio");
    audio.play();
  }, 1000);
}

setScore();

window.onload = askQuestion;

// let score = 0;
// let photo = document.querySelector(".photo");
// let currentQuistionIndex = 0;
// let unserText = document.querySelectorAll(".unserText")[0];
// let unserTextFalse = document.querySelectorAll(".unserText")[1];
// let ansurButton = document.querySelectorAll(".ansur")[0];
// let overLayTwo = document.querySelector("#overLayTwo");
// let overLayOne = document.querySelector("#overLayOne");
// let resolt = false;
// const q = ["cheese", "meat", "phone"];

// function playAudio(text) {
//   const audio = new SpeechSynthesisUtterance(text);
//   const voices = speechSynthesis.getVoices();
//   audio.voice =
//     voices.find((voice) => voice.name.includes("Google UK English Female")) ||
//     voices.find((voice) => voice.gender === "female");
//   window.speechSynthesis.speak(audio);
// }

// function askQuestion() {
//   playAudio("Whats That ?");
// }

// function updatImg(src) {
//   setTimeout(() => {
//     photo.src = `./img/${src}.jfif`;
//   }, 4000);
// }

// function udateScore() {
//   score++;
// }

// function setScore() {
//   document.querySelector(".scor-count").innerHTML = score;
// }

// function updateUnser(ansur) {
//   ansurButton.setAttribute("unsur", ansur);
//   window.localStorage.setItem("score", score);
//   setTimeout(() => {
//     unserText.innerHTML = `${ansur}`;
//     unserTextFalse.innerHTML = `${q[currentQuistionIndex - 1]}`;
//   }, 4000);
// }

// function handleRemoveClass() {
//   setTimeout(() => {
//     overLayOne.classList.remove("overLayOne");
//     overLayTwo.classList.remove("overLayTwo");
//   }, 6000);
// }

// function handleAddClass() {
//   setTimeout(() => {
//     overLayOne.classList.add("overLayOne");
//     overLayTwo.classList.add("overLayTwo");
//   }, 3000);
// }

// function handleNextQuistion() {
//   if (score + 1 !== q.length) {
//     playAudio(`"its a "${q[currentQuistionIndex]}`);
//     currentQuistionIndex += 1;
//     console.log(currentQuistionIndex);
//     updatImg(q[currentQuistionIndex]);
//     udateScore();
//     setScore();
//     updateUnser(q[currentQuistionIndex]);
//     handleAddClass();
//     handleRemoveClass();
//     createCelebrationAnimation();
//     createCelebrationAnimationRed();
//   } else {
//     playAudio(`"its a "${q[currentQuistionIndex]}`);
//     setTimeout(() => {
//       window.location.href = "endPage.html";
//     }, 5000);
//   }
// }

// function handlUnser(event) {
//   if (
//     event.target.attributes &&
//     event.target.attributes.unsur.value === q[currentQuistionIndex]
//   ) {
//     console.log("true");
//     playCelebrationSound();
//     handleNextQuistion();
//     setTimeout(() => {
//       askQuestion();
//       askQuestion();
//     }, 5000);
//   } else {
//     playAudio("wrong unser !");
//     resolt = true;
//   }
// }

// function createCelebrationAnimation() {
//   const celebrationContainer = document.createElement("div");
//   celebrationContainer.classList.add("celebration-container");
//   for (let i = 0; i < 100; i++) {
//     const cube = document.createElement("div");
//     cube.classList.add("cube");
//     celebrationContainer.appendChild(cube);
//     cube.style.left = Math.random() * 90 + "vw";
//     cube.style.top = Math.random() * 90 + "vh";
//     setTimeout(() => {
//       cube.remove();
//     }, 7000);
//   }
//   document.body.appendChild(celebrationContainer);
//   setTimeout(() => {
//     celebrationContainer.remove();
//   }, 3500);
// }

// function createCelebrationAnimationRed() {
//   const celebrationContainer = document.createElement("div");
//   celebrationContainer.classList.add("celebration-container");
//   for (let i = 0; i < 100; i++) {
//     const cube = document.createElement("div");
//     cube.classList.add("cubeRed");
//     celebrationContainer.appendChild(cube);
//     cube.style.left = Math.random() * 90 + "vw";
//     cube.style.top = Math.random() * 90 + "vh";
//     setTimeout(() => {
//       cube.remove();
//     }, 7000);
//   }
//   document.body.appendChild(celebrationContainer);
//   setTimeout(() => {
//     celebrationContainer.remove();
//   }, 3500);
// }

// function playCelebrationSound() {
//   setTimeout(() => {
//     const audio = document.getElementById("audio");
//     audio.play();
//   }, 1000);
// }

// setScore();
// window.onload = askQuestion;
