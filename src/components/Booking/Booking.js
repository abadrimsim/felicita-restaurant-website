import Image from 'next/image';
import styles from './Booking.module.scss';

function Booking() {
	return (
		<div className={styles.container}>
			<div className={styles.mainHeader}>
				<h2>Looking for a place for your upcoming event?</h2>
				<hr className={styles.divider} />
			</div>
			<div className={styles.bookingCards}>
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
				/>
			</div>

			<div className={styles.bookingCards}>
				<Image
					src='/booking-private.jpg'
					width={600}
					height={500}
					objectFit='contain'
					alt='Private Dining Experience'
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

			<div className={styles.bookingCards}>
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
				/>
			</div>
		</div>
	);
}

export default Booking;
