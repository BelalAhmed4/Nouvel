let stars = document.getElementById('stars')
let nouvil = document.getElementById('nouvil')
let moon = document.getElementById('moon')
let mountain3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountain7 = document.getElementById('mountain7')



window.onscroll = function () {
  let value = scrollY
  stars.style.left = value * 2 + 'px'
  // nouvil.style.right = value + 'px'
  moon.style.left = value * 3 + 'px'
  mountain3.style.top = value + 'px'
  mountain4.style.top = value + 'px'
  river.style.left = value + 'px'
  boat.style.left = value + 'px'
  if (scrollY >= 20) {
    document.querySelector('.main').style.background = 'linear-gradient(red,blue);'
  } else {
    document.querySelector('.main').style.background = 'transparent'

  }
  mountain7.style.top = value + 'px'
}
