import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';
import styles from '../styles/Events.module.scss';
import { SRLWrapper } from 'simple-react-lightbox';

function GroupDining() {
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
					<h2>Group Dining</h2>
					<hr className={styles.divider} />
					<div>
						<h3>Restaurant Dining - Lunch & Dinner</h3>
						<p>
							For groups of 12 up to a maximum of 50 guests, a three course menu
							derived from the current a la carte menu is applicable. The three
							course menu is priced at $130 per person, with 4 dishes per course
							to select on the day. A minimum food and beverage spend of $160
							per person is applicable to all group bookings in the main dining
							area. All dietary requirements can be catered for.
						</p>
					</div>
					<div>
						<h3>Inside Dining - Window Tables</h3>
						<p>
							Tables are allocated by date of reservation. Your request will be
							noted, howver is not guaranteed.
						</p>
					</div>
					<div>
						<h3>Outside Dining</h3>
						<p>
							The outdoor terrace is covered by a heavy awning for protection,
							with heaters and knee rugs available for additional warmth. This
							is a weather permitting area, which means that in the event of
							extremely bad weather we are unable to guarantee a backup table
							inside. In the instance where a table in the main dining area is
							not available, you will be seated at a table in our coctail
							lounge.
						</p>
					</div>
				</div>

				{/* Image Gallery */}
				<SRLWrapper options={options}>
					<div className={styles.imgGallery}>
						{/* Top Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-1.jpg'
								alt='Dining Table Setup'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-1.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-2.jpg'
								alt='Spaghetti Pomodoro'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-2.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-3.jpg'
								alt='Dining Table Setup'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-3.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-4.jpg'
								alt='Group Dining'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-4.jpg'
							/>
						</div>

						{/* Bottom Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-5.jpg'
								alt='Company Dinner Setup'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-5.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-6.jpg'
								alt='Company Lunch Setup'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-6.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-7.jpg'
								alt='Risotto Gamberi'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-7.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-group-8.jpg'
								alt='Group Dining at Felicità'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-group-8.jpg'
							/>
						</div>
					</div>
				</SRLWrapper>
			</div>

			<Footer />
		</>
	);
}

export default GroupDining;
