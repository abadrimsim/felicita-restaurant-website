import '../styles/globals.scss';
import SimpleReactLightbox from 'simple-react-lightbox';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SimpleReactLightbox>
				<Component {...pageProps} />
			</SimpleReactLightbox>
		</>
	);
}

export default MyApp;
