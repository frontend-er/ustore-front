import { Hidden, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import prev from '../assets/AboutUs/prev.png'
import arrowDown from '../assets/AboutUs/arrowDown.png'
import mapBg from '../assets/AboutUs/mapBg.png'
import SliderLeader from '../components/MainPage/SliderLeader';


const useStyles = makeStyles(() => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5'
   },
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
   },
   header: {

   },
   textWraper: {
      border: '4px solid #9BC53E',
      padding: 40,
      borderRadius: 20,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 1.3
   },
   textWraperValues: {
      border: '4px solid #9BC53E',
      padding: 20,
      borderRadius: 20,
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.3,
      textAlign: 'left'
   },
   textWraperRoad: {
      borderRadius: 20,
      fontWeight: 300,
      padding: 5,
      fontSize: 18,
      lineHeight: 1.3,
      color: '#fff'
   },

   textTitle: {
      fontWeight: 900,
      fontSize: 23
   },

   roadWrapper: {
      backgroundImage: `url(${mapBg})`,
      marginTop: 130,
      marginBottom: 50
   }

})
)

function AboutProject() {
   const classes = useStyles()
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div>
            <div className={classes.root}>
               <Header />
               <div className={classes.header}>
                  <Container fluid="xxl" >
                     <Row>
                        <Col xl={6} style={{ marginTop: 120 }}>
                           <div className={classes.titlePage}>
                              <b>Urban Center</b> ???????????? ?? ??????????????????????  <b>????????????????????</b> ?? <b>??????????????????????????????</b> ????????????
                           </div>

                           <ul>
                              <li>
                                 ?????????? ?????????? ?????????? ???????????????? ?????????????? ?? ???????????????????????? ????????????????, ?????? ?????? ??????????????, ?????? ?? ?????? ??????????????????.

                              </li>
                              <li>
                                 ???? ?????????????????????????? ???????????????? ?????????????????????? ??????????, ?????????????????????? ??????????, ???????????? ?????????????????????? ??????, ???????????? ??????-??????????????, ?????????????????????????????? ????????????????????????
                              </li>

                           </ul>
                        </Col>
                        <Col xl={1} >

                        </Col>
                        <Hidden smDown>
                           <Col xl={5} style={{ marginTop: 160 }} className={classes.baloon}>
                              <img src={prev} alt="Logo" style={{
                                 width: 492,
                                 height: 329,

                              }} />

                           </Col>
                        </Hidden>
                     </Row>
                     <Row>
                        <Col xl={12} style={{ textAlign: 'center' }}>
                           <img style={{ width: 53, height: 20 }} src={arrowDown} alt="" />
                        </Col>
                     </Row>
                     <Row>
                        <Col xl={12} style={{ textAlign: 'center', marginTop: -70 }}>
                           <div className={classes.titlePage}>
                              <b >???????? ????????:</b>
                           </div>
                        </Col>
                     </Row>

                     <Row>
                        <Col xl={2} >

                        </Col>
                        <Col xl={8} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraper}>
                              <span style={{ fontWeight: 900 }}>?????????????? ?? 1998 ????????</span>   ???? ???????????????????? ????????????
                              ?????????????????????? ?? ???????????????????? ?????????????? ??????  <span style={{ fontWeight: 900 }}>?????????????????????? ?? ???????????????????? ????????????.</span>
                           </div>
                        </Col>
                        <Col xl={2} >

                        </Col>
                     </Row>
                     <Row>
                        <Col xl={12} style={{ textAlign: 'center', marginTop: 40 }}>
                           <div className={classes.titlePage}>
                              <b >???????? ????????????????: </b>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col xl={1} >

                        </Col>
                        <Col xl={5} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={11}>
                                    <span className={classes.textTitle} >?????????????????? ?? ???????????????? ????????
                                    </span>
                                    <div>
                                       ?????? ????????????: ?????????? ???? ???????????? ?????????????????? ???????????????? ?????????????? ??? ????????????, ???????????????????????? ???????????? ???????????????????????? ?? ??????????????????.
                                    </div>
                                 </Col>
                                 <Col xl={1}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>


                        <Col xl={5} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={11}>
                                    <span className={classes.textTitle} >???????????? ?????? ????????

                                    </span>
                                    <div>
                                       ???????????? ???????????????? ?????? ????????????????, ?????? ?? ?????????? ?? ???????????????? ????????????????. ?????? ?????????????????????? ???? ????????????????.
                                    </div>
                                 </Col>
                                 <Col xl={1}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col xl={1} >

                        </Col>
                        <Col xl={5} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={11}>
                                    <span className={classes.textTitle} >?????????????????????? ????????????????

                                    </span>
                                    <div>
                                       ???????????? ??? ?????? ?????????????? ??????????. ?????? ?????????????? ???????????????????????? ?? ?????????????? ?????????? ????????????.
                                    </div>
                                 </Col>
                                 <Col xl={1}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>


                        <Col xl={5} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={11}>
                                    <span className={classes.textTitle} >???????????? ????????????????????


                                    </span>
                                    <div>
                                       ?????????????????????????? ?????????????? ???? ???????? ????????????, ?????????? ???????????????? ???????????????? ??????????????????????????.
                                    </div>
                                 </Col>
                                 <Col xl={1}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>
                     </Row>

                     <Row>
                        <Col xl={1} >

                        </Col>
                        <Col xl={5} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={11}>
                                    <span className={classes.textTitle} >?????????????????????? ????????????????????


                                    </span>
                                    <div>
                                       ?????????????? ???????????? ???? ???????????? ?????????????????????? ???????????????????? ?? ?????????????????? ?? ???????????????????? ???????????????? ????????????????.
                                    </div>
                                 </Col>
                                 <Col xl={1}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>
                        <Col xl={5} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={11}>
                                    <span className={classes.textTitle} >???????????????????????? ?? ??????????????
                                    </span>
                                    <div>
                                       ?????????????? ??? ??????????????????????????, ?????????????? ?????????? ???????????????? ?????????? ????????????????.
                                    </div>
                                 </Col>
                                 <Col xl={1}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>
                     </Row>

                     <Row>
                        <Col xl={12} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.titlePage}>
                              <b >?????? ???????????????? ?????????????????</b>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col xl={2} >

                        </Col>
                        <Col xl={4} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={10}>
                                    <span className={classes.textTitle} >????????????


                                    </span>
                                    <div>
                                       Chisinau MD, Moldova
                                       ????. Pan Halippa, 1
                                    </div>
                                 </Col>
                                 <Col xl={2}>
                                    d
                                 </Col>
                              </Row>
                           </div>
                        </Col>
                        <Col xl={4} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraperValues}>
                              <Row>
                                 <Col xl={10}>
                                    <span className={classes.textTitle} >????????????
                                    </span>
                                    <div>
                                       ??????????-??????????????????????,
                                       ????????????, ??????????,
                                       ???????????????? ?? ??????
                                    </div>
                                 </Col>
                                 <Col xl={2}>

                                 </Col>
                              </Row>
                           </div>
                        </Col>
                     </Row>
                  </Container>
                  <div className={classes.roadWrapper}>
                     <Container>
                        <Row>
                           <Col xs={2} style={{ textAlign: 'center', marginTop: 30 }}>
                              <div className={classes.textWraperRoad}>
                                 <Row>
                                    <Col xl={12}>
                                       <div style={{ fontSize: 100, fontWeight: 900, color: '#6f757a' }}>
                                          01
                                       </div>
                                       <div style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                                          "???????????? ??????????" ?????????????????????????? ???????????????????? ???????????? ?????????? ???????????? ???????????????????? ??????????????????.
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                           <Col xs={2} style={{ textAlign: 'center', marginTop: 30 }}>
                              <div className={classes.textWraperRoad}>
                                 <Row>
                                    <Col xl={12}>
                                       <div style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                                          "???????????? ??????????" ?????????????????????????? ???????????????????? ???????????? ?????????? ???????????? ???????????????????? ??????????????????.
                                       </div>
                                       <div style={{ fontSize: 100, fontWeight: 900, color: '#6f757a' }}>
                                          02
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                           <Col xs={2} style={{ textAlign: 'center', marginTop: 30 }}>
                              <div className={classes.textWraperRoad}>
                                 <Row>
                                    <Col xl={12}>
                                       <div style={{ fontSize: 100, fontWeight: 900, color: '#6f757a' }}>
                                          03
                                       </div>
                                       <div style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                                          "???????????? ??????????" ?????????????????????????? ???????????????????? ???????????? ?????????? ???????????? ???????????????????? ??????????????????.
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                           <Col xs={2} style={{ textAlign: 'center', marginTop: 30 }}>
                              <div className={classes.textWraperRoad}>
                                 <Row>
                                    <Col xl={12}>

                                       <div style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                                          "???????????? ??????????" ?????????????????????????? ???????????????????? ???????????? ?????????? ???????????? ???????????????????? ??????????????????.
                                       </div>
                                       <div style={{ fontSize: 100, fontWeight: 900, color: '#6f757a' }}>
                                          04
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                           <Col xs={2} style={{ textAlign: 'center', marginTop: 30 }}>
                              <div className={classes.textWraperRoad}>
                                 <Row>
                                    <Col xl={12}>
                                       <div style={{ fontSize: 100, fontWeight: 900, color: '#6f757a' }}>
                                          05
                                       </div>
                                       <div style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                                          "???????????? ??????????" ?????????????????????????? ???????????????????? ???????????? ?????????? ???????????? ???????????????????? ??????????????????.
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                           <Col xs={2} style={{ textAlign: 'center', marginTop: 30 }}>
                              <div className={classes.textWraperRoad}>
                                 <Row>
                                    <Col xl={12}>
                                       <div style={{ color: '#fff', fontSize: 14, textAlign: 'center' }}>
                                          "???????????? ??????????" ?????????????????????????? ???????????????????? ???????????? ?????????? ???????????? ???????????????????? ??????????????????.
                                       </div>
                                       <div style={{ fontSize: 100, fontWeight: 900, color: '#6f757a' }}>
                                          06
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                        </Row>

                     </Container>
                  </div>
               </div>

               <SliderLeader />
            </div>
            <Footer />
         </div >
      </motion.div >
   );
}

export default AboutProject;