import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import SimpleReactLightbox from 'simple-react-lightbox';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import CustomCursor from '../components/CustomCursor/CustomCursor';
import Loader from '../components/Loader/Loader';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	const { asPath } = useRouter();
	const containerRef = useRef();

	useEffect(() => {
		setLoading(true);
		window.addEventListener('load', () => {
			setLoading(false);
		});
	}, []);

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				reloadOnContextChange: true,
				tablet: { smooth: false, breakpoint: 1280 },
				smartphone: { smooth: false },
			}}
			watch={[`router.asPath`]}
			location={asPath}
			onLocationChange={(scroll) =>
				scroll.scrollTo(0, { duration: 0, disableLerp: true })
			}
			containerRef={containerRef}
		>
			<div data-scroll-container ref={containerRef}>
				{!loading ? (
					<SimpleReactLightbox>
						<CustomCursor />
						<Component {...pageProps} />
					</SimpleReactLightbox>
				) : (
					<Loader />
				)}
			</div>
		</LocomotiveScrollProvider>
	);
}

export default MyApp;
