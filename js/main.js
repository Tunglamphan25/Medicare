$(function() {
	//**======== 1, Responsive Menu ============== *//
	var toggleMenu = document.querySelector('.header__info-button');
	var topNav = document.querySelector('.mobile-menu');
	var topClose = document.querySelector('.close-btn');
	var topBackDrop = document.querySelector('.menu-backdrop');
	var topOverlay = document.querySelector('.menu-backdrop');
	toggleMenu.addEventListener('click', function() {
		topNav.classList.add('active');
		topBackDrop.classList.add('backdrop');
	});
	topClose.addEventListener('click', function() {
		topNav.classList.remove('active');
		topBackDrop.classList.remove('backdrop');
	});
	topOverlay.addEventListener('click', function() {
		topNav.classList.remove('active');
		topBackDrop.classList.remove('backdrop');
	});
	var itemSubMenu = Array.from(document.querySelectorAll('.box-item'));
	console.log(itemSubMenu);
	itemSubMenu.forEach(function(btn) {
		btn.onclick = function() {
			btn.lastElementChild.classList.toggle('showSub');
		};
	});
	//**======== 2, Sticky Menu ============== *//
	window.onscroll = function() {
		scrollFunction();
	};
	function scrollFunction() {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			document.querySelector('.header').classList.add('record');
		}
		else {
			document.querySelector('.header').classList.remove('record');
		}
	}

	// text
	if ($('.variable-text').length) {
		$('.variable-text').typeIt({
			strings    : ['Medcare'],
			speed      : 650,
			breakLines : true,
			loop       : true,
			autoStart  : true
		});
	}
	// Back to top
	var btn = $('.backtotop');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		}
		else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});
	// Loader
	$(window).on('load', function(event) {
		$('.preloader').delay(900).fadeOut(500);
	});
	// Number auto run
	const counters = document.querySelectorAll('.counters');
	console.log(counters);
	const speed = 100;

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;

			const inc = target / speed;
			if (count < target) {
				counter.innerText = Math.ceil(count + inc);
				setTimeout(updateCount, 100);
			}
			else {
				counter.innerText = target;
			}
		};

		updateCount();
	});

	// Menu Active
	var cururl = window.location.pathname;
	var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
	var hash = window.location.hash.substr(1);

	if ((curpage == '' || curpage == '/' || curpage == 'admin') && hash == '') {
		//$("nav .navbar-nav > li:first-child").addClass("active");
	}
	else {
		$('.header__info-menu li').each(function() {
			$(this).removeClass('active');
		});
		if (hash != '') $(".header__info-menu li a[href*='" + hash + "']").parents('li').addClass('active');
		else $(".header__info-menu li a[href*='" + curpage + "']").parents('li').addClass('active');
	}
});
