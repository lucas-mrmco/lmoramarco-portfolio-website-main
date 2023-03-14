

$(function () {
    $(".p2").typed({
        strings: ["WEBDESIGNER", "INTÉGRATEUR WEB", "DIRECTEUR ARTISTIQUE", "FREELANCE", "COMMUNITY MANAGER", "CRÉATEUR DE CONTENU"],
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 2000,
        showCursor: false,
        loop: true
    });
});

$('.hero-down').mousedown(function () {
    TweenMax.fromTo('.btn-react', 0.25, {
        opacity: 0,
        scale: 0
    }, {
        opacity: 0.25,
        scale: 1,
        onComplete: function () {
            TweenMax.to('.btn-react', 0.25, {
                opacity: 0,
                scale: 0
            });
        }
    });
});

// smooth scroll to div
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});





var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('blockquote', .5, { x: 200, opacity: 0 });
tl.from('span', 1, { width: 0 }, "=-.5");
tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

tl2.from("#box", 1, { opacity: 0, scale: 0 });
tl2.to("#box", .5, { left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' })

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".sticky")
    .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
})
    .setTween(tl2)
    .addTo(controller);


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    console.log(tl.progress());
}

/* modes */


(function ($) {
    "use strict";

    //Parallax            

    function scrollBanner() {
        $(document).on('scroll', function () {
            var scrollPos = $(this).scrollTop();
            $('.parallax-fade-top').css({
                'top': (scrollPos / 2) + 'px',
                'opacity': 1 - (scrollPos / 700)
            });
            $('.parallax-00').css({
                'top': (scrollPos / -3.5) + 'px'
            });
            $('.parallax-01').css({
                'top': (scrollPos / -2.8) + 'px'
            });
            $('.parallax-top-shadow').css({
                'top': (scrollPos / -2) + 'px'
            });
        });
    }
    scrollBanner();

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


    //Scroll back to top

    $(document).ready(function () {
        var offset = 300;
        var duration = 400;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.scroll-to-top').addClass('active-arrow');
            } else {
                jQuery('.scroll-to-top').removeClass('active-arrow');
            }
        });
        jQuery('.scroll-to-top').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


        /* Hero Case study images */

        $('.case-study-name:nth-child(1)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(1)').addClass("show");
            $('.case-study-name:nth-child(1)').addClass('active');
        })
        $('.case-study-name:nth-child(2)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(2)').addClass("show");
            $('.case-study-name:nth-child(2)').addClass('active');
        })
        $('.case-study-name:nth-child(3)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(3)').addClass("show");
            $('.case-study-name:nth-child(3)').addClass('active');
        })
        $('.case-study-name:nth-child(4)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(4)').addClass("show");
            $('.case-study-name:nth-child(4)').addClass('active');
        })
        $('.case-study-name:nth-child(1)').trigger('mouseenter')

    });

})(jQuery);


// 3d galery

