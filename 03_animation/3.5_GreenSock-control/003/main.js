// instantiate TimelineMax
const tl = new TimelineMax();

// scale down the text
// and hide it before the animation begins
tl
  .set(".example__title", {
    scale: 0.2,
    autoAlpha: 0
  })
  // scale the circle shape down before
  // the animation begins
  .set(".example__ball", {
    scale: 0.2
  })
  // tween 1: rotate shape on X and Y axis
  // scale it up to its regular dimensions
  // add a fun ease
  .to(".example__ball", 0.5, {
    rotationX: 360,
    rotationY: 180,
    scale: 1,
    ease: Elastic.easeIn.config(2, 1)
  })
  // tween 2: make text appear and
  // scale it up to its regular size
  // add a fun ta-da ease
  .to(".example__title", 0.5, {
    autoAlpha: 1,
    scale: 1,
    ease: Back.easeOut.config(4)
  });
