/*
  *************************
 * questions
 * ************************
 */
// array of objects
// each object has question: "string"
// each object has answers
// each answer is an object - key: 1
// data-isTrue: boolean
// text of answer - string

var Q1 = {
  "Q": "JavaScript is the programming language of the _____.",
  "answers": [{
      "text": "Desktop",
      "isCorrect": false
    },
    {
      "text": "Mobile",
      "isCorrect": false
    },
    {
      "text": "Web",
      "isCorrect": true
    },
    {
      "text": "Server",
      "isCorrect": false
    }],
  "explanation": "JavaScript is the programming language of the web."
}
var Q2 = {
  "Q": "Which type of language is JavaScript?" ,
  "answers": [{
    "text": "Object-oriented",
    "isCorrect":false
  } ,
  {
    "text": "Object-based",
    "isCorrect": true
  } ,
  {
    "text": "Functional programming",
    "isCorrect":false
  } ,
  {
    "text": "All of the above",
    "isCorrect":false
  }], 
  "explanation": "JavaScript is an object-oriented based programming language."
}
var Q3 = {
  "Q": "Which of the following statement(s) is true about the JavaScript?" ,
  "answers": [{
    "text": "It is a scripting language used to make the website interactive",
    "isCorrect":true
  } ,
  {
    "text": "It is an advanced version of Java for Desktop and Mobile application development",
    "isCorrect":false
  } ,
  {
    "text": "It is a markup language of Java to develop the webpages",
    "isCorrect":false
  } ,
  {
    "text": "All of the above",
    "isCorrect":false
  }], 
  "explanation": "Javascript is a scripting language used to make the website interactive"
}
var Q4 = {
  "Q": "In which HTML element do we put the JavaScript code?" ,
  "answers": [{
    "text": "<javascript>...</javascript>",
    "isCorrect":false
  } ,
  {
    "text": "<js>...</js>",
    "isCorrect":false
  } ,
  {
    "text": "<script>...</script>",
    "isCorrect":true
  } ,
  {
    "text": "<css>...</css>",
    "isCorrect":false
  }], 
  "explanation": "The JavaScript code is written inside the <script>...</script> tag/element."
}
var Q5 = {
  "Q": "JavaScript code can be written in ____." ,
  "answers": [{
    "text": "JavaScript file (.js file)",
    "isCorrect":false
  } ,
  {
    "text": "HTML document directly",
    "isCorrect":false
  } ,
  {
    "text": "JavaScript file and in HTML document directly",
    "isCorrect":true
  } ,
  {
    "text": "In style sheets (.css file)",
    "isCorrect":false
  }], 
  "explanation": "JavaScript code can be written in the JavaScript file and in HTML document directly."
}
var Q6 = {
  "Q": "Which symbol is used separate JavaScript statements?" ,
  "answers": [{
    "text": "Comma (,)",
    "isCorrect":false
  } ,
  {
    "text": "Colon (:)",
    "isCorrect":false
  } ,
  {
    "text": "Hyphen (-)",
    "isCorrect":false
  } ,
  {
    "text": "Semicolon (;)",
    "isCorrect":true
  }], 
  "explanation": "The semicolon (;) is used to separate the JavaScript statements."
}
var Q7 = {
  "Q": "JavaScript ignores _____?" ,
  "answers": [{
    "text": "newlines",
    "isCorrect":false
  } ,
  {
    "text": "tabs",
    "isCorrect":false
  } ,
  {
    "text": "spaces",
    "isCorrect":false
  } ,
  {
    "text": "All of the above",
    "isCorrect":true
  }], 
  "explanation": "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code."
}
var Q8 = {
  "Q": "Which is the correct syntax to call an external JavaScript file in the current HTML document?" ,
  "answers": [{
    "text": "<script src='jsfile.js'></script>",
    "isCorrect":true
  } ,
  {
    "text": "<script href='jsfile.js'></script>",
    "isCorrect":false
  } ,
  {
    "text": "<import src='jsfile.js'></import>",
    "isCorrect":false
  } ,
  {
    "text": "<script link='jsfile.js'></script>",
    "isCorrect":false
  }], 
  "explanation": "The correct syntax to call an external JavaScript file in the current HTML document is: <script src='jsfile.js'></script>"
}
var Q9 = {
  "Q": "Which JavaScript method is used to access an HTML element by id?" ,
  "answers": [{
    "text": "getElementById()",
    "isCorrect":false
  } ,
  {
    "text": "getElement(id)",
    "isCorrect":false
  } ,
  {
    "text": "getElementById(id)",
    "isCorrect":true
  } ,
  {
    "text": "elementById(id)",
    "isCorrect":false
  }], 
  "explanation": "The JavaScript method document.getElementById(id) is used to access an HTML document by id."
}
var Q10 = {
  "Q": "Which property is used to define the HTML content to an HTML element with a specific id?" ,
  "answers": [{
    "text": "innerText",
    "isCorrect":false
  } ,
  {
    "text": "innerContent",
    "isCorrect":false
  } ,
  {
    "text": "elementText",
    "isCorrect":false
  } ,
  {
    "text": "innerHTML",
    "isCorrect":true
  }], 
  "explanation": "The innerHTML is the property that defined HTML content. Example: document.getElementById('notif').innerHTML = 'New course launched';"
}
// JS questions from 
// https://www.includehelp.com/mcq/javascript-multiple-choice-questions-mcqs.aspx
let quiz = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];


