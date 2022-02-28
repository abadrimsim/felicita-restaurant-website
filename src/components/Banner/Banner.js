import Image from 'next/image';
import styles from './Banner.module.scss';

function Banner() {
	return (
		<div className={styles.banner}>
			<h2>Come and Celebrate With Us!</h2>
			<p>
				For a stunning event tailored to your every need, look no further than
				Felicità!
			</p>
			<button className={styles.btnTan}>Book a Reservation</button>
		</div>
	);
}

export default Banner;
