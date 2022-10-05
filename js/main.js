const oImg = document.querySelector('#oImg')
const ssVideo = document.querySelector('#ssVideo')
const spVideo = document.querySelector('#spVideo')
const seVideo = document.querySelector('#seVideo')
const m1Video = document.querySelector('#m1Video')
const m2Video = document.querySelector('#m2Video')
const n1Video = document.querySelector('#n1Video')
const n2Video = document.querySelector('#n2Video')

document.querySelector('#o').addEventListener('click', overlay)
document.querySelector('#c').addEventListener('click', cyberpunk)
document.querySelector('#ss').addEventListener('click', streamStart)
document.querySelector('#se').addEventListener('click', streamEnd)
document.querySelector('#sp').addEventListener('click', streamPause)
document.querySelector('#m1').addEventListener('click', morning1)
document.querySelector('#m2').addEventListener('click', morning2)
document.querySelector('#n1').addEventListener('click', night1)
document.querySelector('#n2').addEventListener('click', night2)


function cyberpunk(){
  oImg.classList.add('hidden')
  ssVideo.classList.add('hidden')
  seVideo.classList.add('hidden')
  spVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  m2Video.pause()
  spVideo.pause()
  n1Video.pause()
  n2Video.pause()
  seVideo.pause()
}


function streamStart(){
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  oImg.classList.add('hidden')
  spVideo.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')
  seVideo.classList.add('hidden')

  m1Video.pause()
  m2Video.pause()
  spVideo.pause()
  n1Video.pause()
  n2Video.pause()
  seVideo.pause()

  ssVideo.classList.toggle('hidden')
  ssVideo.play();
}

function morning1(){
  ssVideo.classList.add('hidden')
  m2Video.classList.add('hidden')
  oImg.classList.add('hidden')
  spVideo.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')
  seVideo.classList.add('hidden')
  m1Video.classList.toggle('hidden')

  ssVideo.pause()
  m2Video.pause()
  spVideo.pause()
  n1Video.pause()
  n2Video.pause()
  seVideo.pause()

  m1Video.play()
}

function morning2(){
  ssVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  oImg.classList.add('hidden')
  spVideo.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  spVideo.pause()
  n1Video.pause()
  n2Video.pause()
  seVideo.pause()

  m2Video.classList.toggle('hidden')
  m2Video.play()
}

function overlay(){
  ssVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  spVideo.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  m2Video.pause()
  spVideo.pause()
  n1Video.pause()
  n2Video.pause()
  seVideo.pause()

  oImg.classList.toggle('hidden')
}

function streamPause(){
  ssVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  oImg.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  m2Video.pause()
  n1Video.pause()
  n2Video.pause()
  seVideo.pause()

  spVideo.classList.toggle('hidden')
  spVideo.play()
}

function night1(){
  ssVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  oImg.classList.add('hidden')
  spVideo.classList.add('hidden')
  n2Video.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  m2Video.pause()
  spVideo.pause()
  n2Video.pause()
  seVideo.pause()

  n1Video.classList.toggle('hidden')
  n1Video.play()
}

function night2(){
  ssVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  oImg.classList.add('hidden')
  spVideo.classList.add('hidden')
  n1Video.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  m2Video.pause()
  spVideo.pause()
  n1Video.pause()
  seVideo.pause()

  n2Video.classList.toggle('hidden')
  n2Video.play()
}

function streamEnd(){
  ssVideo.classList.add('hidden')
  m1Video.classList.add('hidden')
  m2Video.classList.add('hidden')
  oImg.classList.add('hidden')
  spVideo.classList.add('hidden')
  n1Video.classList.add('hidden')
  n2Video.classList.add('hidden')

  ssVideo.pause()
  m1Video.pause()
  m2Video.pause()
  spVideo.pause()
  n1Video.pause()
  n2Video.pause()

  seVideo.classList.toggle('hidden')
  seVideo.play()
}
