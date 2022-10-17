import './index.html'
import './design-system.html'
import './contacts.html'
import './gallery.html'
import './projects.html'
import './certificates.html'
import './styles/index.scss'

// header 
const header = document.querySelector('.primary-header')
const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

document.querySelector('body').addEventListener('click', e => {
   if (e.target == navToggle) {
      const isVisible = header.getAttribute('data-visible')
      header.setAttribute('data-visible', isVisible === "true" ? false : true)
   } else if (e.target != nav.querySelector('ul')) {
      header.setAttribute('data-visible', false)
   }
})

// slider
const slides = document.getElementsByClassName("slider__slide")
let currentSlide = 0

document.getElementById("nav-button--next").addEventListener("click", () => {
   changeSlide(currentSlide + 1)
})
document.getElementById("nav-button--prev").addEventListener("click", () => {
   changeSlide(currentSlide - 1)
})

function changeSlide(moveTo) {
   if (moveTo >= slides.length) { moveTo = 0 }
   if (moveTo < 0) { moveTo = slides.length - 1 }

   slides[currentSlide].classList.toggle("active")
   slides[moveTo].classList.toggle("active")

   currentSlide = moveTo

   document.getElementById("current-slide").innerHTML = `0${currentSlide + 1}`
   document.getElementById("slides-length").innerHTML = `0${slides.length}`
}