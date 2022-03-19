import { useState, useEffect } from 'react';

import SimpleReactLightbox from 'simple-react-lightbox';

import CustomCursor from '../components/CustomCursor/CustomCursor';
import Loader from '../components/Loader/Loader';

import '../styles/globals.scss';

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
					<CustomCursor />
					<Component {...pageProps} />
				</SimpleReactLightbox>
			) : (
				<Loader />
			)}
		</>
	);
}

export default MyApp;
