// Import components
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';

// Import SASS file
import styles from '../styles/Menu.module.scss';

function Menu() {
	return (
		<div>
			<Navigation />
			<PageBanner />
			<div className={styles.pageContent}>
				<h2>Our Menu</h2>
				<hr className={styles.divider} />

				{/* Top Menu Container */}
				<div className={styles.topContainer}>
					{/* Soup & Salad Container */}
					<div className={styles.topLContainer}>
						<div className={styles.containerTitle}>
							<h4>Soup & Salad</h4>
							<p>
								add protein to any salad: Chicken or Shrimp <span>(4)</span>,
								Grilled Steak <span>(6)</span>, Wild Alaskan Salmon{' '}
								<span>(7)</span>
							</p>
						</div>
						<div>
							<h5>House Salad</h5>
							<p>
								Organic greens, crumbled gorgonzola, cerignola olives, house
								dressing <span>(5)</span>
							</p>
							<br />

							<h5>Caesar Salad</h5>
							<p>
								Romaine, anchovy, garlic croutons, parmesan, vinagrette{' '}
								<span>(6)</span>
							</p>
							<br />

							<h5>Caprese Salad</h5>
							<p>
								Heirloom tomatoes, fresh mozarella, fresh basil, balsamic
								vinagrette <span>(7)</span>
							</p>
							<br />

							<h5>Minestrone</h5>
							<p>
								Orzo pasta, canellini beans, roasted vegetables in tomato broth
								<span>(5)</span>
							</p>
							<br />

							<h5>Frutti di Mare</h5>
							<p>
								Scallops, prawns, halibut, oregano <span>(8)</span>
							</p>
							<br />

							<h5>Soup of the Day</h5>
							<p>
								Ask your server, includes home made breadsticks <span>(5)</span>
							</p>
							<br />
						</div>
					</div>

					{/* Pasta Container */}
					<div className={styles.topRContainer}>
						<div className={styles.containerTitle}>
							<h4>Pasta</h4>
							<p>gluten-free pasta avilable upon request</p>
						</div>
						<div>
							<h5>Spaghetti Pomodoro</h5>
							<p>
								Tomatoes, fresh basil, garlic, olive oil <span>(10)</span>
							</p>
							<br />

							<h5>Orecchiette Pasta</h5>
							<p>
								Grilled sausage, pecorino romano, garlic, white wine{' '}
								<span>(12)</span>
							</p>
							<br />

							<h5>Pappardelle con Coniglio</h5>
							<p>
								Braised rabbit, carrot, celery, onion, garlic, white wine{' '}
								<span>(15)</span>
							</p>
							<br />

							<h5>Risotto Gamberi</h5>
							<p>
								Arborio rice, shrimp, asparagus, creamy tomato sauce{' '}
								<span>(12)</span>
							</p>
							<br />

							<h5>Gnocchi</h5>
							<p>
								Potato pasta, sage, browned butter, fortina, gorgonzola{' '}
								<span>(10)</span>
							</p>
							<br />

							<h5>Spaghetti Puttanesca</h5>
							<p>
								Tomatoes, green olives, capers, chili, oregano <span>(11)</span>
							</p>
							<br />
						</div>
					</div>
				</div>

				{/* Bottom Menu Container */}
				<div className={styles.bottomContainer}>
					{/* Panini Container */}
					<div className={styles.bottomLContainer}>
						<div className={styles.containerTitle}>
							<h4>Panini</h4>
							<p>
								served with mixed greens salad, cup of soup, or roasted
								vegetables
							</p>
						</div>
						<div>
							<h5>Eggplant Parmigiana</h5>
							<p>
								Grilled eggplant, toamto, basil, mozzarella, balsamic vinegar
								<span>(10)</span>
							</p>
							<br />

							<h5>Umbria Turkey</h5>
							<p>
								Turkey breast, avocado, tomato, organic spring mix{' '}
								<span>(8)</span>
							</p>
							<br />

							<h5>Chicken Parmiagana</h5>
							<p>
								Grilled chicken breast, parmesan, mozzarella, marinara{' '}
								<span>(10)</span>
							</p>
							<br />

							<h5>Italian Sausage</h5>
							<p>
								Spicy sausage, roasted red peppers, onions, marinara{' '}
								<span>(11)</span>
							</p>
							<br />

							<h5>Salami and Goat Cheese</h5>
							<p>
								Spicy calabrese salami, roasted red peppers, goat cheese spread
								<span>(10)</span>
							</p>
							<br />
						</div>
					</div>

					{/* Pizza Container */}
					<div className={styles.bottomRContainer}>
						<div className={styles.containerTitle}>
							<h4>Pizza</h4>
							<p>one of the best pizzas in the city!</p>
						</div>
						<div>
							<h5>Margherita</h5>
							<p>
								San Marzano tomato sauce, fresh mozzarella, fresh basil{' '}
								<span>(10)</span>
							</p>
							<br />

							<h5>Bologna</h5>
							<p>
								Spicy salami, mozzarella, bolognese meat sauce <span>(12)</span>
							</p>
							<br />

							<h5>Vegetariana</h5>
							<p>
								Onion, tomato, bell pepper, mushrooms, olives <span>(11)</span>
							</p>
							<br />

							<h5>Quatro Formaggi</h5>
							<p>
								Mozzarella, fontina, ricotta, parmesan <span>(10)</span>
							</p>
							<br />

							<h5>Sicillian</h5>
							<p>
								Sweet Italian sausage, spicy Capicola ham, fontina, mozzarella,
								basil <span>(13)</span>
							</p>
							<br />

							<h5>Felicità Special</h5>
							<p>
								Ricotta cheese cream sauce, tender to roast chicken, spinach,
								special sauce <span>(14)</span>
							</p>
							<br />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Menu;
