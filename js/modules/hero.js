function Hero() {
	
	function heroJump() {
		$('.hero-cont').animate({
			bottom:'125px'
		}, 350, function () {
			$('.hero-cont').animate({
				bottom:0
			},350)
		})
	};
	this.createHero = function() {
		var hero_cont = $('<div></div>');
		hero_cont.addClass('hero-cont');
		hero_cont.appendTo('.game-container');
		$(window).keyup(function (e) {
			if(e.which == 32){
				heroJump();
			}
		});
	}

}