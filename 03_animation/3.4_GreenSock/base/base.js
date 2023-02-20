setTimeout(() => {

  // ex#1
  // gsap.to('.block', {x: 1000, duration: 0.25})

  // ex#2
  // gsap.to('.block', {x: 1000, rotation: 800, scale: 0.1, duration: 2})

  // ex#3
  // gsap.from('.block', {x: 1000, rotation: 800, scale: 0.1, opacity: 0.1, duration: 2})

  // ex#3
  gsap.fromTo('.block', {y: 0, rotation: 0, scale: 2, opacity: 1}, {y: 500, rotation: 800, scale: 0.1, opacity: 0.1, duration: 4})


}, 1000)
