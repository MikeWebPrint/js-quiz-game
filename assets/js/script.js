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

  var hsEntry = document.createElement('div');
  hsEntry.setAttribute('class', 'hsEntry')
  var hsPosition = '1. ';
  var hsInitials = 'MDJ';
  var hsScore = '20';
  hsEntry.innerHTML = hsPosition + hsInitials + ' - ' + hsScore;
  highScoresList.appendChild(hsEntry);
  
  var hsEntry = document.createElement('div');
  hsEntry.setAttribute('class', 'hsEntry')
  var hsPosition = '1. ';
  var hsInitials = 'MDJ';
  var hsScore = '20';
  hsEntry.innerHTML = hsPosition + hsInitials + ' - ' + hsScore;
  highScoresList.appendChild(hsEntry);

  var hsEntry = document.createElement('div');
  hsEntry.setAttribute('class', 'hsEntry')
  var hsPosition = '1. ';
  var hsInitials = 'MDJ';
  var hsScore = '20';
  hsEntry.innerHTML = hsPosition + hsInitials + ' - ' + hsScore;
  highScoresList.appendChild(hsEntry);

  var hsEntry = document.createElement('div');
  hsEntry.setAttribute('class', 'hsEntry')
  var hsPosition = '1. ';
  var hsInitials = 'MDJ';
  var hsScore = '20';
  hsEntry.innerHTML = hsPosition + hsInitials + ' - ' + hsScore;
  highScoresList.appendChild(hsEntry);

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
showHighScores()