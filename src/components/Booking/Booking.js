import { useRef, useEffect } from 'react';
import Image from 'next/image';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import SASS file
import styles from './Booking.module.scss';

function Booking() {
	// Booking Events Array
	const bookEvents = [
		{
			title: 'Group Bookings at Felicità',
			desc: 'Perfect for your corporate dining or personal celebration from 12 to 50 guests. For groups of 12 up to a maximum of 50 guests, a three course menu, four dishes per course, derived from the current a la carte menu is applicable. The three course menu is priced from $130 per person. A $160 per person minimum spend is required for all group lunch or dinner bookings.',
			imgUrl: '/booking-group.jpg',
			blurUrl: '/blur/booking-group.jpg',
		},
		{
			title: 'Private Dining Experience',
			desc: 'Book an impressive private space with us this season. Whether a corporate group seeking privacy or a carefree lunch with friends and family, Felicità Private Dining is one of the most prized locations for a seated dinner or evening cocktail gathering. With your own highly skilled and personable waiter for the room, we can guarantee your function will be a memorable success.',
			imgUrl: '/booking-private.jpg',
			blurUrl: '/blur/booking-private.jpg',
		},
		{
			title: 'We Offer Exclusive Use',
			desc: 'From high profile celebrations to business lunches, Felicità caters for some of the country’s most exclusive private functions. With a spacious terrace that provides the most impressive backdrop for guests and has appealed to iconic brands, corporates, celebrities, media and magazines alike.',
			imgUrl: '/booking-exclusive.jpg',
			blurUrl: '/blur/booking-exclusive.jpg',
		},
	];

	// Refs
	let section = useRef(null);
	let groupSec = useRef(null);
	let privateSec = useRef(null);
	let exclusiveSec = useRef(null);

	// GSAP animation
	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.2 });

	useEffect(() => {
		const animObj = {
			y: 50,
			opacity: 0,
			duration: 1.5,
			stagger: 0.5,
		};
		// Section Animation
		tl.from(
			section.children,
			{
				scrollTrigger: {
					trigger: section.children,
					start: 'top bottom',
					end: '+=500', // end after scrolling 300px beyond the start
					scrub: 1,
				},
				y: 100,
				opacity: 0,
				duration: 1.5,
				stagger: 0.8,
			},
			0.2
		)
			.from(groupSec.children, {
				scrollTrigger: {
					trigger: groupSec.children,
					start: 'top bottom',
					end: '+=200',
					scrub: 1,
				},
				...animObj,
			})
			.from(privateSec.children, {
				scrollTrigger: {
					trigger: privateSec.children,
					start: 'top bottom',
					end: '+=200',
					scrub: 1,
				},
				...animObj,
			})
			.from(exclusiveSec.children, {
				scrollTrigger: {
					trigger: exclusiveSec.children,
					start: 'top bottom',
					end: '+=200',
					scrub: 1,
				},
				...animObj,
			});
	}, [tl]);

	return (
		<div className={styles.container} ref={(e) => (section = e)}>
			<div className={styles.mainHeader}>
				<h2>Looking for a place for your upcoming event?</h2>
				<hr className={styles.divider} />
			</div>
			<div className={styles.bookingCards} ref={(e) => (groupSec = e)}>
				<div className={styles.bookingDesc}>
					<h3>{bookEvents[0].title}</h3>
					<p>{bookEvents[0].desc}</p>
				</div>
				<Image
					src={bookEvents[0].imgUrl}
					width={600}
					height={500}
					objectFit='contain'
					alt={bookEvents[0].title}
					placeholder='blur'
					blurDataURL={bookEvents[0].blurUrl}
					className={styles.bookingImg}
				/>
			</div>

			<div className={styles.bookingCardsLeft} ref={(e) => (privateSec = e)}>
				<Image
					src={bookEvents[1].imgUrl}
					width={600}
					height={500}
					objectFit='contain'
					alt={bookEvents[1].title}
					placeholder='blur'
					blurDataURL={bookEvents[1].blurUrl}
					className={styles.bookingImg}
				/>
				<div className={styles.bookingDesc}>
					<h3>{bookEvents[1].title}</h3>
					<p>{bookEvents[1].desc}</p>
				</div>
			</div>

			<div className={styles.bookingCards} ref={(e) => (exclusiveSec = e)}>
				<div className={styles.bookingDesc}>
					<h3>{bookEvents[2].title}</h3>
					<p>{bookEvents[2].desc}</p>
				</div>

				<Image
					src={bookEvents[2].imgUrl}
					width={600}
					height={500}
					objectFit='contain'
					alt={bookEvents[2].title}
					placeholder='blur'
					blurDataURL={bookEvents[2].blurUrl}
					className={styles.bookingImg}
				/>
			</div>
		</div>
	);
}

export default Booking;
