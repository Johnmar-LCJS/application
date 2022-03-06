import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const button = ({ toggle }) => {
	return (
		<motion.button onClick={toggle} whileTap={{ scale: '0.9' }} style={{ background: 'transparent', border: 'none', padding: '1rem', float: 'left' }}>
			<Image src='/menuIcon.svg' alt='menu' width={33} height={33} />
		</motion.button>
	)
}

export default button
