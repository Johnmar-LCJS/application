import React from 'react'
import Image from 'next/image'
import styles from '../styles/Component.module.css'

const console = () => {
	return (
		<div className={styles.console}>
			<div className={styles.thumbnail}>
				<Image src='/laffeyChibi.png' alt='laffey' width={50} height={50} />
			</div>
			<div className={styles.controls}>hello</div>
		</div>
	)
}

export default console
