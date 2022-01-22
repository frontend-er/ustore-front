// @ts-nocheck

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Button, Paper, FormControlLabel, Checkbox, makeStyles, Hidden } from '@material-ui/core';
import burger from '../assets/MainPage/mainPhoto.png';



const useStyles = makeStyles(theme => ({
   titlePage: {
      marginTop: 100,
      fontSize: 40,
      lineHeight: '50px',
      alignItems: 'center',
      letterSpacing: '-0.017em',
      color: '#535353'
   },


   buttonMain: {
      width: 210, margin: 10
   },


   baloon: {
      marginBottom: 100
   }


}));



function MainView() {

   const classes = useStyles()
   return (
      <Container fluid="xl" style={{ marginTop: 100 }}>
         <Row>
            <Col>
               <div className={classes.titlePage}>
                  Здесь <b>каждый</b> найдет
                  для <b>себя</b> что-то
                  полезное
               </div>

               <ul>
                  <li>
                     Изучайте новое, пока завтракаете, едете на работу или принимаете ванну

                  </li>
                  <li>
                     Смотрите нас онлайн – на сайте и в приложении
                  </li>
                  <li>
                     Или слушайте вживую в центре

                  </li>
               </ul>

               <Button variant="contained" color="primary" className={classes.buttonMain}>
                  Смотреть расписание

               </Button>

               <Button variant="text" color="primary" className={classes.buttonMain}>
                  Видеокурсы
               </Button>
            </Col>
            <Col xl={1} >

            </Col>

            <Hidden smDown>
               <Col className={classes.baloon}>
                  <img src={burger} alt="Logo" style={{
                     width: 408,
                     height: 523,

                  }} />

               </Col>
            </Hidden>
         </Row>

      </Container >

   );
}

export default MainView;