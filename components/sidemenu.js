import React from 'react'
import Image from 'next/image'
import styles from '../styles/Component.module.css'
import { motion, useCycle } from 'framer-motion'

const wtValue = { scale: '0.95' }
const iconSize = 50

const Sidemenu = ({ toggle }) => {
	return (
		<div className={styles.menuContainer}>
			<div>
				<div className={styles.menuA}>
					<motion.div whileTap={wtValue} onClick={toggle} title='Player Module'>
						<Image src='/playerModuleIcon.svg' alt='player' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='Mixer Module'>
						<Image src='/mediaMixerIcon.svg' alt='media-mixer' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='Search'>
						<Image src='/searchIcon.svg' alt='search' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='Bookmarks'>
						<Image src='/bookmarkIcon.svg' alt='bookmarks' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='Favourites'>
						<Image src='/heartIcon.svg' alt='favourites' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='Queue Module'>
						<Image src='/queueIcon.svg' alt='queue' priority width={iconSize} height={iconSize} />
					</motion.div>
				</div>
				<div className={styles.menuB}>
					<motion.div whileTap={wtValue} title='Add Files'>
						<Image src='/addIcon.svg' alt='add' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='View Files'>
						<Image src='/audioFolderIcon.svg' alt='audio-folder' priority width={iconSize} height={iconSize} />
					</motion.div>

					<motion.div whileTap={wtValue} title='Settings'>
						<Image src='/settingsIcon.svg' alt='settings' priority width={iconSize} height={iconSize} />
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Sidemenu
