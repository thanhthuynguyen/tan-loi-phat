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
// scroll menu
//<![CDATA[ 
$(window).load(function(){
$(document).ready(function () {
    $(document).on("scroll", onScroll);    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 50, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
		
		
		
		
		
		
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
});//]]>  