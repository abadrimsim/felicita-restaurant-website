import { useRef, useEffect } from 'react';
import styles from './CustomCursor.module.scss';

function CustomCursor() {
	// Cursor Ref
	let cursor = useRef(null);
	let cursorInner = useRef(null);

	useEffect(() => {
		const onMouseMove = (e) => {
			const { clientX, clientY } = e;

			// Outer Circle
			const mouseX = clientX - cursor.current.clientWidth / 2;
			const mouseY = clientY - cursor.current.clientHeight / 2;

			// Inner circle
			const miniX = clientX - cursorInner.current.clientWidth / 2;
			const miniY = clientY - cursorInner.current.clientHeight / 2;

			// If device uses touch, set cursor visibility to hidden
			if (
				'ontouchstart' in window ||
				(window.DocumentTouch && document instanceof DocumentTouch)
			) {
				cursor.current.style.visibility = 'hidden';
				cursorInner.current.style.visibility = 'hidden';
			} else {
				cursor.current.style.visibility = 'visible';
				cursorInner.current.style.visibility = 'visible';
			}

			cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
			cursorInner.current.style.transform = `translate3d(${miniX}px, ${miniY}px, 0)`;
		};

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseeenter', onMouseMove);

		// Clean up effect when component unmounts
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseeenter', onMouseMove);
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
