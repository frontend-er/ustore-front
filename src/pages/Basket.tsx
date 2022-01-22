//@ts-nocheck

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { AppBar, makeStyles, Tab, Tabs, Typography, Button, TextField, FormGroup, FormControlLabel } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import Page404 from './ErrorPaged/Page404';
import HeaderCabinet from '../components/HeaderCabinet';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BasketService from '../services/BasketService';
import { IBasket } from '../models/response/IBasket';
import CartEmpty from '../assets/CartEmpty/EmptyCart.png'
import close from '../assets/CartEmpty/close.png'
import { useHistory } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';



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

   },
   topRow: {
      background: '#fff',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   titleRowTop: {
      fontSize: 43,
      fontWeight: 900,
      lineHeight: 2.5

   },
   closeRowTop: {
      fontSize: 42,
      fontWeight: 900,
      lineHeight: 2.5

   },
   bodyCart: {
      background: '#F3F3F3',

   },

   emptyCartHolder: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
   },

   emptyCartPhoto: {
      marginTop: 100
   },
   emptyCartTitle: {
      color: '#656565',
      fontSize: 36,
      lineHeight: 1.5,
      fontWeight: 900

   },
   emptyCartSubtitle: {
      fontSize: 18,
      lineHeight: 2.5

   },

   orderWrapper: {
      marginTop: 40,
      background: '#141311',
      borderRadius: 10,
      marginBottom: 40
   },

   topTitle: {
      borderBottom: '1px solid #fff',
      textAlign: 'center',
      fontWeight: 900,
      color: '#fff',
      fontSize: 24,
      lineHeight: 3,

   },


   textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      maxWidth: 340,
      margin: 14,
      paddingBottom: 12,
      borderColor: '#fff'


   },


   cssLabel: {
      color: '#B1B1B1',
      fontSize: 18,
   },

   cssOutlinedInput: {
      borderRadius: 10,
      color: '#B1B1B1',
      '&$cssFocused $notchedOutline': {
         borderColor: `${theme.palette.primary.main} !important`,
      }
   },
   notchedOutline: {
      borderWidth: '1px',
      borderColor: '#B1B1B1 !important'
   },

   paymentWrapper: {
      textAlign: 'left',
      margin: 30
   },

   paymentTitle: {
      fontWeight: 900,
      color: '#fff',
      fontSize: 24,
      lineHeight: 3,
      marginLeft: 10
   },

   countPriceWrapper: {
      textAlign: 'right'
   },

   countTitle: {
      fontWeight: 900,
      color: '#000',
      fontSize: 24,
   },

   countNumber: {
      fontWeight: 300,
      color: '#000',
      fontSize: 24,
   }

}));



const EmptyCart = observer(() => {
   const classes = useStyles()
   const history = useHistory();
   return <div className={classes.emptyCartHolder}>
      <img src={CartEmpty} alt="..." className={classes.emptyCartPhoto} />
      <div className={classes.emptyCartTitle}>
         Your basket is empty.

      </div>
      <div className={classes.emptyCartSubtitle}>
         Maybe you should <b style={{ textDecoration: 'underline' }}> come back and have another look at our products! </b>
      </div>
      <div>
         <Button onClick={() => history.goBack()} variant="contained" style={{ background: '#000', color: '#fff', marginBottom: 40 }} > Вернуться назад </Button>
      </div>

   </div>
})