/*
  *************************
 * garbage
 * ************************
 */
// init
// set score - define variable and set in localStorage
// var score = 0;

// get score - retrieve from localStorage and update variable, display to page
// high scores - array of objects containing score and initials
// sort high scores array - high to low score
// loop to create elements for each score and append to scores page
// do we limit how many high scores? if so, add new score, sort, remove lowest after x 
// start game
// array of objects containing questions and answers, set order to a random order
// loop through array and create question and answer HTML elements
// append [0] to question section - question and options
// answers will have data attributes of correct or incorrect
// select an answer 
// if correct, go to next question
// if incorrect, go to next question, display wrong message with correct question and answer above in text reduce time by 15 seconds

// start game
// section#intro display: none
// section#questions display: block
// set timer to 59


// var time = ;
// var tictoc = function() {
//   time = 59
//   time--;
// }


// var setTime = function() {
//   setInterval(tictoc, 1000);
//   var timeLeft = document.querySelector('#time-left');
//   timeLeft.innerHTML = time;
// }
// tictoc();
// setTime();

// // tictoc();
// // setTime();
// setInterval() {x, 1000}
// while (i > 0) {
// time -= t
// }
/*
  *************************
 * DOM elements and functions
 * ************************
 */
function showHighScores(e) {
  e.preventDefault();
  hideIntro();
  hideHeader();
  if (document.getElementById('done')){
    hideDone()
  };
  // getScore();
  // create and insert high scores section
  var highScoresPage = document.createElement('section');
  highScoresPage.setAttribute('id', 'highScoresPage');
  var highScoresTitle = document.createElement('h2');
  highScoresTitle.textContent = 'High Scores';
  document.body.appendChild(highScoresPage);
  highScoresPage.appendChild(highScoresTitle);
  // create and insert scores list into scores section
  var highScoresList = document.createElement('div');
  console.log('testing' + score);
  var scores = JSON.parse(localStorage.getItem('scores'));

console.log(scores);
  highScoresList.setAttribute('id', 'highScoresList');
  highScoresPage.appendChild(highScoresList);

  if (scores != null){
    for (let i=0; i<scores.length; i++){
      var hsEntry = document.createElement('div');
      hsEntry.setAttribute('class', 'hsEntry')
      var j = i + 1;
      hsEntry.innerHTML = j +'. ' + scores[i].user +' ' +scores[i].score;
      highScoresList.appendChild(hsEntry);
    }
  }
  
  // var hsPosition = '1. ';
  // var hsInitials = scores.user;
  // var hsScore = scores.score;
  // hsEntry.innerHTML = hsPosition + hsInitials + ' - ' + hsScore;



  // create and insert buttons into scores section
  var scoreButtons = document.createElement('div');
  var backButton = document.createElement('button');
  backButton.setAttribute('id', 'Back');
  backButton.textContent = 'Go back';
  var clearButton = document.createElement('button');
  clearButton.setAttribute('id', 'clearHighScores');
  clearButton.textContent = 'Clear High Scores';
  scoreButtons.appendChild(backButton);
  scoreButtons.appendChild(clearButton);
  highScoresPage.appendChild(scoreButtons);
  document.getElementById('Back').addEventListener('click', reload)
  document.getElementById('clearHighScores').addEventListener('click', clear);
}
function reload() {
  location.reload();
}
function hideHeader() {
  document.getElementById('header').remove();
}
function hideDone() {
  document.getElementById('done').remove();
}
var viewScores = document.getElementById('viewScores');
viewScores.addEventListener('click', showHighScores);
function hideIntro() {
  var intro = document.getElementById('intro');
  intro.remove();
}
// var score = 42;

