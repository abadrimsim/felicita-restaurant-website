import Image from 'next/image';
import styles from './Carousel.module.scss';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Carousel() {
	// Create custom arrows for react-slick
	const PrevArrow = ({ style, onClick }) => (
		<div className='slick-arrow' style={{ ...style }} onClick={onClick}>
			<FiChevronLeft />
		</div>
	);

	const NextArrow = ({ style, onClick }) => (
		<div className='slick-arrow' style={{ ...style }} onClick={onClick}>
			<FiChevronRight />
		</div>
	);

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		// Container for testimonial slider
		<div className={styles.container}>
			<Slider {...settings} className={styles.carouselContainer}>
				<div className={styles.content}>
					<div className={styles.testimonial}>
						<h2 className={styles.mainHeader}>
							“The attention to detail of the staff made the whole experience
							very special.”
						</h2>

						<span>
							<hr />
							<p>Arnold Samuels</p>
						</span>
					</div>
					<div className={styles.carouselImg}>
						<Image
							src='/testimonial-a.jpg'
							width={600}
							height={950}
							objectFit='contain'
							alt='Customer Testimonial A'
						/>
					</div>
				</div>

				<div className={styles.content}>
					<div className={styles.testimonial}>
						<h2 className={styles.mainHeader}>
							“Thank you for dinner last night. It was amazing!! I have to say
							it’s the best meal I have had in quite some time.”
						</h2>

						<span>
							<hr />
							<p>Samantha Hobbs</p>
						</span>
					</div>
					<div className={styles.carouselImg}>
						<Image
							src='/testimonial-b.jpg'
							width={600}
							height={950}
							objectFit='contain'
							alt='Customer Testimonial A'
						/>
					</div>
				</div>

				<div className={styles.content}>
					<div className={styles.testimonial}>
						<h2 className={styles.mainHeader}>
							“We miss our Nonna’s cooking. Thank you Felicità for helping us
							celebrate Dad’s 90th birthday last night.”
						</h2>

						<span>
							<hr />
							<p>Cathy Smith</p>
						</span>
					</div>
					<div className={styles.carouselImg}>
						<Image
							src='/testimonial-c.jpg'
							width={600}
							height={950}
							objectFit='contain'
							alt='Customer Testimonial A'
						/>
					</div>
				</div>
			</Slider>
		</div>
	);
}

export default Carousel;
