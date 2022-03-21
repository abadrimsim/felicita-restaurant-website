import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

// Import GSAP
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import components
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import PageBanner from '../../components/PageBanner/PageBanner';

// Import SASS file
import styles from '../../styles/Events.module.scss';

function PrivateDining() {
	// Lightbox Styling
	const options = {
		buttons: {
			backgroundColor: 'rgba(17, 17, 17, 0)',
			iconColor: '#d8b57d',
		},
		caption: {
			captionColor: '#d8b57d',
			captionFontFamily: 'Raleway, sans-serif',
			captionFontWeight: '300',
		},
		thumbnails: {
			showThumbnails: false,
		},
	};

	// Refs
	let section = useRef(null);
	let sectionEvents = useRef(null);
	let gallery = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.2 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.from(
			section,
			{
				y: 100,
				opacity: 0,
				duration: 1.5,

				ease: Power4.easeOut,
			},
			0.5
		)
			.from(
				sectionEvents,
				{
					scrollTrigger: {
						trigger: sectionEvents,
						start: 'top bottom',
						end: '+=200',
						scrub: 1,
					},
					y: 100,
					opacity: 0,
					duration: 1.5,
					delay: 0.5,
					ease: Power4.easeOut,
				},
				0.5
			)
			.from(
				gallery,
				{
					scrollTrigger: {
						trigger: gallery,
						start: 'top bottom',
						end: '+=200',
						scrub: 1,
					},
					y: 100,
					opacity: 0,
					duration: 1.5,
					delay: 0.5,
					ease: Power4.easeOut,
				},
				0.5
			);
	}, [tl]);

	return (
		<>
			<Navigation />
			<PageBanner />

			<div className={styles.container} ref={(e) => (section = e)}>
				{/* Text Container */}
				<div className={styles.pageText}>
					<h2>Private Dining</h2>
					<hr className={styles.divider} />
					<div>
						<h3>Lunch & Dinner</h3>
						<p>
							Located at the north eastern end of the restaurant, it boasts
							spectacular views from your own private room and slice of the
							terrace. The space can accommodate up to 16 guests for a seated
							event.
						</p>
						<p>
							For groups of 12 to 16 guests, a three course menu derived from
							the current a la carte meni is applicable. The three course menu
							priced at $130 per person, with 4 dishes per course to select from
							on the day. Beverages are charged on consumption and a 10% service
							charge applies on the total amount.
						</p>
					</div>
					<div ref={(e) => (sectionEvents = e)}>
						<h3>Cocktail Events</h3>
						<p>
							The Private Dining Room and terrace can be offered for a cocktail
							reception in two differnt configurations:
						</p>
						<p>
							<span>•</span>
							The Private Dining Room and small section of the terrace can
							accommodate up to a maximum of 30 guests.
						</p>
						<p>
							<span>•</span>
							The Private Dining Room and terrace to the glass balustrade edge
							can accommodate up to a maximum of 60guests.
						</p>
						<p>
							Please note that the area is sectioned off from the remainder of
							the terrace and is not exclusively private as there would be other
							guests seated on the terrace at the same time. A large portion of
							this area is weather permitting also.
						</p>
						<p>
							Our extensive canape menu is based on the best seasonal produce at
							any given time.
						</p>
					</div>
				</div>

				{/* Image Gallery */}
				<SRLWrapper options={options}>
					<div className={styles.imgGallery} ref={(e) => (gallery = e)}>
						{/* Top Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-1.jpg'
								alt='Private Dining Area'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-1.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-2.jpg'
								alt='Private Dining Menu'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-2.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-3.jpg'
								alt='Private Service'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-3.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-4.jpg'
								alt='Request for a Premium Wine'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-4.jpg'
							/>
						</div>

						{/* Bottom Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-5.jpg'
								alt='Host Cocktail Events'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-5.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-6.jpg'
								alt='Fancy Setup for Guests'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-6.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-7.jpg'
								alt='Private Dinner'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-7.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-8.jpg'
								alt='Private Dining at Felicità'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-8.jpg'
							/>
						</div>
					</div>
				</SRLWrapper>
			</div>

			<Footer />
		</>
	);
}

export default PrivateDining;
