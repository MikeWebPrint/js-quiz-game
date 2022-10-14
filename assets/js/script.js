/**************************
 * questions
 **************************/
var Q1 = {
  "Q": "JavaScript is the programming language of the _____.",
  "answers": 
    [{"text": "Desktop", "isCorrect": false},
    {"text": "Mobile", "isCorrect": false},
    {"text": "Web", "isCorrect": true},
    {"text": "Server", "isCorrect": false}],
  "explanation": "JavaScript is the programming language of the web."
}
var Q2 = {
  "Q": "Which type of language is JavaScript?" ,
  "answers": 
    [{"text": "Object-oriented", "isCorrect":false} ,
    {"text": "Object-based", "isCorrect": true} ,
    {"text": "Functional programming", "isCorrect":false} ,
    {"text": "All of the above", "isCorrect":false}], 
  "explanation": "JavaScript is an object based programming language."
}
var Q3 = {
  "Q": "Which of the following statement(s) is true about the JavaScript?" ,
  "answers": 
    [{"text": "It is a scripting language used to make the website interactive", "isCorrect":true} ,
    {"text": "It is an advanced version of Java for Desktop and Mobile application development", "isCorrect":false} ,
    {"text": "It is a markup language of Java to develop the webpages", "isCorrect":false} ,
    {"text": "All of the above", "isCorrect":false}], 
  "explanation": "Javascript is a scripting language used to make the website interactive"
}
var Q4 = {
  "Q": "In which HTML element do we put the JavaScript code?" ,
  "answers": 
    [{"text": "<javascript>...</javascript>", "isCorrect":false} ,
    {"text": "<js>...</js>", "isCorrect":false} ,
    {"text": "<script>...</script>", "isCorrect":true} ,
    {"text": "<css>...</css>", "isCorrect":false}], 
  "explanation": "The JavaScript code is written inside the <script>...</script> tag/element."
}
var Q5 = {
  "Q": "JavaScript code can be written in ____." ,
  "answers": 
    [{"text": "JavaScript file (.js file)", "isCorrect":false} ,
    {"text": "HTML document directly", "isCorrect":false} ,
    {"text": "JavaScript file and in HTML document directly", "isCorrect":true} ,
    {"text": "In style sheets (.css file)", "isCorrect":false}], 
  "explanation": "JavaScript code can be written in the JavaScript file and in HTML document directly."
}
var Q6 = {
  "Q": "Which symbol is used separate JavaScript statements?" ,
  "answers": 
  [{"text": "Comma (,)", "isCorrect":false} ,
    {"text": "Colon (:)", "isCorrect":false} ,
    {"text": "Hyphen (-)", "isCorrect":false} ,
    {"text": "Semicolon (;)", "isCorrect":true}], 
  "explanation": "The semicolon (;) is used to separate the JavaScript statements."
}
var Q7 = {
  "Q": "JavaScript ignores _____?" ,
  "answers": 
    [{"text": "newlines", "isCorrect":false} ,
    {"text": "tabs", "isCorrect":false} ,
    {"text": "spaces", "isCorrect":false} ,
    {"text": "All of the above", "isCorrect":true}], 
  "explanation": "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code."
}
var Q8 = {
  "Q": "Which is the correct syntax to call an external JavaScript file in the current HTML document?" ,
  "answers": 
    [{"text": "<script src='jsfile.js'></script>", "isCorrect":true} ,
    {"text": "<script href='jsfile.js'></script>", "isCorrect":false} ,
    {"text": "<import src='jsfile.js'></import>", "isCorrect":false} ,
    {"text": "<script link='jsfile.js'></script>", "isCorrect":false}], 
  "explanation": "The correct syntax to call an external JavaScript file in the current HTML document is: &lt;script src='jsfile.js'&gt;&lt;/script\&gt;"
}
var Q9 = {
  "Q": "Which JavaScript method is used to access an HTML element by id?" ,
  "answers": 
    [{"text": "getElementById()", "isCorrect":false} ,
    {"text": "getElement(id)", "isCorrect":false} ,
    {"text": "getElementById(id)", "isCorrect":true} ,
    {"text": "elementById(id)", "isCorrect":false}], 
  "explanation": "The JavaScript method document.getElementById(id) is used to access an HTML document by id."
}
var Q10 = {
  "Q": "Which property is used to define the HTML content to an HTML element with a specific id?" ,
  "answers": 
    [{"text": "innerText", "isCorrect":false} ,
    {"text": "innerContent", "isCorrect":false} ,
    {"text": "elementText", "isCorrect":false} ,
    {"text": "innerHTML", "isCorrect":true}], 
  "explanation": "The innerHTML is the property that defined HTML content. Example: document.getElementById('notif').innerHTML = 'New course launched';"
}
// JS questions from 
// https://www.includehelp.com/mcq/javascript-multiple-choice-questions-mcqs.aspx
let quiz = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];
/**************************
 * question data manipulation
 **************************/
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  array.slice(0);
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  } 
}
function makeQuestionList() {
  quiz.splice(0,5);
}

