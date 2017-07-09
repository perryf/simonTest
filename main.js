var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')

box1.addEventListener('click', playC)
box1.addEventListener('click', userTallyC)
box2.addEventListener('click', playD)
box2.addEventListener('click', userTallyD)
box3.addEventListener('click', playE)
box3.addEventListener('click', userTallyE)

function userTallyC () {
  userArray.push(1)
  compare()
}

function userTallyD () {
  userArray.push(2)
  compare()
}

function userTallyE () {
  userArray.push(3)
  compare()
}

function playC () {
  box1.style.backgroundColor = 'red'
  document.getElementById('cnote').volume = '0.3'
  document.getElementById('cnote').play()
  setTimeout(blueC, 500)
}
function playD () {
  box2.style.backgroundColor = 'red'
  document.getElementById('dnote').volume = '0.3'
  document.getElementById('dnote').play()
  setTimeout(blueD, 500)
}
function playE () {
  box3.style.backgroundColor = 'red'
  document.getElementById('enote').volume = '0.3'
  document.getElementById('enote').play()
  setTimeout(blueE, 500)
}

function blueC () {
  box1.style.backgroundColor = 'blue'
  document.getElementById('cnote').pause()
  document.getElementById('cnote').load()
}
function blueD () {
  box2.style.backgroundColor = 'blue'
  document.getElementById('dnote').pause()
  document.getElementById('dnote').load()
}
function blueE () {
  box3.style.backgroundColor = 'blue'
  document.getElementById('enote').pause()
  document.getElementById('enote').load()
}

function music (notes) {
  for (let i = 0; i < notes.length; i++) {
    setTimeout(function () {
      playNote(notes[i])
    }, 1000 * i)
  }
}

function playNote (la) {
  if (la === '1') {
    playC()
  } if (la === '2') {
    playD()
  } if (la === '3') {
    playE()
  }
}

let compArray = []
let compString = ''
function compRandom () {
  compArray.push(Math.floor(Math.random() * 3 + 1))
  compString = compArray.join('')
  console.log(compString)
  music(compString)
}

var button = document.getElementById('button')
button.addEventListener('click', function () {
  compRandom()
})

let userArray = []
let userString = ''

function compare () {
  userString = userArray.join('')
  if (userString.length === compString.length) {
    if (userString === compString) {
      console.log('goodjob')
      userArray = []
      setTimeout(compRandom, 2000)
    } else if (userString !== compString) {
      console.log('you lose')
    }
  }
}
