import { Hidden, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import prev from '../assets/Kids/prev.png'
import family from '../assets/Kids/family.png'
import kids from '../assets/Kids/kids.png'
import draw from '../assets/Kids/draw.png'
import talk from '../assets/Kids/talk.png'
import edu from '../assets/Kids/edu.png'
import exercise from '../assets/CoursesMini/Kids/exercise.png'
import forParents from '../assets/CoursesMini/Kids/forParents.png'
import creative from '../assets/CoursesMini/Kids/creative.png'



import arrowDown from '../assets/AboutUs/arrowDown.png'
import mapBg from '../assets/AboutUs/mapBg.png'
import SliderLeader from '../components/MainPage/SliderLeader';

import MethodsOfLections from '../assets/CoursesMini/Kids/MethodsOfLections.png'
import UAnna from '../assets/CoursesMini/Kids/UAnna.png'
import OVoronova from '../assets/CoursesMini/Kids/OVoronova.png'

import OneCourse from '../components/OneCourse';
import DataTabsAll from '../components/DataTabsAll';
import CallSection from '../components/CallSection';


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
      color: '#535353',
      marginBottom: 40
   },

   sliderTitle: {
      textAlign: 'center',
      marginTop: 70,
      marginBottom: 30,
      fontSize: 32,
      color: '#696969',
      fontWeight: 900,
      fontFamily: 'Roboto Slab',
      fontStyle: 'normal',
   },

   buttonMain: {
      width: 210, margin: 10
   },


   baloon: {
      marginBottom: 100
   },
   header: {

   },
   cardHolder: {
      background: '#6FDEEB',
      borderRadius: 10,
      paddingTop: 5,
      height: '40vh',
      minHeight: 340
   },

   numberCard: {
      marginLeft: 20,
      width: 34,
      height: 34,
      fontSize: 23,
      background: '#fff',
      fontWeight: 900,
      textAlign: 'center',
      borderRadius: '50%'
   },

   cardTitle: {
      fontSize: 16,
      fontWeight: 900,
      marginBottom: 10,
      padding: 5
   },

   cardSubtitle: {
      fontSize: 12,
      padding: 5,
      fontWeight: 300,
   },

   decoratrionTitle: {
      fontWeight: 900,
      backgroundColor: '#6FDEEB',
      color: '#fff'
   },
})
)


