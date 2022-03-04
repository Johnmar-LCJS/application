import Head from 'next/head'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Frames from '../components/frames'

const variants = {
	open: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			type: 'spring',
		},
	},
	closed: {
		opacity: 0,
		x: '-100%',
		display: 'none',
		transition: {
			duration: 0.5,
		},
	},
}

export default function Home() {
	const [animation, cycleAnimation] = useCycle('open', 'closed')

	return (
		<div>
			<Head>
				<title>Application</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Frames></Frames>
			<div className={styles.container}>
				<motion.nav animate={animation} variants={variants} style={{ background: '#297eb7' }}>
					I love nanahira
				</motion.nav>

				<main className={styles.main}>
					<motion.div>
						<h2 className={styles.title}>Animation Target</h2>
					</motion.div>

					<motion.p className={styles.description} onClick={() => cycleAnimation()} whileTap={{ scale: 0.9 }}>
						Click/Tap me to initiate the animation
					</motion.p>

					<motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} style={{ zIndex: '0' }}>
						<Image src='/LaffeyChibi.png' alt='laffey' width={150} height={150} className={styles.image} />
					</motion.div>
				</main>
			</div>

			<footer className={styles.footer}>
				<a href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
