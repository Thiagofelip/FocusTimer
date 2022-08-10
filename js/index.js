// Display stopwatch
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")

// Buttons stopwatch
const playButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const mostButton = document.querySelector("#most")
const lessButton = document.querySelector("#less")
const minutes = Number(minutesDisplay.textContent)
const seconds = Number(secondsDisplay.textContent)
let countdown

// Events stopwatch
playButton.addEventListener('click', startStopwatch)
stopButton.addEventListener('click', stopStopwatch)
mostButton.addEventListener('click', mostMinutes)
lessButton.addEventListener('click', lessMinutes)

//Events - sounds
florest.addEventListener('click', playFlorest)
rain.addEventListener('click', playRain)
marketPlace.addEventListener('click', playMarketPlace)
fireplace.addEventListener('click', playFireplace)

function startStopwatch() {
  countdown = setTimeout(function(){
  let sec = Number(secondsDisplay.textContent)
  let min = Number(minutesDisplay.textContent)

  if (min == 0 && sec == 0) {
    resetDisplay()
    return
  }

  if(sec <= 0) {
    sec = 60

    updateDisplay((--min))
  }

  updateDisplay(min, (--sec))

  startStopwatch()
}, 1000)

}

function stopStopwatch() {
  resetDisplay()
  clearTimeout(countdown)
}

function resetDisplay() {
  updateDisplay(minutes, 00)
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")

  console.log(minutes)
}

function mostMinutes() {
  let newMinutes = Number(minutesDisplay.textContent)

  newMinutes += 5
  
  minutesDisplay.textContent = newMinutes

}

function lessMinutes() {
  if(minutesDisplay.textContent == 0) {
    return
  }

  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
}

//ambiente sound -cards
const florest = document.querySelector("#florest")
const florestAudio = document.querySelector("#florest-audio")
const rain = document.querySelector("#rain")
const marketPlace = document.querySelector("#market-place")
const fireplace = document.querySelector("#fireplace")
//ambiente sound - sounds
const florestPressSound = new Audio('audio/Floresta.wav')
const rainPressSound = new Audio("audio/Chuva.wav")
const marketPlacePressSound = new Audio("audio/Cafeteria.wav")
const fireplacePressSound = new Audio('audio/Lareira.wav')

function playFlorest() {
  florest.classList.toggle("select")

  if (florest.classList.contains('select')) {
    florestPressSound.play()
    florestPressSound.loop
  } else {
    florestPressSound.pause()
  }
}

function playRain() {
  rain.classList.toggle("select")

  if(rain.classList.contains("select")){
    rainPressSound.play()
    rainPressSound.loop()
  } else {
    rainPressSound.pause()
  }
}

function playMarketPlace() {
  marketPlace.classList.toggle("select")
  
  if(marketPlace.classList.contains("select")){
    marketPlacePressSound.play()
    marketPlacePressSound.loop()
  } else {
    marketPlacePressSound.pause()
  }
}

function playFireplace() {
  fireplace.classList.toggle("select")
  
  if(fireplace.classList.contains("select")){
    fireplacePressSound.play()
    fireplacePressSound.loop()
  } else {
    fireplacePressSound.pause()
  }
}