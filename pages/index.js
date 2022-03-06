import Head from 'next/head'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Sidemenu from '../components/Sidemenu'

const variants = {
	open: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.1,
		},
	},
	closed: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.1,
		},
	},
}

export default function Home() {
	const [animation, cycleAnimation] = useCycle(false, true)

	return (
		<div>
			<Head>
				<title>Application</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<motion.nav className={styles.sidebar} animate={animation ? 'open' : 'closed'} initial={false} variants={variants}>
					<Sidemenu />
				</motion.nav>

				<main className={styles.main}>
					<div>
						<Button toggle={() => cycleAnimation()} />
					</div>
					<h4 className={styles.title}>hello</h4>

					<motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}>
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
