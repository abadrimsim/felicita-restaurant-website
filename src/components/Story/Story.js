import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

// Import SASS file
import styles from './Story.module.scss';

function Story() {
	// Refs
	let section = useRef(null);
	// gsap.registerPlugin(ScrollTrigger);

	// const { scroll } = useLocomotiveScroll();

	// let tl = gsap.timeline();

	// // GSAP animation
	// useEffect(() => {
	// 	if (!scroll) {
	// 		return;
	// 	}
	// 	const element = scroll?.el;
	// 	scroll.on('scroll', ScrollTrigger.update);

	// 	ScrollTrigger.scrollerProxy(element, {
	// 		scrollTop(value) {
	// 			return arguments.length
	// 				? scroll.scrollTo(value, 0, 0)
	// 				: scroll.scroll.instance.scroll.y;
	// 		},
	// 		getBoundingClientRect() {
	// 			return {
	// 				top: 0,
	// 				left: 0,
	// 				width: window.innerWidth,
	// 				height: window.innerHeight,
	// 			};
	// 		},
	// 		pinType: element.style.transform ? 'transform' : 'fixed',
	// 	});

	// 	// Section Animation
	// 	tl.from(element, {
	// 		scrollTrigger: {
	// 			trigger: section.children,
	// 			scroller: element,
	// 			start: 'top top',
	// 			end: '+=300', // end after scrolling 500px beyond the start
	// 			scrub: true,
	// 		},
	// 		y: 50,
	// 		opacity: 0,
	// 		duration: 1,
	// 		stagger: 0.5,
	// 	});

	// 	ScrollTrigger.addEventListener('refresh', () => scroll.update());
	// 	ScrollTrigger.refresh();

	// 	return () => {
	// 		ScrollTrigger.removeEventListener('refresh', () => scroll?.update());
	// 	};
	// }, [scroll, tl]);

	return (
		<section className={styles.container} ref={(e) => (section = e)}>
			<h2 className={styles.mainHeader}>
				A place where you’ll find well-cooked, honest, uncomplicated but
				imaginative food.
			</h2>
			<hr
				className={styles.divider}
				data-scroll
				data-scroll-speed='-2'
				data-scroll-direction='horizontal'
			/>
			<div className={styles.medContainer}>
				<Image
					src='/story.jpg'
					width={600}
					height={400}
					objectFit='contain'
					alt='Our Story Image'
					priority
					placeholder='blur'
					blurDataURL='/blur/story.jpg'
					className={styles.storyImg}
					data-scroll
					data-scroll-speed='2'
				/>

				<div className={styles.textContainer}>
					<h3>What makes us a delectable choice?</h3>
					<p>
						Felicità has built its reputation over the past 15 years. It is one
						of the city’s most iconic dining destinations. Consistently
						delivering excellent Italian food, an innovative wine list and
						faultless service, it’s no wonder. Our food tastes just like Nonna
						used to make! Join us for lunch, dinner and anytime in between.
					</p>
					<Link href='/our-story' passHref>
						<button className={styles.btnDark}>Learn More</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Story;
