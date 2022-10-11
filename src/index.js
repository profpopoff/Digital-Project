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