/**************************
 * global variables
 * *************************/
var highScoresPage = document.getElementById('highScoresPage');
var viewScores = document.getElementById('viewScores');
viewScores.addEventListener('click', showHighScores);
// var score = 42; //for manual testing
// var userInput = document.getElementById('initials') //.value.trim().toUpperCase();
// var user = userInput.value;
var done = document.getElementById('done');
var intro = document.getElementById('intro');
var showScore = document.getElementById('showScore')
var scoreForm = document.getElementById('scoreForm');
var start = document.getElementById('start-btn');
var timeLeft = document.getElementById('time-left')
var score = timeLeft.textContent;
start.addEventListener('click', startGame);
scoreForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var user = document.getElementById('initials').value.trim().toUpperCase();
  // var user = userInput.value;
  // console.log(user, score);
  setScore(user);
  showHighScores();
});
var stopButton = document.getElementById('stop');
var isWin = false;
var isStopped = false;
var isCanceled = false;

var questionSection = document.getElementById('questionsArea');
var options = document.getElementById('options')
var explanationDiv = document.getElementById('explanationContainer');
var explanation = document.getElementById('explanation');


function showHighScores(e) {
  if (e) {
    e.preventDefault();
  }
  if (document.getElementById('intro')) {
    hideIntro();
  }
  if (done) {
    hideDone();
  }
  highScoresPage.setAttribute('class', 'd-block');
  hideHeader();
  // create and insert scores list into scores section
  var highScoresList = document.getElementById('highScoresList');
  var scores = JSON.parse(localStorage.getItem('scores'));
  console.log(scores);
  if (scores != null){
    for (let i=0; i<scores.length; i++){
      var hsEntry = document.createElement('div');
      hsEntry.setAttribute('class', 'hsEntry')
      var j = i + 1;
      hsEntry.innerHTML = j +'. ' + scores[i].user +' - ' +scores[i].score;
      highScoresList.setAttribute('class', 'd-block')
      highScoresList.appendChild(hsEntry);
    }
  }
  document.getElementById('Back').addEventListener('click', reload)
  document.getElementById('clearHighScores').addEventListener('click', clear);
}
// Utility functions
function clear() {
  localStorage.clear();
  document.getElementById('highScoresList').remove();
}
function disableViewHighScores() {
  document.getElementById('viewScores').setAttribute('class', 'd-none');
}
function reload() {
  location.reload();
}
function hideHeader() {
  document.getElementById('header').remove();
}
function hideDone(){
  done.setAttribute('class', 'd-none');
}
function hideQuestion(){
  questionSection.setAttribute('class', 'd-none')
  }
function hideIntro() {
  intro.setAttribute('class', 'd-none');
}
// show score and capture user initials section
function showDone(counter) {
  done.setAttribute('class', 'd-block');
  var counter = timeLeft.textContent;
  // showScore.textContent = '25'
  // showScore.textContent = counter;
  showScore.textContent =  counter;
  stopButton.setAttribute('class', 'd-none');
  document.getElementById('viewScores').setAttribute('class', 'd-block');
}

