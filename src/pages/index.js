import Head from 'next/head';

// Import components
import Banner from '../components/Banner/Banner';
import Booking from '../components/Booking/Booking';
import Carousel from '../components/Carousel/Carousel';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Story from '../components/Story/Story';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Welcome to Felicità Ristorante</title>
				<meta
					name='description'
					content='Serious food in a chilled-out setting, without pretence or the
					price-tag, offering guilt-free Italian dining. Come and visit us today!'
				/>
				<link rel='icon' href='/felicita-logo.ico' />
			</Head>

			<main>
				<Header />
				<Story />
				<Carousel />
				<Booking />
				<Banner />
			</main>

			<Footer />
		</div>
	);
}
