let checkboxes = document.querySelectorAll('.tasks input[type="checkbox"]')
let formControl = document.querySelector('.form-control input[type="checkbox"]')

let lastChecked

function handleCheck (e) {
  let inBetween = false

  if (e.shiftKey && this.checked) {
  	checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }


  lastChecked = this
}

function selectAll (e) {
  checkboxes.forEach(checkbox => {
    checkbox.checked = e.target.checked
  })
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
formControl.addEventListener('click', selectAll)