function showDone(counter) {
  // create and insert Done message and form section
  var done = document.createElement('section');
  done.setAttribute('id', 'done');
  done.innerHTML = '<h2>All done!</h2>';
  var scoreForm = document.createElement('form');
  scoreForm.setAttribute('id', 'scoreForm');
  scoreForm.innerHTML = '<h3>Your final score is: <span id="score">'+ counter + '</span></h3><label for="initials">Enter your initials</label>\n<input id="initials" type="text" name="initials" maxlength="3" placeholder="ABC"></input>\n<button type="submit">Submit</button>';
  done.appendChild(scoreForm);
  document.body.appendChild(done);
  var score = document.getElementById('score').textContent;
  var user = document.getElementById('initials').value.trim().toUpperCase();
  scoreForm.addEventListener('submit', function(e) {
    // if (user===""){
    //   alert('enter something');
    //   } else{
      e.preventDefault();
      console.log(score);
      console.log(user);
      setScore(user, score);
    
  });
}




function showQuestion() {
  // create and insert question and options section
  // var questionSection = document.createElement('section');
  // questionSection.setAttribute('id', 'questions');
  // var questionNum = document.createElement('h2');



  // questionNum.innerHTML = 'JS Question <span id="questionNum">'+ 1 + '</span>';
  // questionSection.appendChild(questionNum);
  // document.body.appendChild(questionSection); 
  // var questionText = document.createElement('p');
  // questionText.setAttribute('id', 'questionText');
  // questionText.textContent = quiz[0].Q
  
  // questionSection.appendChild(questionText);
  // create and insert options buttons
  // var options = document.createElement('div');
  // options.setAttribute('id', 'options');
  // questionSection.appendChild(options);
  var optionButton = document.createElement('button');
  optionButton.setAttribute('id', 'opt-btn-1');
  optionButton.setAttribute('data-correct', true);
  optionButton.innerHTML = 'Here is the correct answer';
  options.appendChild(optionButton);

  var optionButton = document.createElement('button');
  optionButton.setAttribute('id', 'opt-btn-2');
  optionButton.setAttribute('data-correct', false);
  optionButton.innerHTML = 'Here is an incorrect answer';
  options.appendChild(optionButton);

  var optionButton = document.createElement('button');
  optionButton.setAttribute('id', 'opt-btn-3');
  optionButton.setAttribute('data-correct', false);
  optionButton.innerHTML = 'Here is an incorrect answer';
  options.appendChild(optionButton);

  var optionButton = document.createElement('button');
  optionButton.setAttribute('id', 'opt-btn-4');
  optionButton.setAttribute('data-correct', false);
  optionButton.innerHTML = 'Here is an incorrect answer';
  options.appendChild(optionButton);

  var hr = document.createElement('hr');
  questionSection.appendChild(hr);

  showExplanation();
}
function showExplanation() {
  var explanation = document.createElement('div');
  explanation.setAttribute('id', 'result');
  explanation.innerHTML = '<h3>Correct</h3>\n<p id="explanation">Javascript fact from previous question</p>';
  var questionSection = document.querySelector('#questions');
  questionSection.appendChild(explanation);
}
/*
  *************************
 * question data manipulation
 * ************************
 */
