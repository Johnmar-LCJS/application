import React from 'react'
import styles from '../styles/Sidemenu.module.css'
import Menu from './Menuarray'

const Sidemenu = () => {
	return (
		<div className={styles.menuContainer}>
			<Menu />
		</div>
	)
}

export default Sidemenu
