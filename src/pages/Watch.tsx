import React, { useContext } from 'react';
import { Context } from '..';
import { AppBar, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import Page404 from './ErrorPaged/Page404';
import HeaderCabinet from '../components/HeaderCabinet';




const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#fff',
      overflow: 'hidden'

   },
   titleBold: {
      marginTop: 30,
      marginBottom: 30,
      fontWeight: 900,
      fontSize: 42

   }

}));




function Watch() {
   const classes = useStyles()
   const { course } = useContext(Context);
   const { user } = useContext(Context);
   const [value, setValue] = React.useState(0);



   if (!user.isAuth) {
      return <Page404 />
   }

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className={classes.root}>
            <HeaderCabinet />
            Watch
         </div >
      </motion.div >
   );
}

export default observer(Watch);