import { useRef, useEffect } from 'react';
import Link from 'next/link';

// Import components
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';

// Import GSAP
import { gsap } from 'gsap';

// Import SASS file
import styles from '../styles/PageNotFound.module.scss';

function PageNotFound() {
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
				<h2>Oops! This page is not available.</h2>
				<p>Sorry but we couldn&#39;t find what you&#39;re looking for.</p>
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

export default PageNotFound;
