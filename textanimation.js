window.onload = function () {

    var timeline = new TimelineMax();
    timeline.to(".circle-wrapper", .5, {autoAlpha:1,ease: Power2.easeOut }, 1.7)
    .from(".hi-block", 1.5, { y: 60,ease: Power3.easeOut }, .4)
    .to(".hi-block", .3, {autoAlpha:1,ease: Power3.easeOut }, .4)
    .to(".hi-block", 1.5, { y: -50,ease: Power3.easeOut }, 1.7)
    .to(".hi-block", .1, {autoAlpha:0,ease: Power3.easeOut }, 1.55)
    .to(".color-slider", 1, {y:-800,ease: Power3.easeInOut }, 1.05)
    .from(".title-1", 1, { y: 110,ease: Power3.easeOut }, 1.4)
    .to(".title-1", 1, {autoAlpha:1,ease: Power3.easeOut }, 1.4)
    .from(".text-fade", 1.3, { y: 80,autoAlpha:0, ease: Power3.easeOut},1.7)
    };

document.getElementById('name-hover').addEventListener('mouseenter', function () {

    var timeline2 = new TimelineMax ();
    timeline2.to(".bg-title-wrapper", .1, {autoAlpha:1, ease: Power3.easeInOut})
    .to(".circle-cursor, .circle-cursor-2, .circle-cursor-3", .2, {css: {scale: 1.5,transformOrigin: "50% 50%"}, ease: Power3.easeOut})

    var bgText = new TimelineMax({repeat:-1});
    bgText.from(".line-1", 120, {x: -500,ease: Power2.easeOut })

    var bgText2 = new TimelineMax({repeat:-1});
    bgText2.to(".line-2", 250, {x: -1000,ease: Power2.easeOut })

    var bgText3 = new TimelineMax({repeat:-1});
    bgText3.from(".line-3", 200, {x: -500,ease: Power2.easeOut })
})

document.getElementById('name-hover').addEventListener('mouseout', function () {

    var timeline4 = new TimelineMax ();
    timeline4.to(".bg-title-wrapper", .1, {autoAlpha:0, ease: Power3.easeOut})
    .to(".circle-cursor, .circle-cursor-2, .circle-cursor-3", .2, {css: {scale: 1,transformOrigin: "50% 50%"},  ease: Power3.easeOut})

    var bgTextReverse = new TimelineMax({repeat:-1});
    bgTextReverse.to(".line-1", .5, {x: 0,ease: Power2.easeOut })

    var bgText2Reverse = new TimelineMax({repeat:-1});
    bgText2Reverse.to(".line-2", 1, {x: 0,ease: Power2.easeOut })

    var bgText3Reverse = new TimelineMax({repeat:-1});
    bgText3Reverse.to(".line-3", 1, {x: 0,ease: Power2.easeOut })
})
