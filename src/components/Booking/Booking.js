import { useRef, useEffect } from 'react';
import Image from 'next/image';

// Import GSAP
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

import styles from './Booking.module.scss';

function Booking() {
	// Refs
	let section = useRef(null);
	let groupSec = useRef(null);
	let privateSec = useRef(null);
	let exclusiveSec = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
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
					start: 'top center',
					end: '+=300', // end after scrolling 300px beyond the start
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
					start: 'top center',
					end: '+=150',
					scrub: 1,
				},
				...animObj,
			})
			.from(privateSec.children, {
				scrollTrigger: {
					trigger: privateSec.children,
					start: 'top center',
					end: '+=150',
					scrub: 1,
				},
				...animObj,
			})
			.from(exclusiveSec.children, {
				scrollTrigger: {
					trigger: exclusiveSec.children,
					start: 'top center',
					end: '+=150',
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
					<h3>Group Bookings at Felicità</h3>
					<p>
						Perfect for your corporate dining or personal celebration from 12 to
						50 guests. For groups of 12 up to a maximum of 50 guests, a three
						course menu, four dishes per course, derived from the current a la
						carte menu is applicable. The three course menu is priced from $130
						per person. A $160 per person minimum spend is required for all
						group lunch or dinner bookings.
					</p>
				</div>
				<Image
					src='/booking-group.jpg'
					width={600}
					height={500}
					objectFit='contain'
					alt='Group Bookings at Felicita'
					placeholder='blur'
					blurDataURL='/blur/booking-group.jpg'
					className={styles.bookingImg}
				/>
			</div>

			<div className={styles.bookingCardsLeft} ref={(e) => (privateSec = e)}>
				<Image
					src='/booking-private.jpg'
					width={600}
					height={500}
					objectFit='contain'
					alt='Private Dining Experience'
					placeholder='blur'
					blurDataURL='/blur/booking-private.jpg'
					className={styles.bookingImg}
				/>
				<div className={styles.bookingDesc}>
					<h3>Private Dining Experience</h3>
					<p>
						Book an impressive private space with us this season. Whether a
						corporate group seeking privacy or a carefree lunch with friends and
						family, Felicità Private Dining is one of the most prized locations
						for a seated dinner or evening cocktail gathering. With your own
						highly skilled and personable waiter for the room, we can guarantee
						your function will be a memorable success.
					</p>
				</div>
			</div>

			<div className={styles.bookingCards} ref={(e) => (exclusiveSec = e)}>
				<div className={styles.bookingDesc}>
					<h3>We Offer Exclusive Use</h3>
					<p>
						From high profile celebrations to business lunches, Felicità caters
						for some of the country’s most exclusive private functions. With a
						spacious terrace that provides the most impressive backdrop for
						guests and has appealed to iconic brands, corporates, celebrities,
						media and magazines alike.
					</p>
				</div>
				<Image
					src='/booking-exclusive.jpg'
					width={600}
					height={500}
					objectFit='contain'
					alt='Group Bookings at Felicita'
					placeholder='blur'
					blurDataURL='/blur/booking-exclusive.jpg'
					className={styles.bookingImg}
				/>
			</div>
		</div>
	);
}

export default Booking;
