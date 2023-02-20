/**
 * Function that wraps any event (or object) with RequestAnimationFrame
 */
 const withRequestAnimationFrame = (event, func) => {
	let timeout;
	(() => {
		if (timeout) {
			window.cancelAnimationFrame(timeout)
		}
		timeout = window.requestAnimationFrame(() => func(event));
	})();
}

const buttons = document.querySelectorAll('.radial-button');

/**
 * Reduces the circle width to 50%
 * and sets the center of the radial gradient to mouseover point
 */
const handleMove = (e) => {
  e.target.style.setProperty("--offsetX", e.offsetX + "px");
  e.target.style.setProperty("--offsetY", e.offsetY + "px" );
  e.target.style.setProperty("--maxPercent", "50%");
}

/**
 * Recursively steps back radial gradient to be 100% circle at center
 * @param {Object} props - The entirety of properties being passed to function.
 * @param {HTMLElement} props.button - The Button Element being transitioned
 * @param {Number} props.stepsTaken - Running count of steps completed
 * @param {Number} props.targetSteps - Constant Final Steps Target
 * @param {Number} props.offsetXPer - Constant Value of offsetX in Percentage
 * @param {Number} props.offsetYPer - Constant Value of offsetY in Percentage
 */
const restoreOffsets = (props) => {
  const {button, stepsTaken, targetSteps, offsetXPer, offsetYPer} = props
  if (stepsTaken === targetSteps + 1) {
    return
  }

  let offsetX = 50;
  let offsetY = 50;
  let maxPercent = 100;
  // only update values if still taking steps
  if (stepsTaken !== targetSteps) {
    // calculate value for number of steps taken
    const xStep = ( (Math.abs(offsetXPer - 50) / targetSteps ) * stepsTaken )
    const yStep = ( (Math.abs(offsetYPer - 50) / targetSteps ) * stepsTaken )
    const perStep = 50 / targetSteps * stepsTaken;
    // alternately add or substract based on starting percentage to move toward 50
    offsetX = offsetXPer > 50 ? offsetXPer -  xStep : offsetXPer + xStep
    offsetY = offsetYPer > 50 ? offsetYPer -  yStep : offsetXPer + yStep
    maxPercent = 50 + perStep
  }
  //update CSS properties
  button.style.setProperty("--offsetX", offsetX + "%");
  button.style.setProperty("--offsetY", offsetY + "%");
  button.style.setProperty("--maxPercent", maxPercent + "%");
  //increment step & call function again with RAF
  props.stepsTaken++;
  withRequestAnimationFrame(props, restoreOffsets)
}

const handleMouseOut = (e) => {
  // convert offset from pixels to percentage
  const offsetXPer = ( ( e.offsetX < 0 ? 0 : e.offsetX ) / e.target.getBoundingClientRect().width * 100 );
  const offsetYPer = ( ( e.offsetY < 0 ? 0 : e.offsetY ) / e.target.getBoundingClientRect().height * 100 );
  // call restoreOffsets with RAF
  withRequestAnimationFrame({ button: e.target, stepsTaken: 0, targetSteps: 10, offsetXPer, offsetYPer }, restoreOffsets)
}

buttons.forEach(button => {
  button.addEventListener('mousemove', e => withRequestAnimationFrame(e, handleMove));
  // button.addEventListener('touchmove', e => {
  //   e.preventDefault()
  //   withRequestAnimationFrame(e, handleMove)
  // });
  button.addEventListener('mouseout', e => withRequestAnimationFrame(e, handleMouseOut));
})

