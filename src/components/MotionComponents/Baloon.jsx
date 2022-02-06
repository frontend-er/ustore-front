import React from 'react';
import { makeStyles } from '@material-ui/core';
import logoBig from '../../assets/MainPage/mainPhoto.png';
import { motion } from 'framer-motion';
//import Gradient from 'rgt'
import cloud1 from '../../assets/MainPage/cloud1.png';
import cloud2 from '../../assets/MainPage/cloud2.png';
import cloud3 from '../../assets/MainPage/cloud3.png';
import cloud4 from '../../assets/MainPage/cloud4.png';




export const Baloon = () => {
   return (
      <div style={{
         userSelect: 'none',
         maxHeight: 1000
      }} >

         <motion.div
            initial={{ '--rotate': '0deg', y: 0, x: -100 }}
            animate={{ '--rotate': '0deg', y: 10, x: 25 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud4} alt={"cloud1"} />
         </motion.div>

         <motion.div
            initial={{ '--rotate': '0deg', y: 300, x: -200 }}
            animate={{ '--rotate': '0deg', y: 301, x: -125 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud4} alt={"cloud1"} />
         </motion.div>
         <motion.div
            initial={{ '--rotate': '0deg', y: 0, x: 410 }}
            animate={{ '--rotate': '0deg', y: 0, x: 460 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud4} alt={"cloud1"} />
         </motion.div>

         <motion.div
            initial={{ '--rotate': '8deg', x: -30, y: -80 }}
            animate={{ '--rotate': '-3deg', x: 20, y: -140 }}

            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 8
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))', width: 420 }} src={logoBig} alt={"logoBig"} />
         </motion.div>

         <motion.div
            initial={{ '--rotate': '0deg', y: -100, x: 410 }}
            animate={{ '--rotate': '0deg', y: -100, x: 460 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud4} alt={"cloud1"} />

         </motion.div>

         <motion.div
            initial={{ '--rotate': '0deg', y: -400, x: 110 }}
            animate={{ '--rotate': '0deg', y: -400, x: 260 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud1} alt={"cloud1"} />

         </motion.div>

         <motion.div
            initial={{ '--rotate': '0deg', y: -200, x: 310 }}
            animate={{ '--rotate': '0deg', y: -200, x: 302 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud3} alt={"cloud1"} />
         </motion.div>

         <motion.div
            initial={{ '--rotate': '0deg', y: -400, x: 10 }}
            animate={{ '--rotate': '0deg', y: -400, x: 160 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud2} alt={"cloud1"} />

         </motion.div>

         <motion.div
            initial={{ '--rotate': '0deg', y: -200, x: 110 }}
            animate={{ '--rotate': '0deg', y: -200, x: 160 }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 18
            }}
         >
            <img style={{ transform: 'rotate(var(--rotate))' }} src={cloud4} alt={"cloud1"} />

         </motion.div>
      </div >


   );
}