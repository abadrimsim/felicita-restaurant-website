import Head from 'next/head';
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
				<meta name='description' content='Come and visit Felicità Ristorante' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header />
				<Story />
				<Carousel />
				<Booking />
				<Banner />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}
