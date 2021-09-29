const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']

const todaysimage = images[Math.floor(Math.random()*images.length)]

const body = document.querySelector('body')
body.style.backgroundImage = `url('img/${todaysimage}')`
body.style.backgroundColor = 'black'

// const bgImage = document.createElement('img')
// bgImage.src = `img/${todaysimage}`

// document.body.prepend(bgImage)