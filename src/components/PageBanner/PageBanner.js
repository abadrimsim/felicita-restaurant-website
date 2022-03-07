import styles from './PageBanner.module.scss';

import React from 'react';
import Image from 'next/image';

function PageBanner() {
	return (
		<div className={styles.bannerContainer}>
			{/* <Image
				src='/page-banner.jpg'
				width={600}
				height={900}
				objectFit='contain'
				alt='Page Banner Image'
				className={styles.bannerImg}
			/> */}
			<h1>Felicità, your happiness is our happiness</h1>
		</div>
	);
}

export default PageBanner;
