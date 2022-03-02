import { Navbar, Nav, Container } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';
import Link from 'next/link';

function Header() {
	return (
		<div className={styles.header}>
			<Navigation />
			<div className={styles.textContainer}>
				<h1 className={styles.title}>It’s time to have a taste of Felicità</h1>
				<p className={styles.subtitle}>
					Serious food in a chilled-out setting, without pretence or the
					price-tag, offering guilt-free Italian dining.
				</p>
				<Link href='/contact' passHref>
					<button className={styles.btnTan}>Book Now</button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
