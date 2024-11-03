let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let box = document.querySelector(".box");

main.addEventListener("mouseenter" , ()=> {
    gsap.to(cursor , {
        scale: 1
    })
})

main.addEventListener("mousemove", (e)=> {
    gsap.to(cursor , {
        x: e.x - 10,
        y: e.y - 10,
        ease: "elastic.out(1,0.3)",
        duration: 2.5
    })
})

main.addEventListener("mouseleave" , ()=> {
    gsap.to(cursor , {
        scale: 0
    })
})

box.addEventListener("mouseenter" , ()=> {
    cursor.innerHTML = "$"
    gsap.to(cursor , {
      scale: 5
    })
})
box.addEventListener("mouseleave" , ()=> {
    cursor.innerHTML = ""
    gsap.to(cursor , {  
      scale: 1
    })
})


function smoothScrolling() {
    
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
//   console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

}
smoothScrolling()