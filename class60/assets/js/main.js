(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".map").gmap3({
        	address: "Chapai Nawabganj z6814, Bangladesh",
        	zoom: 16,
        	mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	