document.addEventListener("DOMContentLoaded", function (event) {
	
	if (document.querySelector(".hamburger") != null) {
		document.querySelector(".hamburger").onclick = function () {
			myFunction();
		};

		var myFunction = function () {
			document.querySelector(".hamburger").classList.toggle("menu_opened");
			var menu = document.querySelector(".hamburger").nextElementSibling;

			menu.classList.toggle("show_menu");
			if (menu.classList.contains("menu")) {
				if (menu.style.display !== "none") {
					menu.style.display = "none";
				} else {
					menu.style.display = "block";
				}
			}
		};

		if (window.innerWidth < 999) {
			document.querySelector(".hamburger").nextElementSibling.style.display = "none";
		} else {
			document.querySelector(".hamburger").nextElementSibling.style.display = "block";
		}
	}
	// Google Map
	if (document.getElementsByClassName("map") != null) {

		var all_maps = document.getElementsByClassName("map");

		let maps = [].map.call(all_maps, (elem) => elem);
		
		maps.forEach((element, index) => {
			let map;
			let lat = Number(element.dataset.lat);
			let lang = Number(element.dataset.lang);

			const myLatLng = { lat: lat, lng: lang };

			const zoom = Number(element.dataset.zoom);

			const marker_img = element.dataset.marker;

			map = new window.google.maps.Map(element, {
				center: myLatLng,
				zoom: zoom,
			});

			new google.maps.Marker({
				position: myLatLng,
				map,
				icon: marker_img,
			});
		});
	}

	// Slider
	if (document.querySelector(".igb-slider") != null) {
		var igb__slider_attr = { type: 'carousel', perView: 1, hoverpause: false }
		if( document.querySelector(".igb-slider").dataset.autoplay == 'true' ){
			igb__slider_attr['autoplay'] = 8000;
		}
		var igbSlider = new Glide('.igb-slider', igb__slider_attr);
		igbSlider.mount();
	}

	if (document.querySelector(".igb-logo-slider") != null) {
		var logoselector = document.querySelector(".igb-logo-slider");
		var igb__logo_slider_attr = { hoverpause: false }
		if( logoselector.dataset.autoplay == 'true' ){
			igb__logo_slider_attr['autoplay'] = 8000;
		}
		var slidePerView = {};
		var xsperView = logoselector.dataset.xs;
		var smperView = logoselector.dataset.sm;
		var mdperView = logoselector.dataset.md;
		var lgperView = logoselector.dataset.lg;
		var xlperView = logoselector.dataset.xl;

		if( typeof xsperView != 'undefined' && typeof smperView == 'undefined' && typeof mdperView == 'undefined' && typeof lgperView == 'undefined' && typeof xlperView == 'undefined' ){
			igb__logo_slider_attr['perView'] = xsperView;
		}else if ( typeof xsperView != 'undefined' && typeof smperView != 'undefined' && typeof mdperView == 'undefined' && typeof lgperView == 'undefined' && typeof xlperView == 'undefined' ){
			igb__logo_slider_attr['perView'] = smperView;
			slidePerView[460] = { perView: xsperView }
		}else if ( typeof xsperView != 'undefined' && typeof smperView != 'undefined' && typeof mdperView != 'undefined' && typeof lgperView == 'undefined' && typeof xlperView == 'undefined' ){
			igb__logo_slider_attr['perView'] = mdperView;
			slidePerView[460] = { perView: xsperView };
			slidePerView[768] = { perView: smperView };
		}else if ( typeof xsperView != 'undefined' && typeof smperView != 'undefined' && typeof mdperView != 'undefined' && typeof lgperView != 'undefined' && typeof xlperView == 'undefined' ){
			igb__logo_slider_attr['perView'] = lgperView;
			slidePerView[460] = { perView: xsperView };
			slidePerView[768] = { perView: smperView };
			slidePerView[960] = { perView: mdperView };
		}else{
			igb__logo_slider_attr['perView'] = xlperView;
			slidePerView[460] = { perView: xsperView };
			slidePerView[768] = { perView: smperView };
			slidePerView[960] = { perView: mdperView };
			slidePerView[1200] = { perView: lgperView };
		}
		slidePerView[960] = { gap: 50 };
		igb__logo_slider_attr['breakpoints'] = slidePerView;
		igb__logo_slider_attr['startAt'] = 1;
		igb__logo_slider_attr['type'] = 'carousel';
		var igbLogoSlider = new Glide('.igb-logo-slider', igb__logo_slider_attr);
		igbLogoSlider.mount();
	}

});
