	$(document).ready(function () {

		$('.minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});


		$('.control-btn--liked-btn').on('click', function () {
			$(this).toggleClass('favorites');
		});

		$('#choose').click(function () {
			$('.product-list .product input[type="checkbox"]').prop('checked', this.checked);
		})



		$('.select').each(function () {
			var firstItem = $(this).find('.select__option').first().attr('data-value');
			console.log(firstItem);
			$(this).find('.select__input').val(firstItem);
			$(this).find('.select__selected-option').text(firstItem);
		});


		$('.select__option').on('click', function () {
			var option = $(this).attr('data-value');
			$(this).parent().parent().find('.select__input').val(option);
			$(this).parent().parent().find('.select__selected-option').text(option);
		});

		$('.select').on('click', function () {
			$(this).find('.select__dropdown').toggleClass('show');
			$('.select').not(this).find('.select__dropdown').removeClass('show');
		});


		$(document).mouseup(function (e) {
			var div = $(".select");
			if (!div.is(e.target) &&
				div.has(e.target).length === 0) {
				$('.select__dropdown').removeClass('show');
			}
		});

		var swiper = new Swiper("#banner-home", {
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			}
		});

		var swiper = new Swiper("#bestsellers", {
			slidesPerView: 6,
			spaceBetween: 15,
			navigation: {
				nextEl: ".bestsellers-next",
				prevEl: ".bestsellers-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				400: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 2
				},
				640: {
					slidesPerView: 3
				},
				991: {
					slidesPerView: 4
				},
				1199: {
					slidesPerView: 6
				},

			}
		});

		var swiper = new Swiper("#new", {
			slidesPerView: 6,
			spaceBetween: 15,
			navigation: {
				nextEl: ".new-next",
				prevEl: ".new-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				400: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 2
				},
				640: {
					slidesPerView: 3
				},
				991: {
					slidesPerView: 4
				},
				1199: {
					slidesPerView: 6
				},

			}
		});

		var swiper = new Swiper("#view", {
			slidesPerView: 6,
			spaceBetween: 15,
			navigation: {
				nextEl: ".view-next",
				prevEl: ".view-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				400: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 2
				},
				640: {
					slidesPerView: 3
				},
				991: {
					slidesPerView: 4
				},
				1199: {
					slidesPerView: 6
				},

			}
		});


		var distance = ($(".container").offset().left + 20);

		$('.content-section--float-right .content-section__col-wrap').css('padding-left', distance)


	});


	$(document).ready(function () {

		(function ($) {
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

			$('.tab ul.tabs li a').click(function (g) {
				var tab = $(this).closest('.tab'),
					index = $(this).closest('li').index();

				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');

				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

				g.preventDefault();
			});
		})(jQuery);

	});