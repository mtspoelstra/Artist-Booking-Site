/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Search (header).
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});

})(jQuery);

document.querySelector(".check-avail").addEventListener("click", message)
document.querySelector(".continue-btn").addEventListener("click", extendBio)



function message(){

	let dateInput = document.querySelector(".input-date").value
	let timeInput = (document.querySelector(".input-time").value)
	let time = timeInput.substring(0,2)

	if(dateInput === "" || timeInput === ""){
		document.querySelector(".avail-message").innerHTML = "Please enter a time and date"
	}else if (time > 11 && time < 23) {
		document.querySelector(".avail-message").innerHTML = "Daniel is Available!"
	}else{
		document.querySelector(".avail-message").innerHTML = "Daniel is not available. Please find another time!"
	}
	
	console.log(dateInput)
	console.log(time)
}

function extendBio(){
	document.querySelector(".additional-bio").classList.toggle("hidden")
	
	if(document.querySelector(".additional-bio").classList.contains("hidden")){
		document.querySelector(".continue-btn").innerHTML = "Continue Reading"
	}else{
		document.querySelector(".continue-btn").innerHTML = "View Less"
	}
	
}
