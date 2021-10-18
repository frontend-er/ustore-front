//@ts-nocheck

import React, { useContext, Component, Fragment, useEffect, useState } from 'react';
import { Context } from '..';
import { Button, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import MainView from '../components/MainView';
import Footer from '../components/Footer';
import AllDirections from '../components/MainPage/AllDirections';
import SliderLeader from '../components/MainPage/SliderLeader';
import HotOne from '../components/MainPage/HotOne';




const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5',
      overflow: 'hidden'

   },



}));



const Home = observer(() => {
   const classes = useStyles()
   const { user, courseBasket } = useContext(Context);
   const [userId, setUserId] = useState(0);
   const [basket, setBasket] = useState([]);


   useEffect(async () => {
      setUserId(user.getUserId());
      const candidate = await courseBasket.getBasket(userId.id)
      console.log(candidate)
      setBasket(candidate)
   }, [])

   console.log(basket)


   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className={classes.root}>
            <Header />
            <MainView />
            <AllDirections />
            <HotOne />
            <SliderLeader />
            <Footer />
         </div>
      </motion.div >


   );
})


export default Home;


