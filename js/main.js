document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener("load", function (e) {

        this.document.body.style.display = "block";

        var tl = new TimelineMax();

        tl.staggerFrom('section', 2, {
            opacity: 0,
            scale: 0.5,
            ease: Power2.easeOut
        }, 0.35);

        tl.staggerFrom('h1, h2', 0.5, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.35, "-=2");

        tl.staggerFrom('.anim-panel', 1, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.35, "-=1.5");
    }, false)

});