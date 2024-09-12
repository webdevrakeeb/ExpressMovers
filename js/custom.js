 
jQuery(document).ready(function(
	) {

		$(window).scroll(function () {
			if ($(window).scrollTop() > 505) {
			   $(".discount-tab-area").addClass('dis-tab-css-sa');
			} else {
			   $(".discount-tab-area").removeClass('dis-tab-css-sa');
			}
		 });
		

		jQuery(".leaders-items-sa").click(function(){
			jQuery(this).next().show();
		});
		jQuery(".navigation-sa p").click(function(){
			jQuery(".signle-profile-sa").hide();
		});

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 300);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

// Scroll to end
	$('.menu-btn').click(function(){
		$('.sidebar-menu').addClass('active');
		
	});

	$('.close-btn').click(function(){
		$('.sidebar-menu').removeClass('active');
	});

 //jquery for toggle sub menus
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });

 
// WOW JS
new WOW().init();



	




});