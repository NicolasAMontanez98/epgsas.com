import React from 'react'
import { motion } from 'framer-motion'

import te_respaldamos from '../../assets/logo/te_respaldamos.png'

export const LogoFooter: React.FC<any> = () => {
  return (
    <div className='fixed -left-4 -bottom-5 p-4 z-50 bg-black bg-opacity-70 rounded-full lg:bg-transparent'>
        <motion.img
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: "100%"
            }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            src={te_respaldamos}
            width={'100px'}
            height={'50px'}
            alt='Te respaldamos!!!'
        />
    </div>
  )
}
