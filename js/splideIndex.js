// document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide' );
//     splide.mount();
//   } );




var splide = new Splide( '.splide', {
  direction: 'rtl',
  perPage  : 3,
  breakpoints: {
		640: {
			perPage: 1,
		},
  },
  perMove: 1,
} );

splide.mount();