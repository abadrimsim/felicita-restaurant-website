import '../styles/globals.scss';
import SimpleReactLightbox from 'simple-react-lightbox';
import { useState, useEffect } from 'react';
import CustomCursor from '../components/CustomCursor/CustomCursor';
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
