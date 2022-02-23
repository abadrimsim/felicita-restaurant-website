import Image from 'next/image';
import styles from './Carousel.module.scss';

function Carousel() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.testimonial}>
					<h2 className={styles.mainHeader}>
						“The attention to detail of the staff made the whole experience very
						special.”
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
		</div>
	);
}

export default Carousel;
