import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.scss';

function Header() {
	return (
		<div className={styles.header}>
			<Navbar
				variant='dark'
				expand='md'
				fixed='top'
				className={styles.navContainer}
			>
				<Container fluid>
					<Navbar.Brand href='#' className={styles.brand}>
						::felicita
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll' className='justify-content-end'>
						<Nav navbarScroll>
							<Nav.Link href='#' className={styles.navLink}>
								Our Story
							</Nav.Link>
							<Nav.Link href='#' className={styles.navLink}>
								Menu
							</Nav.Link>
							<Nav.Link href='#' className={styles.navLink}>
								Contact
							</Nav.Link>
							<Nav.Link href='#' className={styles.navLink}>
								Events
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
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
