function MainMenu() {
	
	function createList(parent){
		a_names = ['New Game', 'Options','Exit'];
		a_class_names = ["new-game-link","options-link","exit-game-link"];
		var list = $('<ul/>');
		$.each(a_names, function(i)
		{
		    var li = $('<li/>').appendTo(list);
		    var aaa = $('<a/>')
		        .addClass(a_class_names[i])
		        .text(a_names[i])
		        .attr('href', '#')
		        .appendTo(li);
		});

		list.appendTo(parent);

	}


		
		


	this.createMainMenu = function(){
		var main_menu = $('<div></div>');
		main_menu.addClass('main-menu');
		$('.game-container').append(main_menu);
		createList(main_menu);
		$('.new-game-link').click(function() {
		$('.main-menu').hide();
		$('<p>Game is started!</p>').appendTo('.game-container');
		var hero = new Hero();
		hero.createHero();

	})


	}


}