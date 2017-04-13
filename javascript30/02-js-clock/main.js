function setDate () {
  const secondHand = document.querySelector('.seconds-hand')
  const minuteHand = document.querySelector('.minutes-hand')
  const hourHand = document.querySelector('.hours-hand')

  const now = new Date()

  let seconds = now.getSeconds()
  let secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  let minutes = now.getMinutes()
  let minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  let hours = now.getHours()
  let hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  let meridiem = 'AM'

  if (hours > 12) {
    hours = hours - 12
    meridiem = 'PM'
  }

  if (hours === 0) {
    hours = 12
  }

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  document.querySelector('.digital').innerText = hours + ':' + minutes + ' ' + meridiem
}

setInterval(setDate, 1000)

setDate()
