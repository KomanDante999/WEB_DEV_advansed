var tl = gsap.timeline({repeat: 30, repeatDelay: 1});

//add 3 tweens that will play in direct succession.
tl.to(".green", {duration: 1, x: 200});
tl.to(".orange", {duration: 1, x: 200, scale: 0.2});
tl.to(".grey", {duration: 1, x: 200, scale: 2, y: 20});
