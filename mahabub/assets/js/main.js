(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".menu-area").sticky();
        $(window).scroll(function(){
        	if ($(this).scrollTop()>200) {
        		$('.scrollup').fadeIn();
        	}
        	else{
        		$('.scrollup').fadeOut();
        	}
        });
        $('.scrollup').click(function(){
        	$("html,body").animate({
        		scrollTop:0
        	},600);
        	return false;
        });

        var footerHeight = $(".footer-area").height();
        $(".site-main").css('margin-bottom',footerHeight+'px');


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	