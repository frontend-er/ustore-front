//@ts-nocheck

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { AppBar, makeStyles, Tab, Tabs, Typography, Button } from '@material-ui/core';
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

   }

}));



const EmptyCart = observer(() => {
   const classes = useStyles()

   return <div className={classes.emptyCartHolder}>
      <img src={CartEmpty} alt="..." className={classes.emptyCartPhoto} />
      <div className={classes.emptyCartTitle}>
         Your basket is empty.

      </div>
      <div className={classes.emptyCartSubtitle}>
         Maybe you should <b style={{ textDecoration: 'underline' }}> come back and have another look at our products! </b>
      </div>
      <div>
         <Button variant="contained" style={{ background: '#000', color: '#fff', marginBottom: 40 }} > Вернуться назад </Button>
      </div>

   </div>
})




const ProductCart = observer(({ basket }) => {
   const classes = useStyles()
   const { courseBasket } = useContext(Context);

   const handleRemove = async (courseId, basketId) => {
      try {
         console.log(courseId, basketId)
         await courseBasket.emptyBasket(courseId, basketId);
      } catch (error) {
         console.log(error)
      }
   }

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
                  {
                     basket.map((t) => {
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
                           <td ><Button type="button" onClick={() => handleRemove(t.courseId, t.basketId)}>x</Button></td>
                        </tr>
                     })
                  }
               </tbody>
            </Table>
         </Col>
         <Col xs={4}>
            Checkout
         </Col>
      </Row>
   </div>
})




const BasketHolder = observer(() => {
   const classes = useStyles()
   const { user, courseBasket } = useContext(Context);
   const [basket, setBasket] = useState([]);
   const [loading, setLoading] = useState(false);



   useEffect(async () => {
      setLoading(true)
      try {
         await user.setUser()
         if (user.user.id) {
            await courseBasket.getBasket(user.user.id)
         }
         setBasket(courseBasket.basket)
         setLoading(false)
      } catch (error) {
         console.log(error)
      }
      finally {
         setLoading(false)
      }
   }, [courseBasket, user]);





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
                     <img src={close} alt="" />
                  </Col>
               </Row>
            </Container>
         </div>
         <div className={classes.bodyCart}>
            <Container fluid="xl" >
               {
                  (basket.length === 0) ? <EmptyCart /> : <ProductCart basket={basket} />
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