import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function generalSlider() {
	const checkElement = document.querySelector('.general-content__slider')
	if (checkElement) {
		const swiper = new Swiper(checkElement, {
			modules: [Navigation, Pagination],
			navigation: {
				nextEl: ".general-content__button.swiper-button-next",
				prevEl: ".general-content__button.swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.04,
					spaceBetween: 6,
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				}
			},
		})
	}
}