

// const scroller = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
//   })
  
//   gsap.registerPlugin(ScrollTrigger)
  
  
//   scroller.on('scroll', ScrollTrigger.update)
  
//   ScrollTrigger.scrollerProxy(
//     '.container', {
//         scrollTop(value) {
//             return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0, top: 0, 
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             }
//         }
//     }
//   )
  
  
//   ScrollTrigger.create({
//     trigger: '.image-mask',
//     scroller: '.container',
//     start: 'top+=30% 50%',
//     end: 'bottom-=40% 50%',
//     animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
//     scrub: 2,
//     // markers: true
//   })
  
  
//   ScrollTrigger.addEventListener('refresh', () => scroller.update())
  
  
//   ScrollTrigger.refresh()





gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





gsap.to('.homeimg',{
    y:-500,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.title',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"50% 50%",
        end:"140% 30%",
  
    }
  });






gsap.to('.page2r',{
    y:-700,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page2l',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom top",
  
    }
  });

  gsap.to('.page2img3',{
    y:-700,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page2img4',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom top",
  
    }
  });




gsap.to('.page3',{
    scrollTrigger:{
        scroller:'#main',
        trigger:'.paget',
        pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom bottom",
  
    }
  });
  

  
gsap.to('.page3video',{
    scale:2.7,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.paget',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom bottom",
  
    }
  });
  gsap.to('.show',{
    scale:0.7,
    x:450,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.paget',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom bottom",
  
    }
  });

  gsap.to('.reel',{
    scale:0.7,
    x:-450,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.paget',
        // scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom bottom",
  
    }
  });


  gsap.from('.page4v1',{
    x:200,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page4mimg',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom bottom",
  
    }
  });

  gsap.from('.page4img1',{
    x:200,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page4mimg',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top 30%",
        end:"bottom 70%",
  
    }
  });

  gsap.from('.page4v2',{
    x:-100,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page4mimg',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top 30%",
        end:"bottom 70%",
  
    }
  });

  gsap.to('.page4img2',{
    x:100,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page4mimg',
        scrub:true,
        // pin:'.page3',
        pinSpacing:false,
        // markers:true,
        start:"top bottom",
        end:"bottom bottom",
  
    }
  });