import Image from 'next/image';
import Link from 'next/link';
import styles from './Story.module.scss';

function Story() {
	return (
		<div className={styles.container}>
			<h2 className={styles.mainHeader}>
				A place where you’ll find well-cooked, honest, uncomplicated but
				imaginative food.
			</h2>
			<hr className={styles.divider} />
			<div className={styles.medContainer}>
				<Image
					src='/story.jpg'
					width={600}
					height={400}
					objectFit='contain'
					alt='Our Story Image'
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
