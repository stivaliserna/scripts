const pressed = []
const secretCode = 'stefan'
const clue = document.querySelector('button')
const clueText = document.querySelector('#clue')

const clues = [
  'My rubber duck',
  'kek',
  'hue'
]

let currentClue = 0

function clueTrigger () {
  clueText.innerHTML = clues[currentClue]
  currentClue = (currentClue + 1) % clues.length
}

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

  if (pressed.join('').includes(secretCode)) {
    cornify_add()
  }
})

clue.addEventListener('click', clueTrigger)
