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
  "explanation": "JavaScript is an object-oriented based programming language."
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
// var score = 42;
var score = document.getElementById('score').innerHTML;
var userInput = document.getElementById('initials') //.value.trim().toUpperCase();
var user = userInput.value;
var done = document.getElementById('done');
var intro = document.getElementById('intro')
var showScore = document.getElementById('score');
var scoreForm = document.getElementById('scoreForm');
var start = document.getElementById('start-btn');
start.addEventListener('click', startGame);
scoreForm.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(user, score);
  setScore(user, score);
  showHighScores();
});
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
      hsEntry.innerHTML = j +'. ' + scores[i].user +' ' +scores[i].score;
      highScoresList.appendChild(hsEntry);
    }
  }
  document.getElementById('Back').addEventListener('click', reload)
  document.getElementById('clearHighScores').addEventListener('click', clear);
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
  var question = document.querySelectorAll('.questions');
  for (i=0; i < question.length; i++){
    question[i].remove();
    }
  }
function hideIntro() {
  intro.setAttribute('class', 'd-none');
}
// show score and capture user initials section
function showDone(counter) {
  done.setAttribute('class', 'd-block');
  showScore.textContent= counter;
}

function iterateQuizItems() {
  for (i=0; i < quiz.length; i++) {
    var questionSection = document.createElement('section');
    questionSection.setAttribute('class', 'questions');
    var j=i+1;
    var questionNum = document.createElement('h2');
    questionNum.innerHTML = 'JS Question <span id="questionNum">'+ j + '</span>';
    questionSection.appendChild(questionNum);
    document.body.appendChild(questionSection); 
    var questionText = document.createElement('p');
    questionText.setAttribute('class', 'questionText');
    questionText.textContent = quiz[i].Q
    questionSection.appendChild(questionText);
    var options = document.createElement('div');
    options.setAttribute('class', 'options');
    questionSection.appendChild(options);
    var answers = quiz[i].answers;
    for (k=0; k < answers.length; k++) {
      var optionButton = document.createElement('button');
      if (answers[k].isCorrect===true) {
        optionButton.setAttribute('data-correct', true);
        } else {
          optionButton.setAttribute('data-correct', false);
      }
      optionButton.textContent = answers[k].text;
      options.appendChild(optionButton);
      createExplanation();
      // var message = document.createElement('div');
      // var isCorrect = optionButton.getAttribute('data-correct');
      // message.setAttribute('class', 'expHidden');
      // message.innerHTML = showExplanation + ' - ' + quiz[i].explanation;
      // optionButton.addEventListener('click', showExplanation, true);
      var oneQuestion = function(){
        var questions = document.querySelectorAll('.questions');
        for (i=0; i < questions.length; i++){
          questions[i].style.display = 'none';
          // console.log(questions);
        }
          // var j=questions.length;
          // questions[j].style.display = 'block';
          // k=0
          // questions[k].style.display = 'block';
          // var currentQuestion = questions[k] ;
          // console.log(currentQuestion);
          // var selectAnswer = function(){

          // }

        // select();
        // optionButton.addEventListener('click', selectAnswer, false);

        // optionButton.addEventListener('click', isCorrect, false);
        
        }
      }
      // questionSection.appendChild(message);
      console.log(questionSection);
        var hr = document.createElement('hr');
        questionSection.appendChild(hr);
  }
}

// function currentQuestion() {
//   var questions = document.querySelectorAll('section');
//   // console.log(Array.from(questions)[0])
//   // questions[0].removeAttribute('class');
//   // questions[0].setAttribute('class','questions d-block');
//   // console.log(questions);
//   for (i=0; i<questions.length; i++){
//     questions[i].style.display = 'none';
//     console.log(questions[i])
//   }
//   var j=0;
//   questions[j].style.display = 'block';


//   // console.log(questions);
// }
// showOnlyCurrentQuestion()
// console.log(document.getElementsByClassName('questions'))

// currentQuestion()


// https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
function ticktock() {
  var counter = 15;
  var timer = setInterval(function(){
    // console.log(counter);
    var timeLeft = document.getElementById('time-left')
    counter--
    timeLeft.innerHTML = 'Time: ' + counter;
    if (counter === 0) {
      clearInterval(timer);
      hideQuestion();
      showDone(counter);
    }
  }, 1000);
  // TODO set counter to score
}







function stopGameButton() {
  var stopButton = document.createElement('button');
  stopButton.textContent = 'Stop Game';
  document.getElementById('stop').appendChild(stopButton);
  stopButton.addEventListener('click', function(){
    clearInterval(ticktock);
  });
}

/************************
* scoring
***********************/
function getScore() {
  var scores = localStorage.getItem('scores');
  return scores;
}
function setScore(user, score) {
  getScore();
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
// Utility functions
function clear() {
  localStorage.clear();
  document.getElementById('highScoresList').remove();
}
function disableViewHighScores() {
  document.getElementById('viewScores').style.visibility = 'hidden';
}
// startGame calls other utility functions
function startGame() {
  hideIntro();
  disableViewHighScores();
  // stopGameButton();
  ticktock();
  shuffleArray(quiz);
  makeQuestionList();
  // iterateQuestion();
  iterateQuizItems();
  if (document.getElementById('done')){
    // hideIntro();
  }
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


var options = document.getElementById('options')
var explanation = document.getElementById('explanation');


function createExplanation() {
  if (options){
    var optionButton = options.querySelectorAll('button')
    var isCorrect = optionButton.getAttribute('data-correct');
    for (i=0; i< optionButton.length; i++){
      optionButton[i].addEventListener('click', function(e){
        console.log('hello')
        explanation.setAttribute('class', 'd-block');
        if (e.target.getAttribute('data-correct')===true){
          alert('correct');
          var msg = 'Correct! - ';
        } else {
          alert('incorrect');
          var msg = 'Incorrect! - ';
        }
        explanation.textContent = msg;
        console.log(explanation);
  
  
      }, true);
    }
    // optionButton.addEventListener('click', showExplanation, true);
    // optionButton.addEventListener('click', function(e){
    //   console.log('hello')
    //   explanation.setAttribute('class', 'd-block');
    //   if (e.target.getAttribute('data-correct')===true){
    //     alert('correct');
    //     var msg = 'Correct! - ';
    //   } else {
    //     alert('incorrect');
    //     var msg = 'Incorrect! - ';
    //   }
    //   explanation.textContent = msg;



    // }, true);


  }

}




      // function showExplanation(e) {
      //   document.querySelector('.expHidden').setAttribute('class', 'showExp');
      //   if (e.target.getAttribute('data-correct')===true){
      //     alert('correct');
      //     var msg = 'Correct! - ';
      //   } else {
      //     alert('incorrect');
      //     var msg = 'Incorrect! - ';
      //   }
      //   explanation.textContent = msg;
      // }