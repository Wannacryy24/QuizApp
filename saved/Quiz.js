export { renderQuestion, renderAnswer, renderMainDiv, worldData, scienceData ,geographyData ,VocabularyData};
const worldData = [
  {id:'world1',question: "What is the capital of France?",answers: [{ text: "Paris", correct: true },{ text: "London", correct: false },{ text: "Rome", correct: false },{ text: "Berlin", correct: false },],},
  {id:'world2',question: "Who wrote 'Hamlet'?", answers: [{ text: "William Shakespeare", correct: true },{ text: "Charles Dickens", correct: false },{ text: "J.K. Rowling", correct: false },{ text: "Leo Tolstoy", correct: false },],},
  {id:'world3',question: "What is the largest planet in our solar system?", answers: [{ text: "Jupiter", correct: true },{ text: "Saturn", correct: false },{ text: "Neptune", correct: false },{ text: "Mars", correct: false },],},
  {id:'world4',question: "Who painted the Mona Lisa?",answers: [{ text: "Leonardo da Vinci", correct: true },{ text: "Vincent van Gogh", correct: false },{ text: "Pablo Picasso", correct: false },{ text: "Michelangelo", correct: false },],},
  {id:'world5',question: "Which country is known as the Land of the Rising Sun?",answers: [{ text: "Japan", correct: true },{ text: "China", correct: false },{ text: "South Korea", correct: false },{ text: "India", correct: false },],},
  {id:'world6',question: "Who developed the theory of relativity?",answers: [{ text: "Albert Einstein", correct: true },{ text: "Isaac Newton", correct: false },{ text: "Stephen Hawking", correct: false },{ text: "Galileo Galilei", correct: false },],},
  {id:'world7',question: "What is the smallest bone in the human body?",answers: [{ text: "Stapes (in the ear)", correct: true },{ text: "Femur", correct: false },{ text: "Tibia", correct: false },{ text: "Radius", correct: false },],},];

const scienceData = [
  {id:'science1',question: "Which element on the periodic table makes up most of the Sun?",answers: [{ text: "Hydrogen", correct: true },{ text: "Helium", correct: false },{ text: "Oxygen", correct: false },{ text: "Iron", correct: false },],},
  {id:'science2',question: "What is the theory that explains the evolution of species?",answers: [{ text: "Theory of Natural Selection", correct: true },{ text: "Theory of Relativity", correct: false },{ text: "The Big Bang Theory", correct: false },{ text: "Germ Theory of Disease", correct: false },],},
  {id:'science3',question: "What is the smallest unit of life?",answers: [{ text: "Cell", correct: true },{ text: "Atom", correct: false },{ text: "Organ", correct: false },{ text: "Tissue", correct: false },],},
  {id:'science4',question: "What is the process by which plants capture energy from sunlight?", answers: [{ text: "Photosynthesis", correct: true },{ text: "Cellular respiration", correct: false },{ text: "Mitosis", correct: false },{ text: "Meiosis", correct: false },],},
  {id:'science5',question: "What is the force that attracts objects with mass towards each other?", answers: [{ text: "Gravity", correct: true },{ text: "Electromagnetism", correct: false },{ text: "The Strong Nuclear Force", correct: false },{ text: "The Weak Nuclear Force", correct: false },],},
  {id:'science6',question: "What is the scientific study of weather patterns?", answers: [{ text: "Meteorology", correct: true }, { text: "Geology", correct: false },  { text: "Astronomy", correct: false }, { text: "Ecology", correct: false }, ], },
  {id:'science7',question: "What are the building blocks of proteins?", answers: [{ text: "Amino Acids", correct: true }, { text: "Nucleotides", correct: false }, { text: "Monosaccharides", correct: false }, { text: "Fatty Acids", correct: false },],},
  {id:'science8',question: "What is the DNA molecule shaped like?", answers: [{ text: "Double Helix", correct: true }, { text: "Single Strand", correct: false }, { text: "Sphere", correct: false }, { text: "Square", correct: false }, ],},
  {id:'science9',question: "What is the process by which rocks are formed?", answers: [{ text: "Lithification", correct: true }, { text: "Weathering", correct: false }, { text: "Erosion", correct: false }, { text: "Deposition", correct: false },],},
  {id:'science10',question: "What is the study of dinosaurs called?", answers: [{ text: "Paleontology", correct: true },{ text: "Zoology", correct: false },{ text: "Botany", correct: false },{ text: "Anatomy", correct: false }, ],}
];

