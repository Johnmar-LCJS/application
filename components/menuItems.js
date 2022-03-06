import React from 'react'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import styles from '../styles/Component.module.css'

const iconSize = 50

const Menuarray = () => {
	return (
		<div>
			<div className={styles.menuA}>
				<motion.div whileTap={{ scale: '0.95' }} title='Home'>
					<Image src='/homeIcon.svg' alt='back' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }} title='Mixer'>
					<Image src='/mediaMixerIcon.svg' alt='media-mixer' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }} title='Search'>
					<Image src='/searchIcon.svg' alt='search' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }} title='Bookmarks'>
					<Image src='/bookmarkIcon.svg' alt='bookmarks' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }} title='Favourites'>
					<Image src='/heartIcon.svg' alt='favourites' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }} title='Queue'>
					<Image src='/queueIcon.svg' alt='queue' width={iconSize} height={iconSize} />
				</motion.div>
			</div>
			<div className={styles.menuB}>
				<motion.div whileTap={{ scale: '0.95' }} title='Add Files'>
					<Image src='/addIcon.svg' alt='add' width={iconSize} height={iconSize} />
				</motion.div>

				<motion.div whileTap={{ scale: '0.95' }} title='Settings'>
					<Image src='/settingsIcon.svg' alt='settings' width={iconSize} height={iconSize} />
				</motion.div>
			</div>
		</div>
	)
}

export default Menuarray
