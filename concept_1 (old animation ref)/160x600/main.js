const bannerImg = document.querySelector(".bannerAd");
const drawButton = document.querySelector(".drawButton");
const hiltonLogo = document.querySelector(".hiltonLogo");
const forthetext = document.querySelector(".forthe");

const drawButton_wrapper = document.querySelector(".drawButton_wrapper");
let tl = gsap.timeline({
  ease: "Power1.easeInOut",
  repeat:3,
  repeatDelay: 3,
});






tl
  .from(
    ".drawButton",
    {
      onStart: () => {
        document.querySelector('.drawButton_wrapper').classList.add("hide");
        
        drawButton.classList.remove("animate");
        setTimeout(() => {
          drawButton_wrapper.classList.remove("R");
        }, 500);
        gsap.to(drawButton, {
          opacity: 1,
          onComplete: () => {
            document.querySelector('.drawButton_wrapper').classList.remove("hide");
            drawButton.classList.add("animate");
            setTimeout(() => {
              drawButton_wrapper.classList.remove("R");
            }, 500);
          },
        });
      },

      onRepeat: function () {
        gsap.to(drawButton, {
          opacity: 1,
          onComplete: () => {
           drawButton.classList.add("animate");
            setTimeout(() => {
              drawButton_wrapper.classList.remove("R");
            }, 500);
          },
        });
      },
    },
    
  )
  .to(
    hiltonLogo,
    {
      opacity: 1,
      duration: 2,
    },
    "-=0.3"
  )
  .to(forthetext, {
    opacity: 1,
    duration: 0.5,
    y:2,
  
  })


  tl.from(".frame1 .content_one span", {
    opacity: 0,
    y: 16,
    stagger: 0.12,
    duration: 0.9,
  },"-=2")

  .from('.location img', {
    opacity: 0,
    y:10,
    stagger:0.2,
    duration: 1,
  } , "hello" ,"+=.5")

  .from('.location svg', {
    opacity: 0,
    y:10,
    stagger:0.2,
    duration: 1,
  }, "hello" ,"+=.5")




