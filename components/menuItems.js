import React from 'react'
import Image from 'next/image'
import styles from '../styles/Sidemenu.module.css'
import { motion } from 'framer-motion'

const iconSize = 50

const Menuarray = () => {
	return (
		<div>
			<div className={styles.menuA}>
				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/backIcon.svg' alt='back' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/mediaMixerIcon.svg' alt='media-mixer' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/searchIcon.svg' alt='search' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/bookmarkIcon.svg' alt='bookmarks' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/heartIcon.svg' alt='favourites' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/queueIcon.svg' alt='queue' width={iconSize} height={iconSize} />
				</motion.div>
			</div>
			<div className={styles.menuB}>
				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/addIcon.svg' alt='add' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }}>
					<Image src='/settingsIcon.svg' alt='settings' width={iconSize} height={iconSize} />
				</motion.div>
			</div>
		</div>
	)
}

export default Menuarray
