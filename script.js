
window.addEventListener("load", () => {

    // SHERY IMAGE EFFECT

    try {

        Shery.imageEffect("#back", {
            style: 5,
            gooey: true,

            config: {
                "a": { "value": 0.6, "range": [0, 30] },
                "b": { "value": -0.98, "range": [-1, 1] },
                "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
                "aspect": { "value": 0.9957219088141294 },
                "ignoreShapeAspect": { "value": true },
                "shapePosition": { "value": { "x": 0, "y": 0 } },
                "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
                "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
                "shapeRadius": { "value": 0, "range": [0, 2] },
                "currentScroll": { "value": 0 },
                "scrollLerp": { "value": 0.07 },
                "gooey": { "value": true },
                "infiniteGooey": { "value": true },
                "growSize": { "value": 4, "range": [1, 15] },
                "durationOut": { "value": 1, "range": [0.1, 5] },
                "durationIn": { "value": 1.5, "range": [0.1, 5] },
                "displaceAmount": { "value": 0.5 },
                "masker": { "value": true },
                "maskVal": { "value": 1.23, "range": [1, 5] },
                "scrollType": { "value": 0 },
                "geoVertex": { "range": [1, 64], "value": 1 },
                "noEffectGooey": { "value": false },
                "onMouse": { "value": 1 },
                "noise_speed": { "value": 0.2, "range": [0, 10] },
                "metaball": { "value": 0.2, "range": [0, 2] },
                "discard_threshold": { "value": 0.5, "range": [0, 1] },
                "antialias_threshold": { "value": 0, "range": [0, 0.1] },
                "noise_height": { "value": 0.5, "range": [0, 2] },
                "noise_scale": { "value": 10, "range": [0, 100] }
            }
        });

    } catch (error) {

        console.error("Shery effect error:", error);

    }


    // TEXT SLIDE ANIMATION

    const elements = document.querySelectorAll("#heroleft .elem");

    let index = 0;

    const totalSlides = elements[0].querySelectorAll("h1").length;

    let isAnimating = false;


    // INITIAL POSITION

    elements.forEach((elem) => {

        const headings = elem.querySelectorAll("h1");

        gsap.set(headings, {
            y: 0
        });

    });


    // TEXT CHANGE FUNCTION

    function changeText() {

        if (isAnimating) return;

        isAnimating = true;

        index = (index + 1) % totalSlides;

        const animation = gsap.timeline({

            onComplete: () => {
                isAnimating = false;
            }

        });

        elements.forEach((elem) => {

            const headings = elem.querySelectorAll("h1");

            // Get actual container height
            const slideHeight = elem.clientHeight;

            animation.to(headings, {

                y: -slideHeight * index,

                duration: 0.8,

                ease: "power3.inOut"

            }, 0);

        });

    }


    // MAIN CLICK EVENT

    document.querySelector("#main").addEventListener("click", (e) => {

        // Ignore navigation clicks
        if (e.target.closest("#nav")) {
            return;
        }

        // Ignore right-side content
        if (e.target.closest("#heroright")) {
            return;
        }

        changeText();

    });

});
