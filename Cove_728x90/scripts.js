(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { scaleX: 0, x: 0, y: 0, autoAlpha: 1 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name to "t"



    function bannerInit() {
        //set unique positions and other values you plan to animate here

        t.set([], setValues);

        t.set([], { transformOrigin: '0% 100%' });


        //init animation
        Frame01();
    }

    // animation sequence begin
    function Frame01() {

        t.from(bk1, 0, { autoAlpha: 0, delay: 0 });
        t.from(logo01, 1, { autoAlpha: 0, ease: Power3.easeOut, delay: 1 });
        t.from(logo01, 1, { y: "+=5", ease: Power3.easeOut, delay: 1.5 });
        t.from(logo01_dropShadow, 2, { autoAlpha: 0, ease: Power3.easeOut, delay: 1.5 });

        t.delayedCall(4, Frame02);
    };



    function Frame02() {


        t.to([bk1, logo01, logo01_dropShadow], .5, { autoAlpha: 0, ease: Power3.easeOut, delay: 0 });
        t.from([bk2, logo02, person01], 1, { autoAlpha: 0, delay: 0 });

        t.from(copy01, 1, { autoAlpha: 0, y: "+=20", ease: Power3.easeOut, delay: 1 });






        t.delayedCall(3, Frame03);





    }


    function Frame03() {

        
        t.from(bk3, 1, { autoAlpha: 0, delay: 0 });

        t.to(person01, 1, { autoAlpha: 0, ease: Power3.easeOut, delay: 0 });

        t.to(copy01, .5, { autoAlpha: 0, ease: Power3.easeOut, delay: .3 });
        t.to(bk2, .5, { x: "-=560", ease: Power3.easeOut, delay: .7 });
        t.from(productShot, 1, { x: "+=100", autoAlpha: 0, ease: Power3.easeOut, delay: 1 });
        t.from(productShot_dropShadow, 1, { autoAlpha: 0, ease: Power3.easeOut, delay: 1.2 });
        t.from(highlight, 2, { autoAlpha: 0,  ease: Power3.easeOut, delay: 1 });
        t.from(copy02, 1, { autoAlpha: 0, y: "+=20", ease: Power3.easeOut, delay: 1 });

        t.from([cta, ctaCopy_off], 1, { autoAlpha: 0, y: "+=10", ease: Power3.easeOut, delay: 1.5, onComplete: function() { rolloverActive = true } });




    }


    //rollover functions
    document.getElementById('hit').onmouseover =
        function(event) {
            {
                if (rolloverActive) {
                    // t.set(cta_whiteSlide, { x: -100 });
                    t.to(cta_Arrow, .5, { x: "+=30", ease: Power3.easeOut });
                    t.to(ctaCopy_off, .7, { autoAlpha: 0, ease: Power3.easeOut });
                    t.to(ctaCopy_over, .7, { autoAlpha: 1, ease: Power3.easeOut });
                    t.to(productShot, 1, { y: -5, ease: Power3.easeOut });
                    t.to(productShot_dropShadow, 1, { autoAlpha: .5, ease: Power3.easeOut });
                  
                }
            }
        };

    document.getElementById('hit').onmouseout =
        function(event) {
            {
                if (rolloverActive) {
                    t.set(cta_Arrow, { x: -100 });
                    t.to(cta_Arrow, .5, { x:0, ease: Power3.easeOut });
                    t.to(ctaCopy_off, .7, { autoAlpha: 1, ease: Power3.easeOut });
                    t.to(ctaCopy_over, .7, { autoAlpha: 0, ease: Power3.easeOut });
                    t.to(productShot, 1, { y: 0, ease: Power3.easeOut });
                    t.to(productShot_dropShadow, 1, { autoAlpha: 1, ease: Power3.easeOut });
               
                }
            }
        };



    bannerInit();





})();