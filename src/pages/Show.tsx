//@ts-nocheck

import { Hidden, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import prev from '../assets/Show/prev.png'
import talk from '../assets/Show/talk.png'
import go from '../assets/Show/go.png'
import all from '../assets/Show/allPeople.png'
import deep from '../assets/Show/deep.png'
import talkAll from '../assets/Show/talkAll.png'
import fun from '../assets/Show/fun.png'
import blackBg from '../assets/Show/blackBg.png'
import tira from '../assets/Show/tira.png'
import jelihovscki from '../assets/Show/jelihovscki.png'
import jelihovsckiVideo from '../assets/Show/jelihovsckiVideo.png'
import arrowQ from '../assets/Show/arrowQ.png'
import AnnaU from '../assets/Show/AnnaU.png'
import KateV from '../assets/Show/KateV.png'


import izzy from '../assets/Show/IZZY.png'
import stopHam from '../assets/Show/stopHam.png'
import about from '../assets/Show/about.png'
import bgBlurSmall from '../assets/Teens/bgBlurSmall.png'
import SliderLeader from '../components/MainPage/SliderLeader';
import OneCourse from '../components/OneCourse';
import DataTabsAll from '../components/DataTabsAll';
import CallSection from '../components/CallSection';
import HeaderBgHigh from '../assets/CoursesMini/Teens/Hight/HeaderBgHight.png';
import HeaderBgTop from '../assets/CoursesMini/Teens/Top/HeaderBgTop.png';
import HeaderBgUp from '../assets/CoursesMini/Teens/Up/HeaderBg.png';
import SSemaev from '../assets/CoursesMini/Teens/SSemaev.png'
import VKapernauli from '../assets/CoursesMini/Teens/VKapernauli.png'
import Slider from 'react-slick';

import slide from '../assets/Show/slide.png'

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div className={className}
         onClick={onClick}
         style={{ ...style, display: "block", background: "linear-gradient(89.78deg, #A03CA2 3.68%, #3C51A2 17.9%, #2475B7 33.6%, #3BBAC8 57.63%, #5ABB7F 74.79%, #9BC53E 97.85%)", borderRadius: '50%', marginTop: -2, width: 19, height: 19 }}
      >
      </div>
   );
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div className={className}
         onClick={onClick}
         style={{ ...style, display: "block", background: "linear-gradient(89.78deg, #A03CA2 3.68%, #3C51A2 17.9%, #2475B7 33.6%, #3BBAC8 57.63%, #5ABB7F 74.79%, #9BC53E 97.85%)", borderRadius: '50%', marginTop: -2 }}
      >
      </div>
   );
}


