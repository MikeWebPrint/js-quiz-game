
// array of objects
// each object has question: "string"
// each object has answers
// each answer is an object - key: 1
// data-isTrue: boolean
// text of answer - string

var Q1 = {
  "Q": "JavaScript is the programming language of the _____."  ,
  "A1": {
    "text": "Desktop",
    "isCorrect": false
  } ,
  "A2": {
    "text": "Mobile",
    "isCorrect": false
  } ,
  "A3": {
    "text": "Web",
    "isCorrect": true
  } ,
  "A4": {
    "text": "Server",
    "isCorrect": false
  }, 
  "explanation": "JavaScript is the programming language of the web."
}
var Q2 = {
  "Q": "Which type of language is JavaScript?" ,
  "A1": {
    "text": "Object-oriented",
    "isCorrect":false
  } ,
  "A2": {
    "text": "Object-based",
    "isCorrect": true
  } ,
  "A3": {
    "text": "Functional programming",
    "isCorrect":false
  } ,
  "A4": {
    "text": "All of the above",
    "isCorrect":false
  }, 
  "explanation": "JavaScript is an object-oriented based programming language."
}
var Q3 = {
  "Q": "Which of the following statement(s) is true about the JavaScript?" ,
  "A1": {
    "text": "It is a scripting language used to make the website interactive",
    "isCorrect":true
  } ,
  "A2": {
    "text": "It is an advanced version of Java for Desktop and Mobile application development",
    "isCorrect":false
  } ,
  "A3": {
    "text": "It is a markup language of Java to develop the webpages",
    "isCorrect":false
  } ,
  "A4": {
    "text": "All of the above",
    "isCorrect":false
  }, 
  "explanation": "Javascript is a scripting language used to make the website interactive"
}
var Q4 = {
  "Q": "In which HTML element do we put the JavaScript code?" ,
  "A1": {
    "text": "<javascript>...</javascript>",
    "isCorrect":false
  } ,
  "A2": {
    "text": "<js>...</js>",
    "isCorrect":false
  } ,
  "A3": {
    "text": "<script>...</script>",
    "isCorrect":true
  } ,
  "A4": {
    "text": "<css>...</css>",
    "isCorrect":false
  }, 
  "explanation": "The JavaScript code is written inside the <script>...</script> tag/element."
}
var Q5 = {
  "Q": "JavaScript code can be written in ____." ,
  "A1": {
    "text": "JavaScript file (.js file)",
    "isCorrect":false
  } ,
  "A2": {
    "text": "HTML document directly",
    "isCorrect":false
  } ,
  "A3": {
    "text": "JavaScript file and in HTML document directly",
    "isCorrect":true
  } ,
  "A4": {
    "text": "In style sheets (.css file)",
    "isCorrect":false
  }, 
  "explanation": "JavaScript code can be written in the JavaScript file and in HTML document directly."
}
var Q6 = {
  "Q": "Which symbol is used separate JavaScript statements?" ,
  "A1": {
    "text": "Comma (,)",
    "isCorrect":false
  } ,
  "A2": {
    "text": "Colon (:)",
    "isCorrect":false
  } ,
  "A3": {
    "text": "Hyphen (_)",
    "isCorrect":false
  } ,
  "A4": {
    "text": "Semicolon (;)",
    "isCorrect":true
  }, 
  "explanation": "The semicolon (;) is used to separate the JavaScript statements."
}
var Q7 = {
  "Q": "JavaScript ignores _____?" ,
  "A1": {
    "text": "newlines",
    "isCorrect":false
  } ,
  "A2": {
    "text": "tabs",
    "isCorrect":false
  } ,
  "A3": {
    "text": "spaces",
    "isCorrect":false
  } ,
  "A4": {
    "text": "All of the above",
    "isCorrect":true
  }, 
  "explanation": "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code."
}
var Q8 = {
  "Q": "Which is the correct syntax to call an external JavaScript file in the current HTML document?" ,
  "A1": {
    "text": "<script src='jsfile.js'></script>",
    "isCorrect":true
  } ,
  "A2": {
    "text": "<script href='jsfile.js'></script>",
    "isCorrect":false
  } ,
  "A3": {
    "text": "<import src='jsfile.js'></import>",
    "isCorrect":false
  } ,
  "A4": {
    "text": "<script link='jsfile.js'></script>",
    "isCorrect":false
  }, 
  "explanation": "The correct syntax to call an external JavaScript file in the current HTML document is: <script src='jsfile.js'></script>"
}
var Q9 = {
  "Q": "Which JavaScript method is used to access an HTML element by id?" ,
  "A1": {
    "text": "getElementById()",
    "isCorrect":false
  } ,
  "A2": {
    "text": "getElement(id)",
    "isCorrect":false
  } ,
  "A3": {
    "text": "getElementById(id)",
    "isCorrect":true
  } ,
  "A4": {
    "text": "elementById(id)",
    "isCorrect":false
  }, 
  "explanation": "The JavaScript method document.getElementById(id) is used to access an HTML document by id."
}
var Q10 = {
  "Q": "Which property is used to define the HTML content to an HTML element with a specific id?" ,
  "A1": {
    "text": "innerText",
    "isCorrect":false
  } ,
  "A2": {
    "text": "innerContent",
    "isCorrect":false
  } ,
  "A3": {
    "text": "elementText",
    "isCorrect":false
  } ,
  "A4": {
    "text": "innerHTML",
    "isCorrect":true
  }, 
  "explanation": "The innerHTML is the property that defined HTML content. Example: document.getElementById('notif').innerHTML = 'New course launched';"
}
// JS questions from 
// https://www.includehelp.com/mcq/javascript-multiple-choice-questions-mcqs.aspx
let quiz = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];
