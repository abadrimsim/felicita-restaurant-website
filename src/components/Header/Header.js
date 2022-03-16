import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap, Power4 } from 'gsap';

import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

function Header() {
	// Access children
	let anim = useRef(null);
	let content = useRef(null);

	let tl = gsap.timeline({ delay: 0.5 });

	// GSAP animation
	useEffect(() => {
		// Header is hidden until every DOM element is loaded
		tl.to(anim, { duration: 0.1, css: { visibility: 'visible' } });

		// Text Animation
		tl.from(content.children, {
			y: 60,
			opacity: 0,
			duration: 1.2,
			ease: Power4.easeOut,
			stagger: 0.15,
		});
	}, [tl]);

	return (
		<div className={styles.header}>
			{/* Add Navigation bar */}
			<Navigation />

			{/* Hero text content */}
			<div className={styles.textContainer} ref={(e) => (content = e)}>
				<h1 className={styles.title}>It’s time to have a taste of Felicità</h1>
				<p className={styles.subtitle}>
					Serious food in a chilled-out setting, without pretence or the
					price-tag, offering guilt-free Italian dining.
				</p>
				<Link href='/contact' passHref>
					<button className={styles.btnTan} ref={(e) => (anim = e)}>
						Book Now
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
