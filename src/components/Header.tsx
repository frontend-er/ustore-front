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
import { faCartPlus, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


import devider from '../assets/enternal/devider.png';
import { Link as RouterLink, NavLink } from 'react-router-dom'
import OffCanvas from 'react-aria-offcanvas';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import AppBurger from './AppBurger';


const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5',
      position: 'fixed',
      zIndex: 100
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






function Header() {
   const { user } = useContext(Context);
   const classes = useStyles()

   const [modalOpen, setModalOpen] = useState(false)
   const handleOpen = () => {
      setModalOpen(true)
   };
   const dudUrl = '#'

   const handleClose = () => {
      setModalOpen(false)
   };


   return (
      <div >
         <Container fluid className={classes.root}>
            <Row >
               <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1} className={classes.holderLogo}>


                  <Hidden smDown>
                     <div className={classes.logo}>
                        <NavLink to="/">
                           <img src={logo} alt="Logo" style={{ height: 54.54, width: 39.97 }} />
                        </NavLink>
                     </div>
                     <div className={classes.logoName}>
                        <b> urban </b> center
                     </div>
                  </Hidden>
                  <Hidden mdUp >
                     <div className={classes.burger}>
                        <AppBurger />
                     </div>
                  </Hidden>


                  <Hidden mdDown>
                     <img src={devider} alt="Logo" className={classes.devider} />
                  </Hidden>

               </Col>

               <Hidden mdDown>
                  <Col xl={1} xxl={1}>
                     <Button variant="text" color="default" className={classes.bootonCall} onClick={handleOpen}>
                        ЗАКАЗАТЬ
                        <br /> ЗВОНОК
                        <div>
                           <FontAwesomeIcon icon={faPhoneAlt} className={classes.callIcon} />
                        </div>
                     </Button>
                  </Col>
               </Hidden>


               <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={modalOpen}
                  onClose={handleClose}
               >
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                     <div className={classes.modalWindow}>

                        <Typography variant="h6" id="modal-title" className={classes.modalTitle}>
                           Text in a modal
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description" className={classes.modalSubtitle}>
                           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>


                        <Paper component="form" className={classes.rootModal}>
                           <IconButton className={classes.iconButtonModal} aria-label="menu">
                              <FontAwesomeIcon icon={faHome} className={classes.callIconMini} />

                           </IconButton>
                           <InputBase
                              className={classes.inputModal}
                              placeholder="Enter your email"
                              inputProps={{ 'aria-label': 'search google maps' }}
                           />

                           <Divider className={classes.dividerModal} orientation="vertical" />
                           <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                           </IconButton>
                        </Paper>

                        <Paper component="form" className={classes.rootModal}>
                           <IconButton className={classes.iconButtonModal} aria-label="menu">
                              <FontAwesomeIcon icon={faHome} className={classes.callIconMini} />

                           </IconButton>
                           <InputBase
                              className={classes.inputModal}
                              placeholder="Enter your phone number"
                              inputProps={{ 'aria-label': 'search google maps' }}
                           />

                           <Divider className={classes.dividerModal} orientation="vertical" />
                           <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                           </IconButton>
                        </Paper>
                        <Paper component="form" className={classes.rootModal}>
                           <IconButton className={classes.iconButtonModal} aria-label="menu">
                              <FontAwesomeIcon icon={faHome} className={classes.callIconMini} />

                           </IconButton>
                           <InputBase
                              className={classes.inputModal}
                              placeholder="Enter your question"
                              inputProps={{ 'aria-label': 'search google maps' }}
                              multiline
                              rows={4}
                              maxRows={4}
                           />


                           <Divider className={classes.dividerModal} orientation="vertical" />
                           <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                           </IconButton>
                        </Paper>
                        <div className={classes.modalTitle}>
                           <Button variant="contained" color="default" className={classes.buttonLogin} style={{ marginBottom: 10, marginRigth: 10 }}>
                              Заказать звонок

                           </Button>
                           <Button variant="contained" color="default" className={classes.buttonLogin} style={{ marginBottom: 10 }}>
                              Написать о возникшей проблеме
                           </Button>
                        </div>

                     </div>
                  </motion.div>

               </Modal>

               <Hidden smDown>
                  <Col sm={8} md={8} lg={8} xl={7} xxl={7} className={classes.links}>
                     <Link href={dudUrl} className={classes.link}>
                        О нас
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Лекторы
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Kids
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Teens
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Youth
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Show
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Art-Therapy
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Event-Lab
                     </Link>
                  </Col>
               </Hidden>
               <Hidden mdUp >
                  <Col xs={11} sm={11} md={10} lg={9} xl={8} xxl={8} className={classes.links}>

                     <div className={classes.logoNameHead}>
                        <b> urban </b> center
                     </div>
                  </Col>

               </Hidden>


               <Hidden smDown>
                  <Col sm={1} md={3} lg={3} xl={3} xxl={3}>
                     <div>
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
                  </Col>
               </Hidden>
            </ Row>
         </Container >
      </div >

   );
}

export default observer(Header);