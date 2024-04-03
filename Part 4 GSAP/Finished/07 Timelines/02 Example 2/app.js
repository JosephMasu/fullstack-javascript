let tl = gsap
  .timeline({
    defaults: {
      duration: 1,
    },
  })
  .to("h1", {
    y: -100,
    color: "white",
  })
  .to(
    ".box1",
    {
      x: -100,
      backgroundColor: "pink",
      borderRadius: 50,
      rotate: 360,
    }
  )
  .to(".box2", {
    y: 100,
    borderRadius: 50,
    rotate: 360,
    backgroundColor: "purple",
  })
  .to(".box3", {
    borderRadius: 50,
    rotate: 360,
    x: 100,
    backgroundColor: "crimson",
  });
   