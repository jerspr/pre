var obj = {
	init: function(){
		obj.slider();
		obj.activeScrollTop();
		obj.topFunction();
	},
	slider: function(){
		$('.fade-sider').slick({
		  	dots: true,
		  	infinite: true,
		  	speed: 500,
		  	fade: true,
		  	cssEase: 'linear'
		});
	},
	activeScrollTop: function(){
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		        document.getElementById("btn-d").style.display = "block";
		    } else {
		        document.getElementById("btn-d").style.display = "none";
		    }
		}
	},
	topFunction: function(){
		$(".btn-d").click(function(e){
			e.preventDefault();
			$("html, body").animate({scrollTop: 0}, 400);
		});
	}
}

$(document).ready(function(){
	obj.init();
});