import { useRef, useEffect } from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './Carousel.module.scss';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

function Carousel() {
	// Testimonial Array
	const testimonials = [
		{
			name: 'Arnold Samuels',
			quote:
				'“The attention to detail of the staff made the whole experience very special.”',
			imgUrl: '/testimonial-a.jpg',
			blurUrl: '/blur/testimonial-a.jpg',
		},
		{
			name: 'Samantha Hobbs',
			quote:
				'“Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time.”',
			imgUrl: '/testimonial-b.jpg',
			blurUrl: '/blur/testimonial-b.jpg',
		},
		{
			name: 'Cathy Smith',
			quote:
				'“We miss our Nonna’s cooking. Thank you Felicità for helping us celebrate Dad’s 90th birthday last night.”',
			imgUrl: '/testimonial-c.jpg',
			blurUrl: '/blur/testimonial-c.jpg',
		},
	];
	// Create custom arrows for react-slick
	const PrevArrow = ({ style, onClick }) => (
		<div className='slick-arrow' style={{ ...style }} onClick={onClick}>
			<FiChevronLeft />
		</div>
	);

	const NextArrow = ({ style, onClick }) => (
		<div className='slick-arrow' style={{ ...style }} onClick={onClick}>
			<FiChevronRight />
		</div>
	);

	// Slider config
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};

	// Refs
	let section = useRef(null);

	// gsap.registerPlugin(ScrollTrigger);
	// let tl = gsap.timeline();

	// // GSAP animation
	// useEffect(() => {
	// 	// Section Animation
	// 	tl.from(section.children, {
	// 		scrollTrigger: {
	// 			trigger: section.children,
	// 			start: 'top 80%',
	// 			end: '+=500',
	// 			scrub: 1,
	// 		},
	// 		y: 100,
	// 		opacity: 0,
	// 		duration: 1.5,
	// 		stagger: 0.5,
	// 	});
	// }, [tl]);

	return (
		// Container for testimonial slider
		<div className={styles.container} ref={(e) => (section = e)}>
			<Slider {...settings} className={styles.carouselContainer}>
				{/* Loop over testimonials array */}
				{testimonials.map(({ name, quote, imgUrl, blurUrl }, index) => (
					<div className={styles.content} key={index}>
						<div className={styles.testimonial}>
							<h2 className={styles.mainHeader}>{quote}</h2>

							<span
								data-scroll
								data-scroll-speed='2'
								data-scroll-direction='horizontal'
							>
								<hr />
								<p>{name}</p>
							</span>
						</div>
						<div className={styles.carouselImg}>
							<Image
								src={imgUrl}
								width={600}
								height={950}
								objectFit='contain'
								alt={name}
								placeholder='blur'
								blurDataURL={blurUrl}
								data-scroll
								data-scroll-speed='2'
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Carousel;
