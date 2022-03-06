import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const button = ({ toggle }) => {
	return (
		<motion.button onClick={toggle} whileTap={{ scale: '0.9' }} style={{ background: 'transparent', border: 'none', padding: '1rem' }}>
			<Image src='/menuIcon.svg' alt='menu' width={50} height={50} />
		</motion.button>
	)
}

export default button
