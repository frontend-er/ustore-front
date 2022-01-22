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
                              <b>Urban Center</b> проект о доступности  <b>социальных</b> и <b>образовательных</b> знаний
                           </div>

                           <ul>
                              <li>
                                 Здесь можно найти полезное занятие и качественное обучение, как для ребенка, так и для взрослого.

                              </li>
                              <li>
                                 Мы предоставляем тренинги личностного роста, развивающий досуг, группы продленного дня, сессии арт-терапии, психологическую консультацию
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
                              <b >Наша цель:</b>
                           </div>
                        </Col>
                     </Row>

                     <Row>
                        <Col xl={2} >

                        </Col>
                        <Col xl={8} style={{ textAlign: 'center', marginTop: 30 }}>
                           <div className={classes.textWraper}>
                              <span style={{ fontWeight: 900 }}>Начиная с 1998 года</span>   мы предлагаем только
                              проверенные и работающие решения для  <span style={{ fontWeight: 900 }}>образования и социальных связей.</span>
                           </div>
                        </Col>
                        <Col xl={2} >

                        </Col>
                     </Row>
                     <Row>
                        <Col xl={12} style={{ textAlign: 'center', marginTop: 40 }}>
                           <div className={classes.titlePage}>
                              <b >Наши ценности: </b>
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
                                    <span className={classes.textTitle} >Доступный и понятный язык
                                    </span>
                                    <div>
                                       Наш лозунг: «Если не можешь объяснить простыми словами – значит, недостаточно хорошо разбираешься в предмете».
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
                                    <span className={classes.textTitle} >Знания для всех

                                    </span>
                                    <div>
                                       Лекции подходят как новичкам, так и людям с базовыми знаниями. Без ограничений по возрасту.
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
                                    <span className={classes.textTitle} >Продуманный сценарий

                                    </span>
                                    <div>
                                       Лекция – как хороший фильм. Без истории превращается в скучный набор фактов.
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
                                    <span className={classes.textTitle} >Полное погружение


                                    </span>
                                    <div>
                                       Рассматриваем явления со всех сторон, чтобы получить объемное представление.
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
                                    <span className={classes.textTitle} >Проверенная информация


                                    </span>
                                    <div>
                                       Готовим лекции на основе проверенных источников и сверяемся с последними научными статьями.
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
                                    <span className={classes.textTitle} >Экспертность и харизма
                                    </span>
                                    <div>
                                       Лекторы – профессионалы, которые умеют заражать своей страстью.
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
                              <b >Как проходит обучение?</b>
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
                                    <span className={classes.textTitle} >Офлайн


                                    </span>
                                    <div>
                                       Chisinau MD, Moldova
                                       ул. Pan Halippa, 1
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
                                    <span className={classes.textTitle} >Онлайн
                                    </span>
                                    <div>
                                       Аудио-конференции,
                                       лекции, курсы,
                                       подкасты и шоу
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
                                          "Начало жизни" предоставляет социальные услуги самым разным категориям населения.
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
                                          "Начало жизни" предоставляет социальные услуги самым разным категориям населения.
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
                                          "Начало жизни" предоставляет социальные услуги самым разным категориям населения.
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
                                          "Начало жизни" предоставляет социальные услуги самым разным категориям населения.
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
                                          "Начало жизни" предоставляет социальные услуги самым разным категориям населения.
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
                                          "Начало жизни" предоставляет социальные услуги самым разным категориям населения.
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