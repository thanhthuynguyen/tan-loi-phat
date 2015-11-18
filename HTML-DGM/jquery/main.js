$(document).ready(function(){
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	//logo_menu
	WidthBg();
	/*vertical_menu  */
	jQuery('.vertical_menu > ul li a').next('ul').hide();
	jQuery('.vertical_menu > ul li.active a').next('ul').show();
	jQuery('.vertical_menu > ul li a').click(function() {
	jQuery(this).toggleClass('active_menu');

		if(jQuery(this).next('ul').is(':visible'))
		{
			jQuery(this).next('ul').slideUp();  
			jQuery(this).removeClass('active_menu');
			jQuery(this).find("span.fa").addClass('fa-plus');
			jQuery(this).find("span.fa").removeClass('fa-minus');		
		}
		else{
			jQuery('.vertical_menu > ul li').find('a').removeClass('active_menu');
			jQuery(this).addClass('active_menu');
			jQuery('.vertical_menu > ul li a').next('ul').slideUp();
			jQuery(this).next('ul').slideToggle();
			jQuery(this).find("span.fa").removeClass('fa-plus');
			jQuery(this).find("span.fa").addClass('fa-minus');
		}
		
	});
			jQuery('.vertical_menu > ul li .active').find('ul:first').css('display','block');
			jQuery('.vertical_menu > ul li a.active').addClass('active_menu');
	/* vertical_menu */
	
	
});

//logo_menu
function WidthBg() {
	var w=$(window).width();
	if( w > 680)
		{
			var nav = $('#menu-center');
	
			$(window).scroll(function () {
				if ($(this).scrollTop() > 136) {
					nav.addClass("fix");
				} else {
					nav.removeClass("fix");
				}
			});
		}
		
}
