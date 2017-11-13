$(function() {

	// close an open collapsed navbar when clicking outside of the navbar element
	// https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen
	$(document).click(function(event) {
		var clickover = $(event.target);
		var opened = $('.navbar-collapse').hasClass('show');
		if (opened === true && !clickover.hasClass('navbar-toggler')) {
			$('button.navbar-toggler').click();
		}
	});

});