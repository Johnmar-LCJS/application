import React from 'react'
import Image from 'next/image'
import styles from '../styles/Sidemenu.module.css'

const iconSize = 55

const Menuarray = () => {
	return (
		<div className={styles.menuItems}>
			<div whileTap={{ scale: '0.95' }}>
				<Image src='/backIcon.svg' alt='back' width={iconSize} height={iconSize} />
				hello
			</div>

			<div whileTap={{ scale: '0.95' }}>
				<Image src='/searchIcon.svg' alt='search' width={iconSize} height={iconSize} />
			</div>

			<div whileTap={{ scale: '0.95' }}>
				<Image src='/mediaMixerIcon.svg' alt='media-mixer' width={iconSize} height={iconSize} />
			</div>

			<div whileTap={{ scale: '0.95' }}>
				<Image src='/bookmarkIcon.svg' alt='bookmarks' width={iconSize} height={iconSize} />
			</div>

			<div whileTap={{ scale: '0.95' }}>
				<Image src='/heartIcon.svg' alt='favourites' width={iconSize} height={iconSize} />
			</div>

			<div whileTap={{ scale: '0.95' }}>
				<Image src='/queueIcon.svg' alt='queue' width={iconSize} height={iconSize} />
			</div>
		</div>
	)
}

export default Menuarray
