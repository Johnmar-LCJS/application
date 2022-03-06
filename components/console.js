import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import styles from '../styles/Component.module.css'

const Console = () => {
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
		<div className={styles.console}>
			<motion.div className={styles.thumbnail} whileTap={{ scale: '0.95' }}>
				<Image src='/LaffeyChibi.png' alt='laffey' width={500} height={500} />
			</motion.div>
			<div className={styles.controls}>
				<motion.div className={styles.controlbtns} whileTap={{ scale: '0.95' }}>
					<Image src='/mediabackIcon.svg' alt='' width={50} height={50} />
				</motion.div>
				<motion.div
					onClick={function (event) {
						cycleSrc()
						togglePlay()
					}}
					className={styles.controlbtns}
					whileTap={{ scale: '0.95' }}
				>
					<Image src={Src} alt='' width={50} height={50} />
				</motion.div>
				<motion.div className={styles.controlbtns} whileTap={{ scale: '0.95' }}>
					<Image src='/mediaforwardIcon.svg' alt='' width={50} height={50} />
				</motion.div>

				<audio ref={music} src='/majesty.mp3' defer />
			</div>
		</div>
	)
}

export default Console
