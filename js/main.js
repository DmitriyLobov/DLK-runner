


$(document).ready(function () {
	$('.start-game-btn').click(function () {
		var fiedl = new Fiedl();
		fiedl.createFiedl();
		$(this).hide();
		var main_menu = new MainMenu();
		main_menu.createMainMenu();
		
	})
	
});


