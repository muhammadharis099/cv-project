// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// First Page Animation
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut"
    })
    .to(".boundingelem", {
      y: 0,
      stagger: 0.2,
      duration: 2,
      delay: -1,
      ease: "expo.inOut"
    })
    .from("#herofooter", {
      y: 10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: "expo.inOut"
    });
}

// Circle Follower
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = 
      `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

// Call Functions
circleMouseFollower();
firstPageAnim();
