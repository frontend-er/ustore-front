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
import bgBlur from '../assets/Teens/bgBlur.png'
import bgBlurSmall from '../assets/Teens/bgBlurSmall.png'
import arrowQ from '../assets/Teens/arrowQ.png'
import SliderLeader from '../components/MainPage/SliderLeader';
import KidsSection from '../assets/Teens/Kids.png';
import TeensSection from '../assets/Teens/teensSection.png';
import YouthSection from '../assets/Teens/youthSection.png';
import CallSection from '../components/CallSection';
import teens from '../assets/Teens/teens.png';
import boy from '../assets/Teens/boy.png';
import OneCourse from '../components/OneCourse';
import HeaderBgTop from '../assets/CoursesMini/Teens/Top/HeaderBgTop.png';
import HeaderBgHight from '../assets/CoursesMini/Teens/Hight/HeaderBgHight.png';
import HeaderBgUp from '../assets/CoursesMini/Teens/Up/HeaderBg.png';
import SSemaev from '../assets/CoursesMini/Teens/SSemaev.png';
import VKapernauli from '../assets/CoursesMini/Teens/VKapernauli.png';






const useStyles = makeStyles(() => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5'
   },
   titlePage: {
      fontSize: 54,
      lineHeight: '90px',
      alignItems: 'center',
      letterSpacing: '-0.017em',
      color: '#000',
      marginBottom: 40,
      textAlign: 'center',
      fontWeight: 900,

   },

   subTitlePage: {
      fontSize: 38,
      lineHeight: '50px',
      alignItems: 'center',
      letterSpacing: '-0.017em',
      color: '#000',
      marginBottom: 40,
      textAlign: 'center',
      fontWeight: 400,


   },

   blueText: {
      fontWeight: 900,
      color: '#2475B7',

   },
   youthAproach: {
      border: '1px solid #2475B7'
   },

   titleSection: {
      fontWeight: 900,
      fontSize: 48,
      textAlign: 'center',
      color: '#fff',
      marginTop: 20,
      marginBottom: 40
   },

   cardHolder: {
      background: '#2475B7',
      borderRadius: 10,
      paddingTop: 5,
      height: '40vh',
      minHeight: 340,
      color: '#fff'
   },

   numberCard: {
      marginLeft: 20,
      width: 34,
      height: 34,
      fontSize: 23,
      background: '#fff',
      fontWeight: 900,
      textAlign: 'center',
      color: '#000',
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

   numberList: {
      fontSize: 64,
      fontWeight: 900,
      color: '#2475B7',
      backgroundImage: `url(${bgBlurSmall})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundPosition: 'bottom'
   },

   listWhy: {
      fontSize: 23,
      textAlign: 'left'
   },
   decoratrionTitle: {
      fontWeight: 900,
      backgroundColor: '#2475B7',
      color: '#fff'
   },

   decoratedNumbers: {
      fontFamily: 'Londrina Outline',
      fontSize: 120,
      color: '#2475B7',
      lineHeight: 1.2
   },


   leaderName: {
      fontSize: 26,
      color: '#000',
      fontWeight: 900,
      marginBottom: 20
   },




   leaderPosition: {
      fontSize: 16,
      color: '#000',
      fontWeight: 600,
      marginBottom: 20,

   },
   leaderDescription: {
      fontSize: 16,
      color: '#000',
      marginBottom: 30,
      fontWeight: 300,
   },


   leaderQuote: {
      fontSize: 20,
      lineHeight: 1.3,
      color: '#000',
      fontWeight: 200,
      marginBottom: 70,

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




})
)


function Teens() {
   const classes = useStyles()
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div>
            <div className={classes.root}>
               <Header />
               <div className={classes.header}>
                  <Container>
                     <Row style={{
                        backgroundImage: `url(${bgBlur})`,
                        backgroundRepeat: 'no-repeat, repeat',
                        backgroundPosition: 'center'
                     }}>
                        <Col>
                        </Col>

                        <Col xl={6} style={{ marginTop: 130 }}>
                           <div style={{ textAlign: 'center' }}>
                              Образовательный центр
                           </div>
                           <div className={classes.titlePage}>
                              <b> Urban Teens </b>
                              <div className={classes.subTitlePage}>
                                 Общение, образование постановка личных целей и позитивная атмосфера
                              </div>
                           </div>


                        </Col>

                        <Col>
                        </Col>
                     </Row>

                     <Row style={{ marginTop: 30, marginBottom: 80 }} >
                        <Col>
                        </Col>
                        <Col sm={2}>
                           <div className={classes.blueText}>
                              Офлайн программы:
                           </div>
                           <div>
                              и мероприятия
                           </div>
                        </Col>
                        <Col sm={2}>
                           <div className={classes.blueText} >
                              Еженедельно:
                           </div>
                           <div>
                              в 17:00
                           </div>
                        </Col>
                        <Col sm={2}>
                           <div className={classes.blueText}>
                              Для подростков:
                           </div>
                           <div>
                              до 18 лет
                           </div>
                        </Col>
                        <Col sm={2}>
                           <div className={classes.blueText}>
                              Курсы:
                           </div>
                           <div>
                              более 10 програм
                           </div>
                        </Col>
                        <Col>
                        </Col>
                     </Row>



                     <Container>
                        <Row style={{ padding: 60 }}>
                           <Col lg={2}  >

                           </Col>
                           <Col lg={8}  >
                              <div className={classes.youthAproach}>
                                 <Row>
                                    <Col xs={1}>
                                    </Col>
                                    <Col>
                                       <img src={teens} alt='' />
                                    </Col>
                                    <Col xs={6} style={{ textAlign: 'left', margin: 10 }}>
                                       Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и усовершенствуйте свои социальные навыки всего за 20 минут в день.                                    </Col>
                                    <Col xs={2}>
                                    </Col>
                                 </Row>
                              </div>
                           </Col>
                           <Col lg={2}>

                           </Col>
                        </Row>
                     </Container>


                     <Container style={{ marginBottom: 90 }}>
                        <Row>
                           <Col xs={3}>

                           </Col>
                           <Col >
                              <Row style={{ alignItems: 'center' }}>
                                 <Col xs={1} className={classes.numberList} >
                                    1
                                 </Col>
                                 <Col className={classes.listWhy}>
                                    Общение с <span className={classes.blueText}> опытными </span>  преподавателями
                                 </Col>
                              </Row>
                              <Row style={{ alignItems: 'center' }}>
                                 <Col xs={1} className={classes.numberList} >
                                    2
                                 </Col>
                                 <Col className={classes.listWhy}>
                                    Тест на  <span className={classes.blueText}>профориентацию </span> и  <span className={classes.blueText}>помощь </span>  в определении призвания

                                 </Col>
                              </Row>
                              <Row style={{ alignItems: 'center' }}>
                                 <Col xs={1} className={classes.numberList} >
                                    3
                                 </Col>
                                 <Col className={classes.listWhy}>
                                    Общение с <span className={classes.blueText}> опытными </span>  преподавателями
                                 </Col>
                              </Row>
                              <Row style={{ alignItems: 'center' }}>
                                 <Col xs={1} className={classes.numberList} >
                                    4
                                 </Col>
                                 <Col className={classes.listWhy}>
                                    Общение с <span className={classes.blueText}> опытными </span>  преподавателями
                                 </Col>
                              </Row>
                           </Col>
                           <Col xs={3}>

                           </Col>
                        </Row>





                     </Container>


                     <Container style={{ marginBottom: 80 }}>
                        <Row>
                           <Col>
                              <div className={classes.sliderTitle}> Что <span className={classes.decoratrionTitle}> изменится: </span>  </div>
                           </Col>
                        </Row>
                        <Row style={{ alignItems: 'center' }}>
                           <Col xs={8}>
                              <Row style={{ marginTop: 10, marginBottom: 10 }}>
                                 <Col lg={1}  >

                                 </Col>
                                 <Col lg={10}  >
                                    <div className={classes.youthAproach}>
                                       <Row style={{ alignItems: 'center' }}>
                                          <Col xs={1}>
                                          </Col>
                                          <Col className={classes.decoratedNumbers}>
                                             01
                                          </Col>
                                          <Col xs={8} style={{ textAlign: 'left' }}>
                                             Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и усовершенствуйте свои социальные навыки всего за 20 минут в день.
                                          </Col>
                                          <Col xs={1}>
                                          </Col>
                                       </Row>
                                    </div>
                                 </Col>
                                 <Col lg={1}>

                                 </Col>
                              </Row>
                              <Row style={{ marginTop: 10, marginBottom: 10 }}>
                                 <Col lg={1}  >

                                 </Col>
                                 <Col lg={10}  >
                                    <div className={classes.youthAproach}>
                                       <Row style={{ alignItems: 'center' }}>
                                          <Col xs={1}>
                                          </Col>
                                          <Col className={classes.decoratedNumbers}>
                                             02
                                          </Col>
                                          <Col xs={8} style={{ textAlign: 'left' }}>
                                             Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и усовершенствуйте свои социальные навыки всего за 20 минут в день.
                                          </Col>
                                          <Col xs={1}>
                                          </Col>
                                       </Row>
                                    </div>
                                 </Col>
                                 <Col lg={1}>

                                 </Col>
                              </Row>
                              <Row style={{ marginTop: 10, marginBottom: 10 }}>
                                 <Col lg={1}  >

                                 </Col>
                                 <Col lg={10}  >
                                    <div className={classes.youthAproach}>
                                       <Row style={{ alignItems: 'center' }}>
                                          <Col xs={1}>
                                          </Col>
                                          <Col className={classes.decoratedNumbers}>
                                             03
                                          </Col>
                                          <Col xs={8} style={{ textAlign: 'left' }}>
                                             Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и усовершенствуйте свои социальные навыки всего за 20 минут в день.
                                          </Col>
                                          <Col xs={1}>
                                          </Col>
                                       </Row>
                                    </div>
                                 </Col>
                                 <Col lg={1}>

                                 </Col>
                              </Row>
                           </Col>
                           <Col xs={4}>
                              <img style={{ width: 390 }} src={boy} alt='' />
                           </Col>
                        </Row>
                     </Container>

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






               <Container style={{ paddingBottom: 90, marginTop: 100 }}>
                  <Row>
                     <Col xs={7}>
                        <div className={classes.sliderTitle} style={{ textAlign: 'left' }}>  Все от <span className={classes.decoratrionTitle} > Urban Teens:  </span>  </div>
                        <div className={classes.leaderName}>
                           <span className={classes.decoratrionTitle}>“Up”</span> Суббота в 12:00
                        </div>
                        <div className={classes.leaderPosition}>
                           t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially un
                        </div>
                        <div className={classes.leaderDescription}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</div>
                        <Row>
                           <Col xs={2} style={{ textAlign: 'right' }}>
                              <img src={arrowQ} alt="" />
                           </Col>

                           <Col className={classes.leaderQuote}>
                              Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I is simply dummy text of the printing and typesetting industry.
                           </Col>
                        </Row>


                     </Col>
                     <Col xs={5} style={{ marginTop: 30 }}>
                        <img style={{ width: '100%' }} src={KidsSection} alt="" />
                     </Col>

                  </Row>

                  <Row>
                     <Col xs={5} style={{ marginTop: 30 }}>
                        <img style={{ width: '100%' }} src={TeensSection} alt="" />
                     </Col>
                     <Col xs={7}>
                        <div className={classes.sliderTitle} style={{ textAlign: 'left' }}>  </div>
                        <div className={classes.leaderName}>
                           <span className={classes.decoratrionTitle}>“High”</span> Воскресенье в 11:00
                        </div>
                        <div className={classes.leaderPosition}>
                           t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially un
                        </div>
                        <div className={classes.leaderDescription}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</div>
                        <Row>
                           <Col xs={2} style={{ textAlign: 'right' }}>
                              <img src={arrowQ} alt="" />
                           </Col>

                           <Col className={classes.leaderQuote}>
                              Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I is simply dummy text of the printing and typesetting industry.
                           </Col>
                        </Row>


                     </Col>


                  </Row>

                  <Row>

                     <Col xs={7}>
                        <div className={classes.sliderTitle} style={{ textAlign: 'left' }}>  </div>
                        <div className={classes.leaderName}>
                           <span className={classes.decoratrionTitle} >“Top”</span> Воскресенье в 14:00
                        </div>
                        <div className={classes.leaderPosition}>
                           t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially un
                        </div>
                        <div className={classes.leaderDescription}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</div>
                        <Row>
                           <Col xs={2} style={{ textAlign: 'right' }}>
                              <img src={arrowQ} alt="" />
                           </Col>

                           <Col className={classes.leaderQuote}>
                              Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I is simply dummy text of the printing and typesetting industry.
                           </Col>
                        </Row>


                     </Col>
                     <Col xs={5} style={{ marginTop: 30 }}>
                        <img style={{ width: '100%' }} src={YouthSection} alt="" />
                     </Col>

                  </Row>
               </Container >

               <CallSection color='#3BBAC8' />
               <SliderLeader />
            </div>
            <Footer />
         </div >
      </motion.div >
   );
}

export default Teens;