import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
   root: {
      minHeight: 200,
   },
   fab: {
      position: 'absolute',

   },
   fabGreen: {

   },

   background: {
      backgroundColor: '#141311',
      color: '#7D7D7D'

   },

   link: {
      color: '#7D7D7D',
      margin: 12,
      paddingBottom: 12

   },


   links: {
      textAlign: 'center'
   },


}));

const dudUrl = '#'



function FooterLogin() {
   const classes = useStyles()

   return (
      <footer>

         <div className={classes.background}>
            <Container fluid="xxl" >
               <Row>
                  <Col className={classes.links}>
                     <Link href={dudUrl} className={classes.link}>
                        О нас
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        О лекторах
                     </Link>
                  </Col>
                  <Col className={classes.links}>

                     <Link href={dudUrl} className={classes.link}>
                        Видеокурсы
                     </Link>
                     <Link href={dudUrl} className={classes.link}>
                        Мероприятия
                     </Link>

                     <Link href={dudUrl} className={classes.link}>
                        Сотрудничество
                     </Link>
                  </Col>
                  <Col className={classes.links}>


                     <Link href={dudUrl} className={classes.link}>
                        Политика конфиденциальности
                     </Link>
                  </Col>

                  <Col className={classes.links}>

                     <Link href={dudUrl} className={classes.link}>
                        Подкасты
                     </Link>
                  </Col>

               </Row>
               <Row>
                  <Col className={classes.links}>
                     © Copyright 2021 Начало Жизни
                  </Col>
               </Row>
            </Container>
         </div>
      </footer>
   );
}

export default FooterLogin;