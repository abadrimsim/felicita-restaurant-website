import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Navigation.module.scss';

function Navigation() {
	return (
		<Navbar
			variant='dark'
			expand='md'
			fixed='top'
			className={styles.navContainer}
		>
			<Container fluid>
				<Navbar.Brand href='/' className={styles.brand}>
					::felicità
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll' className='justify-content-end'>
					<Nav navbarScroll>
						<Nav.Link href='/our-story' className={styles.navLink}>
							Our Story
						</Nav.Link>
						<Nav.Link href='/menu' className={styles.navLink}>
							Menu
						</Nav.Link>
						<Nav.Link href='/contact' className={styles.navLink}>
							Contact
						</Nav.Link>
						<Nav.Link href='/' className={styles.navLink}>
							Events
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
