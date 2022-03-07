import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';
import styles from '../styles/Events.module.scss';
import { SRLWrapper } from 'simple-react-lightbox';

function PrivateDining() {
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

	return (
		<>
			<Navigation />
			<PageBanner />

			<div className={styles.container}>
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
					<div>
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
					<div className={styles.imgGallery}>
						{/* Top Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-1.jpg'
								alt='Private Dining Area'
								layout='fill'
								objectFit='cover'
								className={styles.item}
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-2.jpg'
								alt='Private Dining Menu'
								layout='fill'
								objectFit='cover'
								className={styles.item}
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-3.jpg'
								alt='Private Service'
								layout='fill'
								objectFit='cover'
								className={styles.item}
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-4.jpg'
								alt='Request for a Premium Wine'
								layout='fill'
								objectFit='cover'
								className={styles.item}
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
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-6.jpg'
								alt='Fancy Setup for Guests'
								layout='fill'
								objectFit='cover'
								className={styles.item}
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-7.jpg'
								alt='Private Dinner'
								layout='fill'
								objectFit='cover'
								className={styles.item}
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-8.jpg'
								alt='Private Dining at Felicità'
								layout='fill'
								objectFit='cover'
								className={styles.item}
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