const useStyles = makeStyles(() => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5'
   },
   titlePage: {
      fontSize: 45,
      lineHeight: '50px',
      alignItems: 'center',
      letterSpacing: '-0.017em',
      color: '#000',
      marginBottom: 40,
      fontWeight: 900,
      textAlign: 'right'

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
      color: '#5ABB7F',

   },
   youthAproach: {
      border: '1px solid #5ABB7F'
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
      background: '#5ABB7F',
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
      color: '#5ABB7F',
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
      backgroundColor: '#5ABB7F',
      color: '#fff'
   },

   decoratedNumbers: {
      fontFamily: 'Londrina Outline',
      fontSize: 120,
      color: '#5ABB7F',
      lineHeight: 1.2
   },





   atitudeContainer: {
      backgroundImage: `url(${blackBg})`,
      backgroundRepeat: 'no-repeat, repeat',
      marginTop: 120,
   },

   atitudeHolder: {
      height: '50vh',
      minHeight: '420px',
      textAlign: 'center'
   },

   atittudeTitle: {
      color: '#FFF',
      margin: 10,
      fontWeight: 900,
      fontSize: 24
   },

   atittudeSubTitle: {
      color: '#FFF',
      margin: 10,
      fontWeight: 400,
      fontSize: 12
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


function Show() {
   const classes = useStyles()


   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 1324,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div>
            <div className={classes.root}>
               <Header />
               <div className={classes.header}>
                  <Container>
                     <Row style={{ alignItems: 'center' }}>
                        <Hidden smDown>
                           <Col xs={5} style={{ marginTop: 120 }} >
                              <img src={prev} alt="Logo" style={{
                                 width: '100%',
                                 height: '100%',

                              }} />

                           </Col>


                        </Hidden>
                        <Col xs={2}>

                        </Col>
                        <Col xs={5} style={{ marginTop: 120 }}>
                           <div className={classes.titlePage}>
                              <span className={classes.decoratrionTitle}> Развлекательно- </span> <br />
                              образовательное шоу
                           </div>

                           <div>
                              Берем интервью у интересных личностей.
                              Показываем жизнь города изнутри.
                              Мечтайте и добивайтесь большего вместе с нашими гостями!
                           </div>
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

                     <Row style={{ alignItems: 'center' }}>


                        <Col xs={6} style={{ marginTop: 120 }}>
                           <div className={classes.titlePage}>
                              О чем мы <span className={classes.decoratrionTitle}>расказываем? </span>
                           </div>

                           <div style={{ textAlign: 'right' }}>
                              Мы берем интервью у интересных людей. Наши гости уже чего-то добились, всегда мечтают о большем, любят свою жизнь и свою работу.
                           </div>
                        </Col>
                        <Col xs={1}>

                        </Col>

                        <Hidden smDown>
                           <Col xs={4} style={{ marginTop: 120 }} >
                              <img src={talk} alt="Logo" style={{
                                 width: '100%',
                                 height: '100%',

                              }} />

                           </Col>
                        </Hidden>
                     </Row>


                     <Row >
                        <Hidden smDown>
                           <Col xs={6} style={{ marginTop: 40 }} >
                              <img src={about} alt="Logo" style={{
                                 width: '100%',
                                 height: '100%',

                              }} />

                           </Col>
                        </Hidden>
                        <Col xs={6} style={{ marginTop: 120 }}>

                           <div >
                              <b>Хочешь узнать об интересных профессиях изнутри? Хочешь узнать, как живут звезды шоубизнеса?
                              </b>
                           </div>

                           <div >
                              Смотри Урбан шоу и знакомься с этим миром ближе вместе с нами!

                           </div>
                        </Col>
                     </Row>






                     <Row style={{ marginTop: 120 }}>
                        <Col xl={1} >
                        </Col>
                        <Col xl={2}>
                           <div className={classes.cardHolder}>
                              <div className={classes.numberCard}>  1</div>
                              <img style={{
                                 width: '100%',
                                 marginTop: -30
                              }} src={all} alt={'family'} />
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
                              <img style={{ width: '100%', marginTop: -50, marginLeft: 10 }} src={deep} alt={'family'} />
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
                              <img style={{ width: '100%', marginTop: -30 }} src={fun} alt={'family'} />
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
                              <img style={{ width: '100%', marginTop: -30 }} src={talkAll} alt={'family'} />
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
                              <img style={{ width: '80%', marginTop: -30, marginLeft: 50 }} src={go} alt={'family'} />
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

               <div className={classes.atitudeContainer}>
                  <Container style={{ paddingTop: 40, paddingBottom: 220 }}>

                     <Row>
                        <Col>
                           <div className={classes.sliderTitle} style={{ color: '#fff' }}> <span className={classes.decoratrionTitle}> Наши</span> любимые гости:</div>
                        </Col>
                     </Row>
                     <Row style={{ justifyContent: 'center' }}>
                        <Col >
                           <div className={classes.atitudeHolder}>
                              <div className={classes.atittudeTitle}>
                                 <img src={jelihovscki} alt="jilihovschi" />
                                 <div style={{ marginTop: 20 }}>
                                    Андрей Жилиховский
                                 </div>
                              </div>
                              <div style={{ fontSize: 14, marginBottom: 20 }}>
                                 Оперный певец, солист Большого Театра
                              </div>
                              <div className={classes.atittudeSubTitle}>
                                 Рассказал о том, какого работать в опере. <span className={classes.decoratrionTitle}> Как он из бедного села </span> попал в лучшие оперы мира. Поиграл в музыкальную интуицию.
                              </div>
                              <img style={{ width: '100%', marginTop: 30 }} src={jelihovsckiVideo} alt="" />
                           </div>
                        </Col>
                        <Col >
                           <div className={classes.atitudeHolder}>
                              <div className={classes.atittudeTitle}>
                                 <img src={stopHam} alt="jilihovschi" />
                                 <div style={{ marginTop: 20 }}>
                                    СтопХам
                                 </div>
                              </div>
                              <div style={{ fontSize: 14, marginBottom: 20 }}>
                                 Оперный певец, солист Большого Театра
                              </div>
                              <div className={classes.atittudeSubTitle}>
                                 Рассказал о том, какого работать в опере. <span className={classes.decoratrionTitle}> Как он из бедного села </span> попал в лучшие оперы мира. Поиграл в музыкальную интуицию.
                              </div>
                              <img style={{ width: '100%', marginTop: 30 }} src={jelihovsckiVideo} alt="" />
                           </div>
                        </Col>
                        <Col >
                           <div className={classes.atitudeHolder}>
                              <div className={classes.atittudeTitle}>
                                 <img src={izzy} alt="jilihovschi" />
                                 <div style={{ marginTop: 20 }}>
                                    IZZY IZVNE
                                 </div>
                              </div>
                              <div style={{ fontSize: 14, marginBottom: 20 }}>
                                 Оперный певец, солист Большого Театра
                              </div>
                              <div className={classes.atittudeSubTitle}>
                                 Рассказал о том, какого работать в опере. <span className={classes.decoratrionTitle}> Как он из бедного села </span> попал в лучшие оперы мира. Поиграл в музыкальную интуицию.
                              </div>
                              <img style={{ width: '100%', marginTop: 30 }} src={jelihovsckiVideo} alt="" />
                           </div>
                        </Col>
                        <Col >
                           <div className={classes.atitudeHolder}>
                              <div className={classes.atittudeTitle}>
                                 <img src={tira} alt="jilihovschi" />
                                 <div style={{ marginTop: 20 }}>
                                    Оля Тира
                                 </div>
                              </div>
                              <div style={{ fontSize: 14, marginBottom: 20 }}>
                                 Оперный певец, солист Большого Театра
                              </div>
                              <div className={classes.atittudeSubTitle}>
                                 Рассказал о том, какого работать в опере. <span className={classes.decoratrionTitle}> Как он из бедного села </span> попал в лучшие оперы мира. Поиграл в музыкальную интуицию.
                              </div>
                              <img style={{ width: '100%', marginTop: 30 }} src={jelihovsckiVideo} alt="" />
                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>


               <Container>
                  <Row>
                     <Col>
                        <div>
                           <div className={classes.sliderTitle}>Наши <span className={classes.decoratrionTitle}> выпуски: </span>  </div>
                           <div style={{ textAlign: 'center', marginTop: -30 }}>
                              смотрите нас или слушайте
                           </div>
                           <Slider {...settings} style={{ marginTop: 50, marginBottom: 150 }} >
                              <div >
                                 <img src={slide} alt="" />
                              </div>
                              <div >
                                 <img src={slide} alt="" />

                              </div>
                              <div >
                                 <img src={slide} alt="" />

                              </div>
                              <div >
                                 <img src={slide} alt="" />

                              </div>
                              <div >
                                 <img src={slide} alt="" />

                              </div>
                              <div >
                                 <img src={slide} alt="" />
                              </div>
                           </Slider>
                        </div>

                     </Col>
                  </Row>
               </Container >





               <CallSection color='#3BBAC8' />


               <Container style={{ paddingBottom: 90 }}>
                  <Row>
                     <Col xs={7}>
                        <div className={classes.sliderTitle} style={{ textAlign: 'left' }}> <span className={classes.decoratrionTitle} >Ведущие </span> шоу: </div>
                        <div className={classes.leaderName}>
                           Анна Убейволк
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
                        <img style={{ width: '100%' }} src={AnnaU} alt="" />
                     </Col>

                  </Row>

                  <Row>
                     <Col xs={5} style={{ marginTop: 30 }}>
                        <img style={{ width: '100%' }} src={KateV} alt="" />
                     </Col>
                     <Col xs={7}>
                        <div className={classes.sliderTitle} style={{ textAlign: 'left' }}>  </div>
                        <div className={classes.leaderName}>
                           Екатерина Воронова
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
               </Container >

            </div >
            <Footer />
         </div >
      </motion.div >
   );
}

export default Show;