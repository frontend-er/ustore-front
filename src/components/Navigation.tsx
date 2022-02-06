// @ts-nocheck


import React, { useContext, useState, Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { Button, Hidden, Link, makeStyles, Modal, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import logo from '../assets/enternal/Logo.png';
import burger from '../assets/enternal/burger.png';
import close from '../assets/enternal/close.png';
import TextField from '@material-ui/core/TextField';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


import devider from '../assets/enternal/devider.png';
import { Link as RouterLink } from 'react-router-dom'
import OffCanvas from 'react-aria-offcanvas';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { motion } from 'framer-motion';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5'
   },

   logo: {
      margin: 6
   },

   holderLogo: {
      display: 'flex',
      flexDirection: 'row',
      fontFamily: 'MuseoModerno',
      fontSize: 20,
      lineHeight: 0.9,

   },

   logoName: {
      marginTop: 16

   },

   logoNameHead: {
      marginTop: -12,
      fontSize: 23

   },



   bootonCall: {
      marginTop: 16,
      marginLeft: 44,
      lineHeight: 1.1,
      fontSize: 14,
      fontWeight: 'bold'

   },
   callIcon: {
      marginLeft: 7,
      fontSize: 19

   },

   callIconMini: {
      fontSize: 19,
      padding: 0,
      '&:hover': {
         color: "#000",
         textDecoration: 'none'
      }
   },

   devider: {
      margin: 15,
      height: 44.54
   },

   modalWindow: {
      width: 600,
      height: 400,
      backgroundColor: '#141311',
      color: '#fff',
      borderRadius: 4,
      position: 'absolute',
      left: ' 50%',
      top: '50%',
      marginLeft: -300,
      marginTop: -200,
   },

   modalTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 15

   },

   modalSubtitle: {
      textAlign: 'center',
   },

   link: {
      color: '#7D7D7D',
      fontWeight: 'bold',
      marginLeft: 12,
      '&:hover': {
         color: "#000",
         textDecoration: 'none'
      }

   },

   linkSide: {
      color: '#7D7D7D',
      fontWeight: 'bold',
      marginLeft: 19,
      fontSize: 20,

      '&:hover': {
         color: "#000",
         textDecoration: 'none'
      }
   },

   linksSide: {
      marginTop: 44,
      fontSize: 14,
      textAlign: 'center',

   },


   links: {
      marginTop: 24,
      textAlign: 'center',
      fontSize: 14
   },

   buttonLogin: {
      marginTop: 15,
      fontSize: 13,
      margin: 1,
      padding: 12,

      '&:hover': {
         color: "#000",
         textDecoration: 'none'
      }
   },

   holderLinks: {
      height: '100vh',
      backgroundColor: '#fff',
      position: 'relative'
   },



   burger: {
      marginTop: 14,
      marginBottom: 12
   },

   buttonsSide: {
      marginLeft: 19,
      marginTop: 20
   },


   rootModal: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 460,
      marginTop: 20,
      marginLeft: 70,
      background: '#242321',
      borderColor: '#242321'
   },
   inputModal: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: '#fff',

   },
   iconButtonModal: {
      padding: 10,
      color: '#141311',

   },
   dividerModal: {
      height: 28,
      margin: 4,
      color: '#fff',

   },


}));



function Navigation() {
   const classes = useStyles()
   const { user } = useContext(Context);

   const dudUrl = '#'

   return (
      <nav id="menu" className={classes.linksSide}>
         <div>
            <Link component={RouterLink} to="/about" className={classes.linkSide}>
               О нас
            </Link>
         </div>
         <div>
            <Link component={RouterLink} to="/kids" className={classes.linkSide}>
               Kids
            </Link>
         </div>
         <div>
            <Link component={RouterLink} to="/teens" className={classes.linkSide}>
               Teens
            </Link>
         </div>
         <div>
            <Link component={RouterLink} to="/youth" className={classes.linkSide}>
               Youth
            </Link>
         </div>
         <div>
            <Link component={RouterLink} to="/show" className={classes.linkSide}>
               Show
            </Link>
         </div>
         <div>
            <Link component={RouterLink} to="/therapy" className={classes.linkSide}>
               Art-Therapy
            </Link>
         </div>
         <div>
            <Link component={RouterLink} to="/event" className={classes.linkSide}>
               Event-Lab
            </Link>
         </div>

         <div className={classes.buttonsSide}>
            {
               (!user.isAuth) ? <div>
                  <Button component={RouterLink} variant="text" color="default" className={classes.buttonLogin} to="/login">
                     Войти
                  </Button>
               </div> : <div>
                  <Button variant="text" color="default" className={classes.buttonLogin} component={RouterLink} to="/basket">
                     <Hidden mdDown>
                        Корзина
                     </Hidden>
                     <Hidden lgUp>
                        <div>
                           <FontAwesomeIcon icon={faCartPlus} className={classes.callIconMini} />
                        </div>
                     </Hidden>
                  </Button>
                  <Button variant="text" color="default" className={classes.buttonLogin} component={RouterLink} to="/cabinet">
                     <Hidden mdDown>
                        В кабинет
                     </Hidden>

                     <Hidden lgUp>
                        <div>
                           <FontAwesomeIcon icon={faHome} className={classes.callIconMini} />

                        </div>
                     </Hidden>

                  </Button>
                  <Button variant="text" color="default" className={classes.buttonLogin} component={RouterLink} to="/" onClick={() => user.logout()}>

                     <Hidden mdDown>
                        Выйти

                     </Hidden>

                     <Hidden lgUp>
                        <div>
                           <FontAwesomeIcon icon={faSignOutAlt} className={classes.callIconMini} />

                        </div>
                     </Hidden>
                  </Button>
               </div>
            }
         </div>
      </nav>
   )
}

export default observer(Navigation)