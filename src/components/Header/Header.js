import { Navbar, Nav, Container } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

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
				<button className={styles.btnTan}>Book Now</button>
			</div>
		</div>
	);
}

export default Header;
