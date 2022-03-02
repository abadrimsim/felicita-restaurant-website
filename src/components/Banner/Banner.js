import Link from 'next/link';
import styles from './Banner.module.scss';

function Banner() {
	return (
		<div className={styles.banner}>
			<h2>Come and Celebrate With Us!</h2>
			<p>
				For a stunning event tailored to your every need, look no further than
				Felicità!
			</p>
			<Link href='/contact' passHref>
				<button className={styles.btnTan}>Book a Reservation</button>
			</Link>
		</div>
	);
}

export default Banner;
