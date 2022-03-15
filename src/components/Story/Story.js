import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import GSAP
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import SASS file
import styles from './Story.module.scss';

function Story() {
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
				end: '+=300', // end after scrolling 300px beyond the start
				scrub: 1,
			},
			y: 100,
			opacity: 0,
			duration: 1.5,
			stagger: 0.5,
		}).from(sectionContent.children, {
			y: 100,
			opacity: 0,
			duration: 1.2,
			ease: Power4.easeOut,
			stagger: 0.5,
		});
	}, [tl]);

	return (
		<div className={styles.container} ref={(e) => (section = e)}>
			<h2 className={styles.mainHeader}>
				A place where you’ll find well-cooked, honest, uncomplicated but
				imaginative food.
			</h2>
			<hr className={styles.divider} />
			<div className={styles.medContainer} ref={(e) => (sectionContent = e)}>
				<Image
					src='/story.jpg'
					width={600}
					height={400}
					objectFit='contain'
					alt='Our Story Image'
					priority
					placeholder='blur'
					blurDataURL='/blur/story.jpg'
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
		</div>
	);
}

export default Story;
