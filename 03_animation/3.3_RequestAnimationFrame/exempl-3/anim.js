let animId = null

function test() {
  console.log('привет');
  // setInterval(test, 200000)
  animId = requestAnimationFrame(test)
}

animId = requestAnimationFrame(test)
// setInterval(test, 200000)

window.addEventListener('click', () => {
  cancelAnimationFrame(animId)
})