var geographyData = [
  {id:"geography1", question: "What is the largest desert in the world?", answers: [ { text: "Sahara Desert", correct: true }, { text: "Gobi Desert", correct: false }, { text: "Australian Outback", correct: false }, { text: "Kalahari Desert", correct: false }, ], },
  {id:"geography2", question: "What major river runs through London, England?", answers: [ { text: "River Thames", correct: true }, { text: "Seine River", correct: false }, { text: "Nile River", correct: false }, { text: "Yangtze River", correct: false }, ], },
  {id:"geography3", question: "Which sea separates Europe and Africa?", answers: [ { text: "Mediterranean Sea", correct: true }, { text: "Black Sea", correct: false }, { text: "Red Sea", correct: false }, { text: "Arctic Ocean", correct: false }, ], },
  {id:"geography4", question: "What mountain range forms the border between the United States and Canada?", answers: [ { text: "Rocky Mountains", correct: true }, { text: "Andes Mountains", correct: false }, { text: "Himalayas", correct: false }, { text: "Alps", correct: false }, ], },
  {id:"geography5", question: "Which country is known as the Land of the Rising Sun?", answers: [ { text: "Japan", correct: true }, { text: "China", correct: false }, { text: "India", correct: false }, { text: "South Korea", correct: false }, ], },
  {id:"geography6", question: "What is the process of ice wearing down rocks and landforms called?", answers: [ { text: "Glaciation", correct: true }, { text: "Erosion", correct: false }, { text: "Weathering", correct: false }, { text: "Volcanism", correct: false }, ], },
  {id:"geography7", question: "What is the capital city of Brazil?", answers: [ { text: "Brasilia", correct: true }, { text: "Rio de Janeiro", correct: false }, { text: "São Paulo", correct: false }, { text: "Buenos Aires", correct: false }, ], },
  {id:"geography8", question: "Which is the hottest continent on Earth?", answers: [ { text: "Africa", correct: true }, { text: "Asia", correct: false }, { text: "South America", correct: false }, { text: "Australia", correct: false }, ], },
  {id:"geography9", question: "What is a large landmass surrounded by water on all sides called?", answers: [ { text: "Continent", correct: true }, { text: "Island", correct: false }, { text: "Peninsula", correct: false }, { text: "Archipelago", correct: false }, ], },
  {id:"geography10", question: "What is the name of the imaginary line that circles the Earth halfway between the North and South Poles?", answers: [ { text: "Equator", correct: true }, { text: "Prime Meridian", correct: false }, { text: "Tropic of Cancer", correct: false }, { text: "Arctic Circle", correct: false }, ], }
  ];

var VocabularyData=[
      {id:'vocabulary1', question: "The old car sputtered and coughed as it went down the road. What is the most likely condition of the car?", answers: [ { text: "In perfect working order", correct: false }, { text: "Running smoothly", correct: false }, { text: "Having engine trouble", correct: true }, { text: "Recently painted", correct: false }, ], },
      {id:'vocabulary2', question: "The speaker in the story was elated when they received the news. What was their emotional state?", answers: [ { text: "Angry", correct: false }, { text: "Indifferent", correct: false }, { text: "Dejected", correct: false }, { text: "Very happy", correct: true }, ], },
      {id:'vocabulary3', question: "The aroma of freshly baked bread filled the air as you walked by the bakery. What can you infer about the bakery?", answers: [ { text: "It is a clothing store", correct: false }, { text: "It is closed", correct: false }, { text: "Bread is being baked inside", correct: true }, { text: "It is raining outside", correct: false }, ], },
      {id:'vocabulary4', question: "The movie critic described the acting as wooden and the plot as predictable. What is the critic's opinion of the movie?", answers: [ { text: "They loved it", correct: false }, { text: "They found it suspenseful", correct: false }, { text: "They thought it was poorly acted and unoriginal", correct: true }, { text: "They praised the special effects", correct: false }, ], },
      {id:'vocabulary5', question: "Feeling exhausted after a long day, Sarah slumped onto the couch. What is Sarah's likely condition?", answers: [ { text: "She is excited", correct: false }, { text: "She is feeling energetic", correct: false }, { text: "She is tired", correct: true }, { text: "She is feeling hopeful", correct: false }, ], },
      {id:'vocabulary6', question: "The instructions said to assemble the toy car with care. What does the word 'care' suggest in this context?", answers: [{ text: "You don't need to follow all the steps", correct: false }, { text: "It should be done quickly", correct: false }, { text: "It requires attention and precision", correct: true }, { text: "The toy car is very delicate", correct: false }, ], },
      {id:'vocabulary7', question: "The lost hiker wandered aimlessly through the woods, searching for a way out. What is the hiker likely feeling?", answers: [ { text: "Relieved", correct: false }, { text: "Confident", correct: false }, { text: "Disoriented and scared", correct: true }, { text: "Excited about the adventure", correct: false }, ], },
      {id:'vocabulary8', question: "The teacher explained the concept in clear and concise language. How did the teacher explain the concept?", answers: [ { text: "In a confusing and lengthy way", correct: false }, { text: "With a lot of shouting", correct: false }, { text: "In a way that was easy to understand", correct: true }, { text: "Using only pictures", correct: false }, ], },
      {id:'vocabulary9', question: "The old man reminisced about his childhood days, a wistful smile on his face. What is the mood of the old man?", answers: [ { text: "Angry", correct: false }, { text: "Excited", correct: false }, { text: "Nostalgic and perhaps a little sad", correct: true }, { text: "Worried about the future", correct: false }, ], },
      {id:'vocabulary10', question: "The warning sign said 'Danger: High Voltage.' What should you avoid doing near the sign?", answers: [ { text: "Walking your dog", correct: false }, { text: "Having a picnic", correct: false }, { text: "Touching any electrical wires", correct: true }, { text: "Singing loudly", correct: false }, ], },
      {id:'vocabulary11', question: "The audience roared with laughter as the comedian delivered his hilarious jokes. What was the reaction of the audience?", answers: [ { text: "They were bored and silent", correct: false }, { text: "They were confused", correct: false }, { text: "They found it very funny", correct: true }, { text: "They left the theater", correct: false }, ], }
];

