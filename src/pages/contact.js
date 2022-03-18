import Image from 'next/image';
import { useRef, useEffect } from 'react';

// Import components
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';

// Import GSAP
import { gsap, Power4 } from 'gsap';

// Import SASS file
import styles from '../styles/Contact.module.scss';

function Contact() {
	// Refs
	let section = useRef(null);

	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.from(section, {
			y: 100,
			opacity: 0,
			duration: 1.5,
			ease: Power4.easeOut,
		});
	}, [tl]);

	return (
		<div>
			<Navigation />
			<PageBanner />
			<div className={styles.pageContent} ref={(e) => (section = e)}>
				<Image
					src='/contact-us.jpg'
					width={600}
					height={900}
					objectFit='contain'
					alt='Our Story Page Main Image'
					placeholder='blur'
					blurDataURL='/blur/contact-us.jpg'
					className={styles.contactImg}
				/>

				<div className={styles.pageText}>
					<h2>Connect With Us!</h2>
					<hr className={styles.divider} />
					<p>
						Wanted to book a reservation? Have any inquiries? We love to hear
						what you think! Just fill in the form below and we’ll get back to
						you as soon as we can!
					</p>

					<form action=''>
						<label htmlFor='name'>Name:</label>
						<input type='text' id='name' name='name' />
						<br />
						<br />

						<label htmlFor='email'>Email Add.:</label>
						<input type='text' id='email' name='email' />
						<br />
						<br />

						<label htmlFor='contactno'>Contact No.:</label>
						<input type='text' id='contactno' name='contactno' />
						<br />
						<br />

						<label htmlFor='message'>Your Message:</label>
						<textarea name='message' id='message' cols='30' rows='5'></textarea>
						<br />
						<br />

						<div className={styles.btnSubmit}>
							<button className={styles.btnDark}>Send Message</button>
						</div>
					</form>

					<p className={styles.disclaimer}>
						We will use your information for dealing with your request. We will
						not share your information with any third party. For more
						information about how we use your information, please see our
						Privacy & Cookies Policy.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