window.onload = () => {

    gsap.set('#scrollDist', {
        width: '100%',
        height: gsap.getProperty('#app', 'height'), // apply the height of the image stack
        onComplete: () => {
            gsap.set('#app, #imgGroup', { opacity: 1, position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, perspective: 300 })
            gsap.set('#app img', {
                position: 'absolute',
                attr: {
                    id: (i, t, a) => { //use GSAP's built-in loop to setup each image
                        initImg(i, t);
                        return 'img' + i;
                    }
                }
            })

            gsap.timeline({
                defaults: { duration: 1 },
                onUpdate: () => { if (gsap.getProperty('#cursorClose', 'opacity') == 1) closeDetail() }, //close detail view on scroll
                scrollTrigger: {
                    trigger: '#scrollDist',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                }
            })
                .fromTo('#txt1', { scale: 0.6, transformOrigin: '50%' }, { scale: 2, ease: 'power1.in' }, 0)
                .to('#txt1 path', { duration: 0.3, drawSVG: 0, stagger: 0.05, ease: 'power1.in' }, 0)
                .fromTo('.imgBox', { z: -5000 }, { z: 350, stagger: -0.3, ease: 'none' }, 0.3)
                .fromTo('.imgBox img', { scale: 3 }, { scale: 1.15, stagger: -0.3, ease: 'none' }, 0.3)
                .to('.imgBox', { duration: 0, pointerEvents: 'auto', stagger: -0.3 }, 0.5)
                .from('.imgBox img', { duration: 0.3, opacity: 0, stagger: -0.3, ease: 'power1.inOut' }, 0.3)
                .to('.imgBox img', { duration: 0.1, opacity: 0, stagger: -0.3, ease: 'expo.inOut' }, 1.2)
                .to('.imgBox', { duration: 0, pointerEvents: 'none', stagger: -0.3 }, 1.27)
                .add('end')
                .fromTo('#txt2', { scale: 0.1, transformOrigin: '50%' }, { scale: 0.6, ease: 'power3' }, 'end-=0.2')
                .from('#txt2 path', { duration: 0.4, drawSVG: 0, ease: 'sine.inOut', stagger: 0.15 }, 'end-=0.2')

            // intro animation
            gsap.from(window, { duration: 1.4, scrollTo: gsap.getProperty('#scrollDist', 'height') / 3, ease: 'power2.in' });
            gsap.from('.imgBox', { duration: 0.2, opacity: 0, stagger: 0.06, ease: 'power1.inOut' })
        }

    })

    function initImg(i, t) {
        const box = document.createElement('div') // make a container div
        box.appendChild(t) // move the target image into the container
        document.getElementById('imgGroup').appendChild(box) // put the container into the imgGroup div
        gsap.set(box, {
            pointerEvents: 'none',
            position: 'absolute',
            attr: { id: 'box' + i, class: 'imgBox' },
            width: t.width,
            height: t.height,
            overflow: 'hidden',
            top: '50%',
            left: '50%',
            x: t.dataset.x,
            y: t.dataset.y,
            xPercent: -50,
            yPercent: -50,
            perspective: 500
        })

        t.onmouseover = () => gsap.to('#cursorCircle', { duration: 0.2, attr: { r: 30, 'stroke-width': 4 } })

        t.onmousedown = () => {
            gsap.to(t, { z: -25, ease: 'power2' })
            gsap.to('#cursorCircle', { attr: { r: 40 }, ease: 'power3' })
        }

        t.onmouseup = () => gsap.to(t, { z: 0, ease: 'power1.inOut' })

        t.onmouseout = () => gsap.to('#cursorCircle', { duration: 0.2, attr: { r: 11, 'stroke-width': 3 } })

        t.onclick = () => showDetail(t)
    }

    function showDetail(t) {
        gsap.timeline()
            .set('#detailTxt', { textContent: t.alt }, 0)
            .set('#detailImg', { background: 'url(' + t.src + ') center no-repeat' }, 0)
            .fromTo('#detail', { top: '100%' }, { top: 0, ease: 'expo.inOut' }, 0)
            .fromTo('#detailImg', { y: '100%' }, { y: '0%', ease: 'expo', duration: 0.7 }, 0.2)
            .fromTo('#detailTxt', { opacity: 0 }, { opacity: 1, ease: 'power2.inOut' }, 0.4)
            .to('#cursorCircle', { duration: 0.2, opacity: 0 }, 0.2)
            .to('#cursorClose', { duration: 0.2, opacity: 1 }, 0.4)
    }

    function closeDetail() {
        gsap.timeline()
            .to('#detailTxt', { duration: 0.3, opacity: 0 }, 0)
            .to('#detailImg', { duration: 0.3, y: '-100%', ease: 'power1.in' }, 0)
            .to('#detail', { duration: 0.3, top: '-100%', ease: 'expo.in' }, 0.1)
            .to('#cursorClose', { duration: 0.1, opacity: 0 }, 0)
            .to('#cursorCircle', { duration: 0.2, opacity: 1 }, 0.1)
    }
    document.getElementById('detail').onclick = closeDetail;

    if (ScrollTrigger.isTouch == 1) { // on mobile, hide mouse follower + remove the x/y positioning from the images
        gsap.set('#cursor', { opacity: 0 })
        gsap.set('.imgBox', { x: 0, y: 0 })
    } else {

        // quickTo can be used to optimize x/y movement on the cursor...but it doesn't work on fancier props like 'xPercent'
        cursorX = gsap.quickTo('#cursor', 'x', { duration: 0.3, ease: 'power2' })
        cursorY = gsap.quickTo('#cursor', 'y', { duration: 0.3, ease: 'power2' })

        window.onmousemove = (e) => {
            gsap.to('.imgBox', { // move + rotate imgBoxes relative to mouse position
                xPercent: -e.clientX / innerWidth * 100,
                yPercent: -25 - e.clientY / innerHeight * 50,
                rotateX: 8 - e.clientY / innerHeight * 16,
                rotateY: -8 + e.clientX / innerWidth * 16
            })

            gsap.to('.imgBox img', { // move images inside each imgBox, creates additional parallax effect
                xPercent: -e.clientX / innerWidth * 10,
                yPercent: -5 - e.clientY / innerHeight * 10
            })

            // mouse follower
            cursorX(e.clientX)
            cursorY(e.clientY)
        }
    }
}




gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container-car");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
    let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Pinning and horizontal scrolling

    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});

// Récupère la vidéo et la fenêtre de visualisation
var video = document.querySelector('.hero-video video');
var viewport = window.innerHeight || document.documentElement.clientHeight;

// Ajoute un événement de défilement pour détecter quand l'utilisateur fait défiler la page
window.addEventListener('scroll', function () {
    // Calcule la distance de la vidéo depuis le haut de la page
    var distance = video.getBoundingClientRect().top;

    // Calcule la quantité de flou en fonction de la distance de la vidéo depuis le haut de la page
    var blurValue = distance / viewport * 10;

    // Ajuste la valeur du flou
    video.style.filter = 'blur(' + blurValue + 'px)';
});


// footer

