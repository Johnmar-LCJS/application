import React from 'react'
import Image from 'next/image'
import styles from '../styles/Component.module.css'
import { motion } from 'framer-motion'

const button = ({ toggle }) => {
	return (
		<motion.div onClick={toggle} whileTap={{ scale: '0.9' }} className={styles.menubtn}>
			<Image src='/menuIcon.svg' alt='menu' width={33} height={33} />
		</motion.div>
	)
}

export default button
