function Hero() {
	
	function heroJump() {
		$('.hero-cont').animate({
			bottom:'100px'
		}, 300, function () {
			$('.hero-cont').animate({
				bottom:0
			},300)
		})
	};
	this.createHero = function() {
		var hero_cont = $('<div></div>');
		hero_cont.addClass('hero-cont');
		hero_cont.appendTo('.game-container');
		$(window).keypress(function (e) {
			if(e.which == 32){
				heroJump();
			}
		});
	}

}