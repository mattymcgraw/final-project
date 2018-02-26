TrelloPowerUp.initialize({
	'card-buttons': function(t, options){
		return [{
			icon: 'https://raw.githubusercontent.com/mattymcgraw/final-project/master/public/sanctum-sanctorum.png',
			text: 'Estimate Time',
    	}];
	},
	'board-buttons': function(t, options){
		return [{
			text: 'Final Project',
			url: 'https://trello.com/b/wD3Gigzp',
			target: 'Final Project'
	}];
	},
	'format-url': function (t, options) {
		// options.url has the url that we are being asked to format
		// in our response we can include an icon as well as the replacement text

		return {
			icon: GRAY_ICON, // don't use a colored icon here
			text: '👉 ' + options.url + ' 👈' 
		};

		// if we don't actually have any valuable information about the url
		// we can let Trello know like so:
		throw t.NotHandled();
	}
});