gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger to change the text color

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: 'body',
        start: '20% top', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
    }
});

tl.to('.background', {
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut'
}).to('body', {
    color: 'black',
    duration: 1,
    ease: 'power1.inOut'
}, '<');