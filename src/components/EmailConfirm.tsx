
import React, { FC, useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Button, Paper, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background from "../assets/Registration/registration-bg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
   root: {
      width: 330,
      marginTop: '20%',
      marginLeft: '35%'

   },

   background: {
      backgroundImage: `url(${background})`,
   },
   holder: {
      height: '100vh',
      textAlign: 'left'
   },

   loginForm: {
      color: '#fff'
   },





   checkTitile: {
      fontSize: 34,
      fontWeight: 900,
      fontFamily: "Roboto Slab",
      textAlign: 'center',

   },

   subtitle: {
      fontSize: 12,
      fontWeight: 500,
      fontFamily: "Roboto Slab",
      textAlign: 'center',
      margin: 10
   },

   buttons: {
      margin: 10
   }


}));





const EmailConfirm: FC = () => {
   const classes = useStyles()
   const { user } = useContext(Context);

   return (
      <div className={classes.background}>
         <Container fluid="xxl">
            <Row className={classes.loginForm}>
               <Col className={classes.holder}>
                  <div className={classes.root}>
                     <div className={classes.checkTitile}>
                        <div>
                           <FontAwesomeIcon icon={faEnvelope} />

                        </div>

                        Check your inbox
                     </div>
                     <div className={classes.subtitle}>
                        We sent you an activation link. Please be sure to check your
                        spam folder too.

                     </div>


                     <div className={classes.buttons}>
                        <Button variant="contained" fullWidth color="primary" onClick={() => user.logout()}>
                           Выйти
                        </Button>
                     </div>


                     <div className={classes.buttons}>
                        <Button variant="contained" fullWidth color="primary">На главную</Button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </div >
   );
};

export default observer(EmailConfirm);