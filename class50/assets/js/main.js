(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

         $(".listing-carousel-wrapper").owlCarousel({
        	items: 3,
        	loop: true,
        	nav: false,
        	autoplay: true,
        	dots: true,
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	