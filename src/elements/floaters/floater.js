import React from 'react'
import { motion } from 'framer-motion'

import "./floater.css"

const Floater = () => {
    const dragger = {
        top: -200,
        left: -600,
        right: 600,
        bottom: 250,
    }
    const hover={
        rotate:'360deg',
        borderRadius:'10px',
        backgroundColor:'',
    }
    return (
        <>
            <motion.div drag
                dragConstraints={dragger}
                animate={{ x: 250, y: 250 }}
                whileHover={hover} className='dragCommon f1' />
            <motion.div drag
                dragConstraints={dragger}
                animate={{ x: -250, y: 250 }}
                whileHover={hover} className='dragCommon f2' />
            <motion.div drag
                dragConstraints={dragger}
                animate={{ x: 250, y: -210 }}
                whileHover={hover} className='dragCommon f3' />
            <motion.div drag
                dragConstraints={dragger}
                animate={{ x: -250, y: -210 }}
                whileHover={hover} className='dragCommon f4' />
        </>
    )
}

export default Floater