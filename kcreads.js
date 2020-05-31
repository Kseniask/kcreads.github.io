window.onscroll = function () {
  fixedheader()
}
var header = document.getElementById('myheader')
var sticky = header.offsetTop

function fixedheader () {
  if (window.pageYOffset > sticky && screen.width < 640) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}

function Readmore () {
  var dots = document.getElementById('dots')
  var moretext = document.getElementById('more')
  var btnText = document.getElementById('myBtn')

  if (dots.style.display === 'none') {
    dots.style.display = 'inline'
    moretext.style.display = 'none'
    btnText.innerHtml = 'Read more'
  } else {
    dots.style.display = 'none'
    moretext.style.display = 'inline'
    btnText.innerHTML = 'Read less'
  }
}

function Readmore1 () {
  var dots = document.getElementById('dots1')
  var moretext = document.getElementById('more1')
  var btnText = document.getElementById('myBtn1')

  if (dots.style.display === 'none') {
    dots.style.display = 'inline'
    moretext.style.display = 'none'
    btnText.innerHtml.Text = 'Read more'
  } else {
    dots.style.display = 'none'
    moretext.style.display = 'inline'
    btnText.innerHTML = 'Read less'
  }
}
var menu = document.getElementById('links')
function burgerMenu () {
  if (menu.id == 'links') {
    menu.id = 'burger'
  } else {
    menu.id = 'links'
  }
}
