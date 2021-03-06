import Head from 'next/head'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Button from '../components/button'
import Sidemenu from '../components/sidemenu'
import Player from '../components/playermodule'

const variants = {
	open: {
		opacity: 1,
		x: 0,
		display: 'block',
		transition: {
			duration: 0.2,
		},
	},
	closed: {
		opacity: 0,
		x: '-100%',
		display: 'none',
		transition: {
			duration: 0.2,
			display: {
				delay: 0.2,
			},
		},
	},
}

const playerToggle = {
	open: {
		opacity: 1,
		display: 'flex',
		transition: {
			duration: 0.2,
		},
	},
	closed: {
		opacity: 0,
		display: 'none',
		transition: {
			duration: 0.15,
			display: {
				delay: 0.15,
			},
		},
	},
}

export default function Home() {
	const [animation, cycleAnimation] = useCycle(false, true)
	const [module, cycleToggle] = useCycle(false, true)

	return (
		<div>
			<Head>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/MutsukiHyperStare.ico' />
				<title>VSmusic</title>
			</Head>

			<main className={styles.main}>
				<motion.nav className={styles.sidebar} animate={animation ? 'open' : 'closed'} initial={false} variants={variants}>
					<Sidemenu toggle={() => cycleToggle()} />
				</motion.nav>

				<div className={styles.container}>
					<div className={styles.menubtnContainer}>
						<Button toggle={() => cycleAnimation()} />
					</div>

					<motion.div className={styles.playerContainer} animate={module ? 'open' : 'closed'} initial={false} variants={playerToggle}>
						<Player toggle={() => cycleToggle()} />
					</motion.div>
				</div>
			</main>

			<footer className={styles.footer}>
				<div>
					<p>
						<b style={{ color: '#f00' }}>DISCLAIMER:</b> I do not own any of the image/thumbnails used.
					</p>
					<p>This project is only for educational purposes or in my case it is for academic purposes.</p>
				</div>
			</footer>
		</div>
	)
}
