import { useRef, useEffect } from 'react';
import Link from 'next/link';

// Import GSAP
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import SASS file
import styles from './Banner.module.scss';

function Banner() {
	// Refs
	let section = useRef(null);
	let sectionContent = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.from(section.children, {
			scrollTrigger: {
				trigger: section.children,
				start: 'top center',
				end: '+=100', // end after scrolling 300px beyond the start
				scrub: 1,
			},
			y: 50,
			opacity: 0,
			duration: 1.5,
			stagger: 0.5,
		});
	}, [tl]);

	return (
		<div className={styles.banner} ref={(e) => (section = e)}>
			<h2>Come and Celebrate With Us!</h2>
			<p>
				For a stunning event tailored to your every need, look no further than
				Felicità!
			</p>
			<Link href='/contact' passHref>
				<button className={styles.btnTan}>Book a Reservation</button>
			</Link>
		</div>
	);
}

export default Banner;
