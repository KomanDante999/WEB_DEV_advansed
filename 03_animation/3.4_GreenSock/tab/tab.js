gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray(".item");

let lastItem;

items.forEach((item, i) => {
  item.tl = gsap.timeline({
    paused: true,
    onComplete: () => item.classList.add("active")
  })
  .to(item.querySelector(".content-wrapper"), {
    duration: 1,
    height: item.querySelector(".content").scrollHeight
  })
  .from(item.querySelectorAll(".content > p"), {
    duration: 0.5,
    y: -40,
    opacity: 0,
    stagger: 0.25,
    ease: "expo"
  }, 0.25);

  item.addEventListener("click", e => {
    // Reverse the other animations
    items.forEach(myItem => myItem.tl.reverse());
    if(lastItem) {
      lastItem.classList.remove("active")
    }

    if(typeof lastItem === "undefined"
    || (lastItem && !lastItem.isSameNode(item))) {
      // Play the clicked item's animation
      item.tl.play();
      lastItem = item;
    } else {
      lastItem = undefined;
    }
  });
});
