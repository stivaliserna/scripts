const pressed = []
const secretCode = 'stefan'
const clue = document.querySelector('button')
const clueText = document.querySelector('#clue')

function clueTrigger () {
  const text = 'My rubber duck'
  clueText.innerHTML = text
}

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

  if (pressed.join('').includes(secretCode)) {
    cornify_add()
  }
})

clue.addEventListener('click', clueTrigger)