// var questionList = quiz.sort((Math.random()-0.5));
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

function iterateQuizItems() {
  for (i=0; i < quiz.length; i++) {
    var questionSection = document.createElement('section');
    questionSection.setAttribute('class', 'questions d-block');
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
    }
    var hr = document.createElement('hr');
    questionSection.appendChild(hr);
    // console.log(questionSection);
  }
}
function showOnlyCurrentQuestion() {
  var currentQuestion = document.getElementsByClassName('questions');
  currentQuestion[1].removeAttribute('class');
  currentQuestion[1].setAttribute('class','questions d-none');
  console.log(currentQuestion);
}
// showOnlyCurrentQuestion()
// console.log(document.getElementsByClassName('questions'))

// https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

// var count=5;
function ticktock() {

  var counter = 5;
  var timer = setInterval(function(){
    // console.log(counter);
    var timeLeft = document.getElementById('time-left')
    counter--
    timeLeft.innerHTML = 'Time: ' + counter;
    if (counter === 0) {
      clearInterval(timer);
      showDone(counter);
    }
  }, 1000);







  // var timer = document.getElementById('time-left')
  // timer.innerHTML = 'Time: ' + count;
  // if (count <= 0) {
  //   clearInterval(counter);
  //   //counter ended, do something here
  //   //  setScore(counter-1) // TODO set counter to score
  //   return;
  // }  
  // count--;
  // return count;
    // console.log(score);
}

/************************
* scoring
***********************/
// var score = 1112;
// hideIntro()
function getScore() {
  var scores = localStorage.getItem('scores');
  return scores;
}

function setScore(user, score) {
  // var scoreForm = document.getElementById('scoreForm');
  // var initials = document.getElementById('initials')
  // var score = document.getElementById('score').textContent;
  // scoreForm.addEventListener('submit', setScore);
  // e.preventDefault();
  getScore();
  if (getScore() === null){
    var highScores =[];
  } else {
    var highScores = JSON.parse(localStorage.getItem('scores'));

  }
  // var user = initials.value;
  // var user = user.trim();
  highScores.push({user, score})
  highScores.sort(function(a,b){
    return b.score - a.score;
  })
  highScores.splice(5);
  localStorage.setItem('scores', JSON.stringify(highScores))






}
function clear() {
  localStorage.clear();
  // reload();
  // showHighScores();
}



// document.getElementById('Back').addEventListener('click', reload)
// }
// function reload() {
//   location.reload();
// }
function startGame () {
  // var counter=setInterval(ticktock, 1000); //1000 will  run it every 1 second
  hideIntro();
  ticktock();
  shuffleArray(quiz);
  makeQuestionList();
  iterateQuizItems();
  if (document.getElementById('done')){
    hideIntro();
  }
}
var start = document.getElementById('start-btn');
start.addEventListener('click', startGame);

// hideIntro();
// showDone()
/*
*************************
* triggers
* ************************
*/
// ticktock();
// hideIntro();
  // getScore();
  // setScore(score);
  // shuffleArray(quiz);
  // makeQuestionList();
  // iterateQuizItems();
  // console.log(quiz);
  
  // showQuestion();
  // showDone()
// shuffleArray(quiz);
// makeQuestionList();

// showExplanation();
// showHighScores();
// hideIntro();

// showOnlyCurrentQuestion();