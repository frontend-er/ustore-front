
import React, { FC, useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Button, Paper, FormControlLabel, Checkbox, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Context } from '../..';
import AllPhoto from '../../assets/MainPage/AllDirections/AllPhoto.png';
import eventLab from '../../assets/MainPage/AllDirections/eventLab.png';
import show from '../../assets/MainPage/AllDirections/show.png';
import kids from '../../assets/MainPage/AllDirections/kids.png';
import teens from '../../assets/MainPage/AllDirections/teens.png';
import youth from '../../assets/MainPage/AllDirections/youth.png';
import art from '../../assets/MainPage/AllDirections/art.png';





const useStyles = makeStyles(theme => ({

   topHead: {
      background: 'linear-gradient(97.44deg, rgba(155, 197, 62, 0.6) 1.63%, rgba(90, 187, 127, 0.6) 26.08%, rgba(59, 186, 200, 0.6) 42.7%, rgba(36, 117, 183, 0.6) 59.81%, rgba(60, 81, 162, 0.6) 75.95%, rgba(162, 60, 152, 0.6) 95.51%)',
      borderRadius: 29,
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
   },

   topHeadTitle: {
      fontFamily: 'Roboto Slab',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 43,
      lineHeight: 1.1,
      textAlign: 'right',
      letterSpacing: 0.02,
      color: '#FFFFFF',
      marginRight: 20,
      paddingTop: 55,

   },


   topHeadSubtitle: {
      fontFamily: 'Roboto Slab',
      fontStyle: 'normal',
      fontWeight: 100,
      fontSize: 22,
      lineHeight: 1.3,
      textAlign: 'right',
      letterSpacing: 0.02,
      color: '#FFFFFF',
      marginRight: 20,
      paddingTop: 45,
      width: 700

   },

   topHeadRigth: {

   },


   topHeadTitleBottom: {
      fontFamily: 'Roboto Slab',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 43,
      letterSpacing: 0.02,
      lineHeight: 1,
      color: '#FFFFFF',
      transform: 'rotate(-89.7deg)',
      height: 405,
      marginLeft: 88,
   },

   eventLab: {
      background: '#F5F5F5',
      border: '5px solid #9BC53E',
      borderRadius: 20,
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      padding: 4

   },

   eventLabName: {
      color: '#9BC53E',
      fontSize: 32,
      fontWeight: 900
   },


   urbanShow: {
      background: '#F5F5F5',
      border: '5px solid #5ABB7F',
      boxSizing: 'border-box',
      borderRadius: 20,
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      padding: 4


   },


   eventLabShow: {
      color: '#5ABB7F',
      fontSize: 32,
      fontWeight: 900
   },

   urbanKids: {
      background: '#F5F5F5',
      border: '5px solid #3BBAC8',
      boxSizing: 'border-box',
      borderRadius: 20,
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      padding: 4


   },
   eventLabKids: {
      color: '#3BBAC8',
      fontSize: 32,
      fontWeight: 900
   },


   urbanArtTherapy: {
      background: '#F5F5F5',
      border: '5px solid #8741A2',
      boxSizing: 'border-box',
      borderRadius: 20,
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      padding: 4

   },

   eventLabArtTherapy: {
      color: '#8741A2',
      fontSize: 32,
      fontWeight: 900
   },


   urbanTeens: {
      background: '#F5F5F5',
      border: '5px solid #2475B7',
      boxSizing: 'border-box',
      borderRadius: 20,
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      padding: 4

   },

   eventLabTeens: {
      color: '#2475B7',
      fontSize: 32,
      fontWeight: 900
   },


   urbanYouth: {
      background: '#F5F5F5',
      border: '5px solid #100267',
      boxSizing: 'border-box',
      borderRadius: 20,
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      padding: 4

   },


   eventLabYouth: {
      color: '#100267',
      fontSize: 32,
      fontWeight: 900
   },

   eventLabWrapper: {
      boxSizing: 'border-box',

   },
   description: {
      fontSize: 15
   }


}));

