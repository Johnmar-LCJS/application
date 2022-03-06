import React from 'react'
import styles from '../styles/Sidemenu.module.css'
import { motion } from 'framer-motion'
import Menu from './Menuarray'

const Sidemenu = () => {
	return (
		<motion.div className={styles.menuContainer}>
			<Menu />
		</motion.div>
	)
}

export default Sidemenu
