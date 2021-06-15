 // typing animation
(function($){
    "use strict"



    // navbar scrolling

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200){
            $ (".navbar").fadeIn("slow").css("display", "flex");
        }else{
            $(".navbar"),fadeOut("slow").css("display", "none");
        }
    })


    // typing effect
    if  ($(".typing").length == 1){
        var typed_strings = $(".typed-text").text();
        var typed = new Typed (".typing",{
            strings:typed_strings.split (","),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });



        // project filter

        var portfolioIsotope = $(".portfolio-container").isotope({itemSelector: ".portfolio-item", 
         layoutMode: "fitRows"});
        $("#portfolio-filters li").on("click", function(){
            $(this).addClass("active");
            portfolioIsotope.isotope({filter: $(this).data("filter")});

        });
// skills
        $(".skills").waypoint(function(){
            $(".progress .progress-bar").each(function (){
                $(this).css("width", $(this).attr("aria-valuenow") +"%");
            });
        },{offset: "80%"});

        }
    })(jQuery);


    
        
        
        
        
        
