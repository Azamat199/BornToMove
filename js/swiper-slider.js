new Swiper('.reviews__swiper', {
	// Стрелки
	navigation: {
		nextEl: '.reviews__arrow-next',
		prevEl: '.reviews__arrow-prev'
	},

	keyboard: {
		enabled: true,
	},
	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 0,

	// Автовысота 
	autoHeight: true,

	// Курсор перетаскивания
	grabCursor: true,

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		920: {
			slidesPerView: 3,
		},
	},
});

new Swiper('.companions__swiper', {
	
	// Бесконечный слайдер
	// loop: true,

	// Скорость
	speed: 700,

	// Количество слайдов для показа
	slidesPerView: 6,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		400: {
			slidesPerView: 2,
		},
		550: {
			slidesPerView: 3,
		},
		700: {
			slidesPerView: 4,
		},
		850: {
			slidesPerView: 5,
		},
		1050: {
			slidesPerView: 6,
		},
	},

});