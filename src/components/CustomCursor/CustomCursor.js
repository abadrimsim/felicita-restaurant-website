import { useRef, useEffect } from 'react';
import styles from './CustomCursor.module.scss';

function CustomCursor() {
	// Cursor Ref
	let cursor = useRef(null);
	let cursorInner = useRef(null);

	useEffect(() => {
		const onMouseMove = (e) => {
			const { clientX, clientY } = e;
			const mouseX = clientX - cursor.current.clientWidth / 2;
			const mouseY = clientY - cursor.current.clientHeight / 2;

			// // Inner circle
			const miniX = clientX - cursorInner.current.clientWidth / 2;
			const miniY = clientY - cursorInner.current.clientHeight / 2;

			cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
			cursorInner.current.style.transform = `translate3d(${miniX}px, ${miniY}px, 0)`;
		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseeenter', onMouseMove);

		// clean up effect when component unmounts
		return () => {
			// remove the event listener
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseeenter', onMouseMove);
		};
	}, []);
	return (
		<>
			<div className={styles.customCursor} ref={cursor} />
			<div className={styles.cursorInner} ref={cursorInner} />
		</>
	);
}

export default CustomCursor;
