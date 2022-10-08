// init
// set score - define variable and set in localStorage
var score = 0;

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
function showHighScores() {
  hideHeader();
  // create and insert high scores section
  var highScoresPage = document.createElement('section');
  highScoresPage.setAttribute('id', 'highScoresPage');
  var highScoresTitle = document.createElement('h2');
  highScoresTitle.textContent = 'High Scores';
  document.body.appendChild(highScoresPage);
  highScoresPage.appendChild(highScoresTitle);
  // create and insert scores list into scores section
  var highScoresList = document.createElement('div');
  highScoresList.setAttribute('id', 'highScoresList');
  highScoresPage.appendChild(highScoresList);
  var hsEntry = document.createElement('div');
  hsEntry.setAttribute('class', 'hsEntry')
  var hsPosition = '1. ';
  var hsInitials = 'MDJ';
  var hsScore = '20';
  hsEntry.innerHTML = hsPosition + hsInitials + ' - ' + hsScore;
  highScoresList.appendChild(hsEntry);
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
}
function hideHeader() {
  var header = document.getElementById('header');
  header.remove();
}
function hideIntro() {
  var intro = document.getElementById('intro');
  intro.remove();
}
function showDone() {
  // create and insert Done message and form section
  var done = document.createElement('section');
  done.setAttribute('id', 'done');
  done.innerHTML = '<h2>All done!</h2><h3>Your final score is: <span id="score">'+ 'score ' + '</span></h3>';
  var enterScore = document.createElement('form');
  enterScore.innerHTML = '<label for="initials">Enter your initials</label>\n<input type="text" name="initials" placeholder="ABC">';
  done.appendChild(enterScore);
  document.body.appendChild(done);
}
function showQuestion() {
  // create and insert question and options section
  var questionSection = document.createElement('section');
  questionSection.setAttribute('id', 'questions');
  var questionNum = document.createElement('h2');
  questionNum.innerHTML = 'JS Question <span id="questionNum">1</span>';
  questionSection.appendChild(questionNum);
  document.body.appendChild(questionSection); 
  var jsQuestion = document.createElement('p');
  jsQuestion.setAttribute('id', 'jsQuestion');
  jsQuestion.textContent = 'Here is the text of your question.'
  questionSection.appendChild(jsQuestion);
  // create and insert options buttons
  var options = document.createElement('div');
  options.setAttribute('id', 'options');
  questionSection.appendChild(options);
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

  // console.log(questionSection.innerHTML);
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

// showQuestion();
// showExplanation();
// showHighScores();
// hideIntro();
// showDone();