var i=0;
function iterateQuizItems() {
  var currentQuestion = quiz[i];
  var j=i+1;
  var nextQuestion = quiz[j];
  var questionBlock = document.createElement('div');
  var questionNum = document.createElement('h3');
  questionBlock.appendChild(questionNum)
  questionNum.innerHTML = 'JS Question <span id="questionNum">'+ j + '</span>';
  questionSection.setAttribute('class', 'd-block');
  questionSection.appendChild(questionBlock);
  var questionText = document.createElement('p');
  questionText.setAttribute('class', 'questionText');
  questionBlock.appendChild(questionText)
  questionText.textContent = currentQuestion.Q
  questionBlock.appendChild(questionText);
  var options = document.createElement('div');
  options.setAttribute('class', 'options');
  questionBlock.appendChild(options);
  var answers = currentQuestion.answers;
  for (k=0; k < answers.length; k++) {
    var optionButton = document.createElement('button');
    if (answers[k].isCorrect===true) {
      optionButton.setAttribute('data-correct', true);
      } else {
        optionButton.setAttribute('data-correct', false);
    }
    optionButton.textContent = answers[k].text;
    options.appendChild(optionButton);
    optionButton.addEventListener('click', function(e){
      console.log(currentQuestion);
      console.log(nextQuestion);
      explanationDiv.setAttribute('class', 'd-block');
      var correctMsg;
      var isCorrect = e.target.getAttribute('data-correct');
      if (isCorrect==='true') {
        correctMsg = 'Correct - '
        console.log(this)

      } else {
        correctMsg = 'Wrong - '
        console.log(this)
        timePenalty();
      }
      explanation.innerHTML = correctMsg + quiz[i].explanation //this should go into the event handler for validating the button selection
      if (j< quiz.length){
        questionBlock.setAttribute('class', 'd-none');
        i++;
        iterateQuizItems();
      } else {
        hideQuestion();
        isStopped = true;
        showDone()
        isWin=true;
      }
    });
  }
}

// https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
var counter = 30;
function ticktock() {
  var timer = setInterval(function(){
    // console.log(counter);
    counter--
    timeLeft.textContent = counter;
      if ((counter === 0) || (isWin===true)) {
        clearInterval(timer);
        showDone(counter);
        hideQuestion();
      }
      if (isCanceled ===true) {
        clearInterval(timer);
        hideQuestion();
        reload();
      }
      if (isWin===true){
        clearInterval(timer);
        showDone();
        hideQuestion();
      }
      if (counter < 6){
        solidRed();
      }
    
  }, 1000);
}

function showStopButton() {
  stopButton.setAttribute('class', 'd-block');
  stopButton.addEventListener('click', function(){
    isCanceled = true;
  })
}
/************************
* scoring
***********************/
function getScore() {
  var scores = localStorage.getItem('scores');
  return scores;
}
function setScore(user) {
  var score = document.getElementById('showScore').textContent;
  getScore();
  explanationDiv.setAttribute('class', 'd-none');
  if (getScore() === null){
    var highScores =[];
  } else {
    var highScores = JSON.parse(localStorage.getItem('scores'));
  }
  highScores.push({user, score})
  highScores.sort(function(a,b){
    return b.score - a.score;
  })
  highScores.splice(5);
  localStorage.setItem('scores', JSON.stringify(highScores))
}
function timePenalty() {
  counter = counter - 5;
  flashRed();
}
function flashRed() {
  timeLeft.setAttribute('class', 'red')
  var flash = setTimeout(function(){
    timeLeft.setAttribute('class', 'accent')
  }, 2000) 
}
function solidRed() {
  timeLeft.setAttribute('class', 'red')
}
// startGame calls other utility functions
function startGame() {
  isWin = false; //haven't won yet
  shuffleArray(quiz); //shuffle questions deck
  makeQuestionList(); //pick 5 questions
  iterateQuizItems(); //generate questions HTML
  hideIntro(); //remove the intro text and button 
  disableViewHighScores(); //hide high scores link
  showStopButton(); //user can cancel out 
  ticktock(); // show timer
}
/*
*************************
* triggers used in development and testing
* ************************
*/
// hideIntro();
// showDone()
// startGame()
// ticktock();
// hideIntro();
// getScore();
// setScore(score);
// shuffleArray(quiz);
// makeQuestionList();
// iterateQuizItems();
// console.log(quiz);
// showQuestion();
// shuffleArray(quiz);
// makeQuestionList();
// showExplanation();
// showHighScores();
// hideIntro();
// showOnlyCurrentQuestion();