function AllDirections() {

   const classes = useStyles()
   const { user } = useContext(Context);
   return (
      <div>
         <Container fluid="xxl">
            <Hidden mdDown>

               <Row >
                  <Col>
                     <div className={classes.topHead}>

                        <div>
                           <img src={AllPhoto} alt="AllPhoto" style={{ width: 1400, maxWidth: '100%', maxHeight: '100%' }} />
                        </div>

                        <div className={classes.topHeadRigth}>
                           <div className={classes.topHeadTitle}>
                              Получай качественное <br /> образование

                           </div>

                           <div className={classes.topHeadSubtitle} >
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the

                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Hidden>

            <Row >
               <Hidden mdDown>

                  <Col xl={1}>
                     <div className={classes.topHead}>
                        <div className={classes.topHeadTitleBottom}>
                           CATEGORIES
                        </div>
                     </div>
                  </Col>
               </Hidden>

               <Col>

                  <Row>
                     <Col className={classes.eventLabWrapper} xl={4}>
                        <div className={classes.eventLab} >
                           <div>
                              <div className={classes.eventLabName}>
                                 Event Lab

                              </div>
                              <div className={classes.description}>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a
                              </div>
                           </div>
                           <div>
                              <Button variant="text" style={{ marginTop: 5, color: '#9BC53E', marginLeft: 15, flex: 1, fontSize: 22 }}>
                                 Больше
                              </Button>
                              <div>
                                 <img src={eventLab} alt="eventLab" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 40 }} />
                              </div>
                           </div>
                        </div>

                     </Col>
                     <Col className={classes.eventLabWrapper} xl={4}>
                        <div className={classes.urbanShow}>
                           <div>
                              <div className={classes.eventLabShow}>
                                 Show

                              </div>
                              <div className={classes.description}>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a
                              </div>
                           </div>


                           <div>
                              <Button variant="text" style={{ marginTop: 5, color: '#5ABB7F', marginLeft: 15, flex: 1, fontSize: 22 }}>
                                 Больше
                              </Button>
                              <div>
                                 <img src={show} alt="eventLab" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 40 }} />
                              </div>
                           </div>
                        </div>

                     </Col>
                     <Col className={classes.eventLabWrapper} xl={4}>
                        <div className={classes.urbanKids}>
                           <div>

                              <div className={classes.eventLabKids}>
                                 Kids

                              </div>
                              <div className={classes.description}>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a
                              </div>
                           </div>


                           <div>
                              <Button variant="text" style={{ marginTop: 5, color: '#3BBAC8', marginLeft: 15, flex: 1, fontSize: 22 }}>
                                 Больше
                              </Button>
                              <div>
                                 <img src={kids} alt="eventLab" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 40, marginLeft: 15 }} />
                              </div>
                           </div>
                        </div>

                     </Col>
                  </Row>
                  <Row>

                     <Col className={classes.eventLabWrapper} xl={4}>
                        <div className={classes.urbanTeens}>
                           <div>

                              <div className={classes.eventLabTeens}>
                                 Teens

                              </div>
                              <div className={classes.description}>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a
                              </div>
                           </div>

                           <div>
                              <Button variant="text" style={{ marginTop: 5, color: '#2475B7', marginLeft: 15, flex: 1, fontSize: 22 }}>
                                 Больше
                              </Button>
                              <div>
                                 <img src={teens} alt="eventLab" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 30, marginLeft: 15 }} />
                              </div>
                           </div>
                        </div>

                     </Col>
                     <Col className={classes.eventLabWrapper} xl={4}>

                        <div className={classes.urbanYouth}>
                           <div>

                              <div className={classes.eventLabYouth}>
                                 Youth

                              </div>
                              <div className={classes.description}>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a
                              </div>
                           </div>

                           <div>
                              <Button variant="text" style={{ marginTop: 5, color: '#100267', marginLeft: 15, flex: 1, fontSize: 22 }}>
                                 Больше
                              </Button>
                              <div>
                                 <img src={youth} alt="eventLab" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 30 }} />
                              </div>
                           </div>
                        </div>

                     </Col>
                     <Col className={classes.eventLabWrapper} xl={4}>
                        <div className={classes.urbanArtTherapy}>
                           <div>

                              <div className={classes.eventLabArtTherapy}>
                                 Art-Therapy

                              </div>
                              <div className={classes.description}>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a
                              </div>
                           </div>

                           <div>
                              <Button variant="text" style={{ marginTop: 5, color: '#8741A2', marginLeft: 15, flex: 1, fontSize: 22 }}>
                                 Больше
                              </Button>
                              <div>
                                 <img src={art} alt="eventLab" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 30 }} />
                              </div>
                           </div>
                        </div>

                     </Col>
                  </Row>
               </Col>


            </Row>



         </Container>
      </div >
   );
}

export default AllDirections;