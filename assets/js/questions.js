
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
    "text": "Hyphen (_)",
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