var score = 0;
var selectedAnswers = [];
function renderMainDiv() {
  var appDiv = document.querySelector("#app");
  appDiv.innerHTML = "";
  var mainDiv = document.createElement("div");
  mainDiv.classList.add("mainDiv");
  appDiv.appendChild(mainDiv);
  var questionDiv = document.createElement("div");
  questionDiv.classList.add("questionDiv");
  mainDiv.appendChild(questionDiv);
}

function renderQuestion(quizData, index) {
  var questionDiv = document.querySelector(".questionDiv");
  if (index < quizData.length) {
    questionDiv.textContent = quizData[index].question;
  } else {
    questionDiv.textContent = ``;
  }
}

function renderAnswer(quizData, index) {
  var answerDiv = document.createElement("div");
  answerDiv.classList.add("answerDiv");
  var mainDiv = document.querySelector(".mainDiv");
  mainDiv.appendChild(answerDiv);

  if (index < quizData.length) {
    createAnswerButtons(quizData, index);

    createNextButton(quizData, index, answerDiv, mainDiv);

    createPreviousButton(quizData, index, answerDiv, mainDiv);
  } else {

    answerDiv.textContent = "Your Score IS:" + score;
  }
}

function createAnswerButtons(quizData, index) {
  quizData[index].answers.forEach(function (ans, correctIndex) {
    var ansbutton = document.createElement("button");
    ansbutton.classList.add("answerButton");
    ansbutton.textContent = ans.text;
    ansbutton.dataset.correct = ans.correct;
    ansbutton.addEventListener("click", function () {
      addSelectedClass(ansbutton);
      selectedAnswers[index] = ans.correct;

      console.log(selectedAnswers);
    });
    var answerDiv = document.querySelector(".answerDiv");
    answerDiv.appendChild(ansbutton);
  });
}

function createNextButton(quizData, index, answerDiv, mainDiv) {
  var nextButton = document.createElement("button");
  nextButton.classList.add("next");
  nextButton.textContent = "Next";
  answerDiv.appendChild(nextButton);

  nextButton.addEventListener("click", function () {
    if (
      selectedAnswers[index] !== undefined &&
      selectedAnswers[index] === true
    ) {
      score++;
    }

    mainDiv.removeChild(answerDiv);
    index++;
    if (index < quizData.length) {
      renderQuestion(quizData, index);
      renderAnswer(quizData, index);
    } else {
      renderQuestion(quizData, index);
      renderAnswer(quizData, index);
    }
  });
}

function createPreviousButton(quizData, index, answerDiv, mainDiv) {
  var previousButton = document.createElement("Button");
  previousButton.classList.add("previousButton");
  previousButton.textContent = "PREVIOUS";
  answerDiv.appendChild(previousButton);
  if (index === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  previousButton.addEventListener("click", function () {
    mainDiv.removeChild(answerDiv);
    index--;
    renderQuestion(quizData, index);
    renderAnswer(quizData, index);
  });
}

function addSelectedClass(clickedButton) {
  var allButtons = document.querySelectorAll(".answerButton");
  allButtons.forEach(function (button) {
    button.classList.remove("selected");
  });
  clickedButton.classList.add("selected");
}
