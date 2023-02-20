var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var resume = document.querySelector("#resume");
var reverse = document.querySelector("#reverse");
var restart = document.querySelector("#restart");

var tl = gsap.timeline({paused: true});

tl.to(".green", {duration: 1, x: 200})
  .to(".orange", {duration: 1, x: 200, scale: 0.2}, "+=1")
  .to(".grey", {duration: 1, x: 200, scale: 2, y: 20}, "greyAndPink")
  .to(".pink", {duration: 1, x: 200, rotation: 360}, "greyAndPink");

play.onclick = function() {
  tl.play();
}

pause.onclick = function() {
  tl.pause();
}

resume.onclick = function() {
  tl.resume();
}

reverse.onclick = function() {
  tl.reverse();
}

restart.onclick = function() {
  tl.restart();
}
