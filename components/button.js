import React from 'react'
import { motion } from 'framer-motion'

const Path = (props) => <path strokeWidth='3' stroke='#fff' strokeLinecap='round' {...props} />

const button = ({ toggle }) => {
	return (
		<motion.button onClick={toggle} whileTap={{ scale: '0.9' }} style={{ background: 'transparent', border: 'none' }}>
			<svg width='30' height='30' viewBox='0 0 30 30'>
				<Path d='M 2 6 L 28 6' />
				<Path d='M 2 16 L 28 16' />
				<Path d='M 2 26 L 28 26' />
			</svg>
		</motion.button>
	)
}

export default button
