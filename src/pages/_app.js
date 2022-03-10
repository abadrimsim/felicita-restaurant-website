import '../styles/globals.scss';
import SimpleReactLightbox from 'simple-react-lightbox';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		window.addEventListener('load', () => {
			setLoading(false);
		});
	}, []);

	return (
		<>
			{!loading ? (
				<SimpleReactLightbox>
					<Component {...pageProps} />
				</SimpleReactLightbox>
			) : (
				<Loader />
			)}
		</>
	);
}

export default MyApp;
