(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".client-testimonial-carousel").owlCarousel({
        	item: 3,
        	margin: 30,
        	nav: false,
        	loop:true
        }) ;

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	