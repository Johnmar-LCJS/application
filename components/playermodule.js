import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import styles from '../styles/Component.module.css'

const wtValue = { scale: '0.95' }
const btnSize = 50

const Console = ({ toggle }) => {
	const [Src, cycleSrc] = useCycle('/playIcon.svg', '/pauseIcon.svg')
	const [isPlaying, setIsPlaying] = useState()
	const music = useRef()
	const togglePlay = () => {
		const pValue = isPlaying
		setIsPlaying(!isPlaying)
		if (!pValue) {
			music.current.play()
		} else {
			music.current.pause()
		}
	}

	return (
		<motion.div className={styles.console} drag whileDrag={{ scale: 1.05, cursor: 'grabbing' }} whileHover={{ cursor: 'grab' }} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragTransition={{ bounceStiffness: 150, bounceDamping: 7.5 }}>
			<div className={styles.moduleControls}>
				{/* <motion.div className={styles.modulebtn} whileTap={wtValue}>
					<Image src='/minimizebtnIcon.svg' alt='Mini' width={35} height={35} />
				</motion.div> */}

				<motion.div className={styles.modulebtn} onClick={toggle} whileTap={wtValue}>
					<Image src='/closebtnIcon.svg' alt='Close' width={35} height={35} />
				</motion.div>
			</div>

			<div>
				<motion.div className={styles.thumbnail} whileTap={wtValue}>
					<Image src='/LaffeyChibi.png' alt='laffey' width={500} height={500} className={styles.image} />
				</motion.div>
			</div>

			<div className={styles.controls}>
				<motion.div className={styles.controlbtns} whileTap={wtValue}>
					<Image src='/mediabackIcon.svg' alt='backwards' width={btnSize} height={btnSize} />
				</motion.div>

				<motion.div
					onClick={function (event) {
						cycleSrc()
						togglePlay()
					}}
					className={styles.controlbtns}
					whileTap={{ scale: '0.95' }}
				>
					<Image src={Src} alt='' width={btnSize} height={btnSize} />
				</motion.div>

				<motion.div className={styles.controlbtns} whileTap={{ scale: '0.95' }}>
					<Image src='/mediaforwardIcon.svg' alt='forwards' width={btnSize} height={btnSize} />
				</motion.div>

				<audio ref={music} src='' defer />
			</div>
		</motion.div>
	)
}

export default Console
