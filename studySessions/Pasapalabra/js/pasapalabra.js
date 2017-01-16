var questionList = [
  {
    question: 'What does the first letter of AJAX stands for?',
    answer: 'Asynchronous',
    letter: 'A'
  },
  {
    question: 'You hate when you find it in your code.',
    answer: 'Bug',
    letter: 'B'
  },
  {
    question: 'Adds the style to web documents.',
    answer: 'CSS',
    letter: 'C'
  },
  {
    question: 'Is an object-oriented representation of the web page.',
    answer: 'DOM',
    letter: 'D'
  },
  {
    question: 'Is a scripting-lenguage standard.',
    answer: 'ECMAScript',
    letter: 'E'
  },
  {
    question: 'Piece of code that can be called and can have properties and methods.',
    answer: 'Functions',
    letter: 'F'
  },
  {
    question: 'Version Control System.',
    answer: 'Git',
    letter: 'G'
  },
  {
    question: 'Describes and defines the content of a webpage.',
    answer: 'HTML',
    letter: 'H'
  },
  {
    question: 'Is an object that returns the next item in the sequence.',
    answer: 'Iterator',
    letter: 'I'
  },
  {
    question: 'Transmits data objects consisting of attribute- value pairs.',
    answer: 'JSON',
    letter: 'J'
  },
  {
    question: 'JS event where a Unicode value is stored.',
    answer: 'KeyCodes',
    letter: 'K'
  },
  {
    question: 'Repeats an action any number of times.',
    answer: 'Loop',
    letter: 'L'
  },
  {
    question: 'Includes a block of CSS properties only if a certain condition is true.',
    answer: 'Media Queries',
    letter: 'M'
  },
  {
    question: 'Is designed to build scalable network applications.',
    answer: 'Node js',
    letter: 'N'
  },
  {
    question: 'Contains keys and values.',
    answer: 'Objects',
    letter: 'O'
  },
  {
    question: 'What kind of data represents Markdown Markup Language?',
    answer: 'Plain text',
    letter: 'P'
  },
  {
    question: 'Returns the first element within the document.',
    answer: 'querySelector',
    letter: 'Q'
  },
  {
    question: 'Patterns used to match character combinations in strings.',
    answer: 'Regex',
    letter: 'R'
  },
  {
    question: 'Is a method that separates a string into substrings.',
    answer: 'Split',
    letter: 'S'
  },
  {
    question: 'The opposite of toUpperCase.',
    answer: 'toLowerCase',
    letter: 'T'
  },
  {
    question: 'Is the process of enhancing user satisfaction with a product.',
    answer: 'UX',
    letter: 'U'
  },
  {
    question: 'We assign it to our variables.',
    answer: 'Value',
    letter: 'V'
  },
  {
    question: 'Creates a loop that executes a statement if the condition evaluates to true.',
    answer: 'While',
    letter: 'W'
  },
  {
    question: 'A Markup Language that is both human-readable and machine-readable.',
    answer: 'XML',
    letter: 'X'
  },
  {
    question: 'Is an open source library for build interactive web applications.',
    answer: 'Yui',
    letter: 'Y'
  },
  {
    question: 'Is a property that specifies the z-order of a positioned element and its descendants.',
    answer: 'z-index',
    letter: 'Z'
  }
]

var answerForm = document.querySelector('.answer-form')
var letterList = document.querySelector('.letter-list')
var currentQuestion = 0

setQuestion(currentQuestion)

answerForm.addEventListener('submit', answerFormSubmitHandler)

function answerFormSubmitHandler (event) {
  event.preventDefault()

  var answerInput = event.target.querySelector('.answer-input')
  var letterSelector = '[data-letter="' + questionList[currentQuestion].letter + '"]'
  var currentLetter = letterList.querySelector(letterSelector)

  if (answerInput.value.toLowerCase() === questionList[currentQuestion].answer.toLowerCase()) {
    currentLetter.classList.add('good')
  } else {
    currentLetter.classList.add('bad')
  }

  if (currentQuestion >= questionList.length - 1) {
    showResults()
  } else {
    setQuestion(++currentQuestion)
    answerForm.reset()
  }
}

function setQuestion (num) {
  var question = answerForm.querySelector('.question')
  question.innerText = questionList[num].question
}

function showResults () {
  var correctAnswers = document.querySelectorAll('.good')
  var result = document.querySelector('.result')
  result.innerHTML = 'You got ' + correctAnswers.length + ' correct answers! ^^'
  result.classList.remove('hidden')
  answerForm.classList.add('hidden')
}
