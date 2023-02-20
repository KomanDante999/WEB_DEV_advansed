var tlMain = gsap.timeline()

tlMain
.from('.hero__left', {y: 100, opacity: 0, duration: 0.75})
.to('.hero__descr', {opacity: 1, duration: 0.5})
.to('#img1', {opacity: 1, duration: 0.5})
.to('#img2', {opacity: 1, duration: 0.5})
.to('#img3', {opacity: 1, duration: 0.5})
.to('.photos__author', {opacity: 1, duration: 0.5})

var btnOpenBurger = document.querySelector('#btnOpenBurger')
var btnCloseBurger = document.querySelector('#btnCloseBurger')
const burger = document.querySelector('#burgerMenu')

var tlBurgerOpen = gsap.timeline({paused: true})
tlBurgerOpen
.set(burger, {display: 'block', rotationX: 0, } )
.set(['.menu__top', '.menu__left', '.menu__right', '.social'], {opacity: 0})
.fromTo('.menu__top', {y: -100}, {y: 0, opacity: 1, duration: 0.5})
.to(burger, {backgroundColor: 'hsla(0, 0%, 22%, 1)', duration: 0.5})
.fromTo('.menu__left', {y: 100}, {y: 0, opacity: 1, duration: 0.5})
.fromTo(['.menu__right', '.social'], {y: 100}, {y: 0, opacity: 1, duration: 0.5})

var tlBurgerClose = gsap.timeline({paused: true})
tlBurgerClose
.to(burger, {rotationX: 90, duration: 0.5})
.set(burger, {display: 'none'})

btnOpenBurger.addEventListener('click', () => {
  tlBurgerOpen.play()
  tlBurgerOpen.restart()
})

btnCloseBurger.addEventListener('click', () => {
  tlBurgerClose.play()
  tlBurgerClose.restart()
})
