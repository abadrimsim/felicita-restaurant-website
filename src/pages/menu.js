import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';
import styles from '../styles/Menu.module.scss';

function Menu() {
	return (
		<div>
			<Navigation />
			<PageBanner />
			<div className={styles.pageContent}>
				<h2>Our Menu</h2>
				<hr className={styles.divider} />
			</div>
			<Footer />
		</div>
	);
}

export default Menu;