const ProductCart = observer(({ basket, handleRemove }) => {
   const [email, setEmail] = useState<string>('')
   const classes = useStyles()
   const [cupon, setCupon] = useState<string>('')
   function handleChange(event, newValue) {
      setValue(newValue);
   }

   let totalPrice = 0
   let discount = 0;

   return <div>
      <Row>
         <Col xs={8}>
            <Table responsive>
               <thead>
                  <tr>
                     <th>Product</th>
                     <th>Unit</th>
                     <th>Price</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {basket &&
                     basket.map((t) => {
                        totalPrice = totalPrice + t.poductPrice;
                        return <tr key={t.id}>
                           <td>
                              <div>
                                 {t.productTitle}
                              </div>
                              <div>
                                 {t.productDescription}
                              </div>
                           </td>
                           <td>{t.unit}</td>
                           <td>{t.poductPrice}</td>
                           <td ><Button type="button" onClick={() => handleRemove(t.id)}>x</Button></td>
                        </tr>
                     })
                  }
               </tbody>
            </Table>
            <div className={classes.countPriceWrapper}>
               <div className={classes.countTitle}>
                  <Row>
                     <Col lg={8}>
                     </Col>
                     <Col lg={2}>
                        Subtotal:
                     </Col>
                     <Col lg={2}>
                        <span className={classes.countNumber} >${totalPrice}</span>
                     </Col>
                  </Row>
               </div>


               <div className={classes.countTitle}>
                  <Row>
                     <Col lg={8}>
                     </Col>
                     <Col lg={2}>
                        Discaount:
                     </Col>
                     <Col lg={2}>
                        <span className={classes.countNumber}>{discount}%</span>
                     </Col>
                  </Row>
               </div>
               <div className={classes.countTitle}>
                  <Row>
                     <Col lg={8}>
                     </Col>
                     <Col lg={2}>
                        TVA:
                     </Col>
                     <Col lg={2}>
                        <span className={classes.countNumber}>{discount}%</span>
                     </Col>
                  </Row>
               </div>

               <Row>
                  <Col lg={8}>
                  </Col>
                  <Col lg={4}>
                     <hr style={{ background: '#9ca1a5' }} />
                  </Col>
               </Row>
               <div className={classes.countTitle}>
                  <Row>
                     <Col lg={8}>
                     </Col>
                     <Col lg={2}>
                        Total:
                     </Col>
                     <Col lg={2}>
                        <span className={classes.countNumber}>${totalPrice}</span>
                     </Col>
                  </Row>
               </div>
            </div>
         </Col>
         <Col xs={4}>
            <div className={classes.orderWrapper}>
               <div className={classes.topTitle}>
                  Order Summary
               </div>
               <div className={classes.paymentWrapper}>
                  <div >
                     <TextField
                        label=""
                        placeholder="Email"
                        InputLabelProps={{
                           classes: {
                              root: classes.cssLabel,
                              focused: classes.cssFocused,
                           },
                        }}
                        InputProps={{
                           classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                           },
                           inputMode: "numeric"
                        }}
                        className={classes.textField}
                        variant="outlined"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"

                        fullWidth
                     />
                  </div>
                  <div style={{ marginTop: -20 }}>
                     <TextField
                        label=""
                        placeholder="Cupon"
                        InputLabelProps={{
                           classes: {
                              root: classes.cssLabel,
                              focused: classes.cssFocused,
                           },
                        }}
                        InputProps={{
                           classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                           },
                           inputMode: "numeric"
                        }}
                        className={classes.textField}
                        variant="outlined"
                        onChange={e => setCupon(e.target.value)}
                        value={cupon}
                        type="text"
                        fullWidth
                     />
                  </div>
               </div>

               <div className={classes.paymentWrapper}>
                  <div className={classes.paymentTitle} style={{ marginTop: -30 }}>
                     Payment method:
                  </div>
                  <div style={{ marginLeft: 12 }}>
                     <FormGroup>
                        <FormControlLabel style={{ color: '#fff' }} control={<Checkbox style={{ color: '#fff' }} label="Label" icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked />} label="Credit cart (Visa, Mastercard), Apple Pay, Google Pay" />
                        <FormControlLabel style={{ color: '#fff' }} control={<Checkbox style={{ color: '#fff' }} label="Label" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="QIWI | Яндекс Деньги" />
                        <FormControlLabel style={{ color: '#fff' }} control={<Checkbox style={{ color: '#fff' }} label="Label" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="PayPal" />
                     </FormGroup>
                  </div>
               </div>

               <div className={classes.paymentWrapper} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className={classes.paymentTitle} style={{ marginTop: -30 }}>
                     Total:
                  </div>
                  <div className={classes.paymentTitle} style={{ marginTop: -30 }}>
                     ${totalPrice}
                  </div>
               </div>
               <div style={{ marginTop: -30, marginLeft: 40, marginRight: 30, paddingBottom: 40 }}>
                  <Button variant="contained" fullWidth color="primary"  >
                     Checkout
                  </Button>
               </div>

            </div>
         </Col>
      </Row>
   </div >
})




const BasketHolder = observer(() => {
   const classes = useStyles()
   const { user, courseBasket } = useContext(Context);
   const [basket, setBasket] = useState([]);
   const [loading, setLoading] = useState(false);
   const [, updateState] = React.useState();
   const forceUpdate = React.useCallback(() => updateState({}), []);
   const history = useHistory();


   useEffect(async () => {
      setLoading(true)
      try {
         const id = await user.getUserId()
         if (id) {
            await courseBasket.getBasket(id)
         }
         const candidate = courseBasket.getBasketActual()
         setBasket(candidate)
         setLoading(false)
      } catch (error) {
         console.log(error)
      }
      finally {
         setLoading(false)
      }
   }, [courseBasket, user]);


   const handleRemove = async (id) => {
      try {
         console.log(id)
         await courseBasket.emptyBasket(id);
         const idUser = await user.getUserId()
         if (idUser) {
            await courseBasket.getBasket(idUser)
         }
         const candidate = courseBasket.getBasketActual()
         setBasket(candidate);
         console.log(candidate);
         console.log(basket);
         forceUpdate()
      } catch (error) {
         console.log(error)
      }
   }


   if (loading) {
      return <div>
         loading
      </div>
   }


   return (
      <div>
         <div >
            <Container fluid="xl" >
               <Row>
                  <Col xs={11} className={classes.titleRowTop} >
                     Your cart
                  </Col>
                  <Col xs={1} className={classes.closeRowTop}>
                     <Button type="button" varian="outlined" onClick={() => history.goBack()}> <img src={close} alt="" /> </Button>
                  </Col>
               </Row>
            </Container>
         </div>
         <div className={classes.bodyCart}>
            <Container fluid="xl" >
               {
                  (basket.length === 0 || basket === undefined) ? <EmptyCart /> : <ProductCart handleRemove={handleRemove} basket={basket} />
               }
            </Container>
         </div>
      </div>

   );
})






function Basket() {
   const classes = useStyles()
   const { user } = useContext(Context);

   if (!user.isAuth) {
      return <div>
         <Page404 />
      </div>
   }

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className={classes.root}>
            <HeaderCabinet />
            {
               (user.isAuth) ? <BasketHolder /> : ''
            }
         </div >
      </motion.div >
   );
}

export default observer(Basket);