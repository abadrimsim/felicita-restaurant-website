import Link from 'next/link';
import { useRef, useEffect } from 'react';

// Import components
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';

// Import GSAP
import { gsap } from 'gsap';

// Import SASS file
import styles from '../styles/ThankYou.module.scss';

function ThankYou() {
	// Refs
	let section = useRef(null);
	let anim = useRef(null);

	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.to(anim, { duration: 0.1, css: { visibility: 'visible' } });

		tl.from(section.children, {
			y: 80,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
		});
	}, [tl]);

	return (
		<>
			<Navigation />
			<PageBanner />
			<div className={styles.container} ref={(e) => (section = e)}>
				<h2>Thanks for reaching out!</h2>
				<p>
					We got your message. We&#39;ll be in touch with you shortly. Have a
					great day!
				</p>
				<Link href='/' passHref>
					<button className={styles.btnDark} ref={(e) => (anim = e)}>
						Back to Home
					</button>
				</Link>
			</div>
			<Footer />
		</>
	);
}

export default ThankYou;
