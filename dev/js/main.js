'use strict';

(function() {

	$(document).on('ready', function() {
		$(document).foundation();

		$('.dot-nav li').on('click', function() {
			$('.dot-nav li').removeClass('current');
			$(this).addClass('current');
		})
	});
	
})();