function Kids() {
   const classes = useStyles()
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div>
            <div className={classes.root}>
               <Header />
               <div className={classes.header}>
                  <Container>
                     <Row>
                        <Col xl={6} style={{ marginTop: 120 }}>
                           <div className={classes.titlePage}>
                              <b> Центр раннего развития</b>,
                              уроки для <b>родителей</b>
                              и их <b>детей</b>
                           </div>

                           <ul >
                              <li style={{ marginBottom: 10 }}>
                                 Мы нацелены на целостное развития по пяти сферам личности ребенка: физическая,эмоциональная, интеллектуальная и социальная.
                              </li>
                              <li>
                                 Именно родитель оказывает на ребенка наибольшее влияние! Наши уроки для детей в связке с уроками для родителей.
                              </li>
                           </ul>
                        </Col>
                        <Col xl={1} >

                        </Col>
                        <Hidden smDown>
                           <Col xl={5} style={{ marginTop: 120 }} className={classes.baloon}>
                              <img src={prev} alt="Logo" style={{
                                 width: 400,
                                 height: 400,

                              }} />

                           </Col>
                        </Hidden>
                     </Row>
                     <Row>
                        <Col xl={1} >
                        </Col>
                        <Col xl={2}>
                           <div className={classes.cardHolder}>
                              <div className={classes.numberCard}>  1</div>
                              <img style={{ marginTop: -30 }} src={family} alt={'family'} />
                              <div className={classes.cardTitle}>
                                 Мы проводим уроки не только для детей
                              </div>
                              <div className={classes.cardSubtitle}>
                                 Именно родитель оказывает на ребенка наибольшее влияние! Наши уроки для детей в связке с уроками для родителей.
                              </div>

                           </div>
                        </Col>
                        <Col xl={2} >
                           <div className={classes.cardHolder}>
                              <div className={classes.numberCard}>  2</div>
                              <img style={{ marginTop: -50, marginLeft: 10 }} src={kids} alt={'family'} />
                              <div className={classes.cardTitle}>
                                 Мы за целостное развитие
                              </div>
                              <div className={classes.cardSubtitle}>
                                 Ребенок- это не только его знания по математике. Ребенок- это здоровье тела, душа, общение со свертниками,
                                 его эмоции.
                              </div>

                           </div>
                        </Col>
                        <Col xl={2}>
                           <div className={classes.cardHolder}>
                              <div className={classes.numberCard}>  3</div>
                              <img style={{ marginTop: -30 }} src={talk} alt={'family'} />
                              <div className={classes.cardTitle}>
                                 Мы готовы делиться подходами
                              </div>
                              <div className={classes.cardSubtitle}>
                                 Наш центр успешно существует почти 10 лет. За это время мы разработали множество авторских методик и готовы ими с вами поделиться.
                              </div>

                           </div>
                        </Col>
                        <Col xl={2}>
                           <div className={classes.cardHolder}>
                              <div className={classes.numberCard}>  4</div>
                              <img style={{ marginTop: -30 }} src={draw} alt={'family'} />
                              <div className={classes.cardTitle}>
                                 Мы объединили разные подходы
                              </div>
                              <div className={classes.cardSubtitle}>
                                 Мы развиваем креативность по европейским методикам, а интеллект по российским. Взяли лучшее от всех!
                              </div>

                           </div>
                        </Col>
                        <Col xl={2}>
                           <div className={classes.cardHolder}>
                              <div className={classes.numberCard}>  5</div>
                              <img style={{ marginTop: -50, marginLeft: 50 }} src={edu} alt={'family'} />
                              <div className={classes.cardTitle}>
                                 Мы говорим о духовности
                              </div>
                              <div className={classes.cardSubtitle}>
                                 Ошибочно полагать, что ребенок не задается глубокими вопросами. Мы попробуем вместе на них ответить.
                              </div>

                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>


               <Container>

                  <Row>
                     <Col>
                        <div className={classes.sliderTitle}> Популярные продукты и курсы:</div>
                     </Col>
                  </Row>
                  <Row style={{ marginTop: 80 }}>
                     <Col xs={2}>
                     </Col>
                     <Col >
                        <div>
                           <OneCourse id={12} title='“Методы составления
                     детских уроков”' bgColor='#E2F5F7' label="Urban Kids" lector='Анна Убейволк' positionLector="Методист" tags='psychology' price={100}
                              imgLector={UAnna} img={MethodsOfLections}
                              description="Мы соединили западный подход к развитию креативности ребенка и восточно-европейский подход к развитию мышления. Покажем, как выглядит хороший дидактический материал, и поделимся авторскими разработками." accentColor='#3BBAC8' />
                        </div>
                     </Col>
                     <Col >
                        <div>
                           <OneCourse id={13} title='“Сборник упражнений для детей”' bgColor='#E2F5F7' label="Urban Kids" lector='Ольга Воронова' positionLector="Методист" tags='psychology' price={100}
                              imgLector={OVoronova} img={exercise} canBeInCart={false}
                              description="Сборник упражнений для детей по развитию пяти сфер личности ребенка: эмоциональная, физическая, социальная, интеллектуальная, духовная." accentColor='#3BBAC8' />

                        </div>
                     </Col>
                     <Col xs={2}>
                     </Col>
                  </Row>
               </Container>

               <Container>

                  <Row>
                     <Col>
                        <div className={classes.sliderTitle}> Все от <span className={classes.decoratrionTitle}> Urban Kids: </span>  </div>
                     </Col>
                  </Row>
                  <Row>

                     <Col>
                        <DataTabsAll color='#3BBAC8' bgColor='#E2F5F7' allCiurses={<div>

                           <Row>
                              <Col xs={4}>
                                 <OneCourse id={12} title='“Методы составления
                     детских уроков”' bgColor='#E2F5F7' label="Urban Kids" lector='Анна Убейволк' positionLector="Методист" tags='psychology' price={100}
                                    imgLector={UAnna} img={MethodsOfLections}
                                    description="Мы соединили западный подход к развитию креативности ребенка и восточно-европейский подход к развитию мышления. Покажем, как выглядит хороший дидактический материал, и поделимся авторскими разработками." accentColor='#3BBAC8' />

                              </Col>
                              <Col xs={4} >
                                 <OneCourse id={13} title='“Сборник упражнений для детей”' bgColor='#E2F5F7' label="Urban Kids" lector='Ольга Воронова' positionLector="Методист" tags='psychology' price={100}
                                    imgLector={OVoronova} img={exercise} canBeInCart={false}
                                    description="Сборник упражнений для детей по развитию пяти сфер личности ребенка: эмоциональная, физическая, социальная, интеллектуальная, духовная." accentColor='#3BBAC8' />

                              </Col>
                              <Col xs={4} >
                                 <OneCourse id={15} title='Упражнения “Родитель+ребенок”' bgColor='#E2F5F7' label="Urban Kids" lector='Ольга Воронова' positionLector="Методист" tags='psychology' price={100}
                                    imgLector={OVoronova} img={forParents} canBeInCart={false}
                                    description="Родители имеют самое большое влияние на своих детей. Только совместная деятельность родителей и детей сможет принести результаты." accentColor='#3BBAC8' />

                              </Col>
                           </Row>
                           <Row>
                              <Col xs={4}>
                                 <OneCourse id={14} title='“Творческие задания для детей”' bgColor='#E2F5F7' label="Urban Kids" lector='Анна Убейволк' positionLector="Методист" tags='psychology' price={100}
                                    imgLector={UAnna} img={creative}
                                    description="Представляем вам авторские разработки по развитию детской креативности. В сборник входят задания для распечатки и видео-объяснения к ним." accentColor='#3BBAC8' />

                              </Col>
                           </Row>
                        </div>} freeCouses={<Row>
                           <Col xs={4} >
                              <OneCourse id={13} title='“Сборник упражнений для детей”' bgColor='#E2F5F7' label="Urban Kids" lector='Анна Убейволк' positionLector="Методист" tags='psychology' price={100}
                                 imgLector={UAnna} img={exercise} canBeInCart={false}
                                 description="Сборник упражнений для детей по развитию пяти сфер личности ребенка: эмоциональная, физическая, социальная, интеллектуальная, духовная." accentColor='#3BBAC8' />

                           </Col>
                           <Col xs={4} >
                              <OneCourse id={15} title='Упражнения “Родитель+ребенок”' bgColor='#E2F5F7' label="Urban Kids" lector='Анна Убейволк' positionLector="Методист" tags='psychology' price={100}
                                 imgLector={UAnna} img={forParents} canBeInCart={false}
                                 description="Родители имеют самое большое влияние на своих детей. Только совместная деятельность родителей и детей сможет принести результаты." accentColor='#3BBAC8' />

                           </Col>
                        </Row>} />
                     </Col>
                  </Row>
               </Container>


               <Container>
                  <Row>
                     <Col>
                        <div className={classes.sliderTitle}> Почему мы? </div>
                     </Col>
                  </Row>

                  <Row style={{ color: '#3BBAC8' }}>
                     <Col>
                        Разнообразные подходы
                     </Col>
                     <Col>
                        Профессиональные педагоги
                     </Col>
                     <Col>
                        Большой опыт работы с детьми
                     </Col>
                  </Row>
               </Container>
               <CallSection color='#3BBAC8' />
               <SliderLeader />
            </div>
            <Footer />
         </div >
      </motion.div >
   );
}

export default Kids;