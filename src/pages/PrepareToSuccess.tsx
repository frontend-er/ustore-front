import React, { FC, useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Hidden, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import block2 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block2.png";
import block3 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block3.png";
import block4 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block4.png";
import block5 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block5.png";
import block1 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block1.png";
import star from "../assets/CoursesMax/ArtTherapy/RestorationBroken/star.png";
import background from '../assets/CoursesMax/Youth/PrepareToSuccess/background.png';
import climb from '../assets/CoursesMax/Youth/PrepareToSuccess/climb.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import prevImg from '../assets/CoursesMax/Youth/PrepareToSuccess/prev.png'
import hugs from "../assets/CoursesMax/ArtTherapy/RestorationBroken/hugs.png";
import quote from "../assets/CoursesMax/ArtTherapy/RestorationBroken/quote.png";
import smallItem from "../assets/CoursesMax/ArtTherapy/RestorationBroken/smalItem.png";
import text from '../assets/CoursesMax/Youth/PrepareToSuccess/test.png';
import social from '../assets/CoursesMax/Youth/PrepareToSuccess/social.png';
import youth from '../assets/CoursesMax/Youth/PrepareToSuccess/youth.png';
import CoursePlan from '../components/CoursePlan';
import LeaderCourseDescription from '../components/LeaderCourseDescription';
import FeedBackSection from '../components/FeedBackSection';
import leaderPhoto from '../assets/CoursesMax/Youth/PrepareToSuccess/photolector.png';
import { ICourse } from './MethodsOfArtTherapy';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import global from "../assets/CoursesMax/Youth/PrepareToSuccess/global.png";



const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5',
   },
   header: {
      backgroundImage: `url(${background})`,
      paddingTop: 20
   },
   holder: {
      color: '#fff'
   },
   ladelHolder: {
      border: '1px solid #FFFFFF',
      borderRadius: 42,
      textAlign: 'center',
      marginTop: 120
   },
   label: {
      fontWight: 'bold',
      fontSize: 20,
      padding: 4
   },

   titleHolder: {
      fontSize: 64,
      fontWeight: 900,
      marginTop: 100,

   },
   decoratrionTitle: {
      fontWeight: 900,
      backgroundColor: '#fff',
      color: '#100267'
   },

   subHolder: {
      marginTop: 40,
      fontWeight: 100,
      fontSize: 24,
      marginBottom: 40,
      color: '#C2C2C2'

   },

   description: {
      fontWeight: 100,
      fontSize: 18,
      marginBottom: 100,
      color: '#fff',
      width: '50%'
   },

   forWho: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 130
   },
   titleSection: {
      fontWeight: 900,
      fontSize: 48,
      textAlign: 'center',
      color: '#fff',
      marginTop: 20,
      marginBottom: 40
   },


   aboutHolder: {
      width: 332,
      height: 405,
      background: '#E8E6F0',
      borderRadius: 30,
   },


   aboutNumber: {
      fontWeight: 200,
      fontSize: 90,
      color: "#fff",
      marginLeft: 20
   },

   aboutText: {
      fontWeight: 300,
      fontSize: 22,
      color: "#fff",
      marginLeft: 20
   },
   aboutWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
   },

   subtitleSection: {
      color: '#747474',
      fontWeight: 900,
      marginTop: -10,
      fontSize: 23

   },
   underline: {
      width: 243,
      height: 6,
      backgroundColor: '#FFFFFF',
      marginTop: 10,
   },

   storyHolder: {
      margin: 40,

   },

   storyNumber: {
      fontWeight: 900,
      fontSize: 22,
      color: "#fff",
      marginBottom: 40
   },

   storyText: {
      fontWeight: 100,
      fontSize: 22,
      color: "#fff",
   },

   contanerQuote: {
      borderTop: '1px solid #fff',
      borderBottom: '1px solid #fff',
      fontWeight: 900,
      fontSize: 32,
      color: '#fff',
      padding: 50,
      marginTop: 40,
      marginBottom: 120,
      marginRight: 80,


   },

   infoNumber: {
      fontWeight: 900,
      fontSize: 29,
      marginLeft: 20,
      color: '#000',
      lineHeight: 1.1,
      marginTop: 10,
      marginBottom: 10


   },

   infoText: {
      fontWeight: 300,
      fontSize: 18,
      color: '#000',
      marginLeft: 20
   },
   smallContainer: {
      background: '#F5F5F5',
      border: '3px solid #2C003C',
      borderRadius: 30,
      color: '#000',
      textAlign: 'center',
      padding: 20,
      marginRight: 70,
      marginTop: 120,
      marginBottom: 70
   },

   smallWrapper: {
      borderTop: '3px solid #7A00A6',
      borderBottom: '3px solid #7A00A6',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'

   },


   smallTextTitle: {
      fontSize: 24,
      fontWeight: 600
   },

   smallText: {
      fontSize: 20,
      fontWeight: 300,
      marginTop: 10
   },

   youthAproach: {
      border: '1px solid #100267'
   },

   program: {
      backgroundImage: `url(${background})`,
      fontFamily: 'Roboto Slab',
      paddingBottom: 120,
      marginBottom: -100
   },


   titleDecoretedText: {
      fontSize: 24,
      fontWeight: 400,
      color: '#fff',
      textDecoration: 'underline',
      textTransform: 'uppercase'
   },

   titlePrice: {
      fontSize: 52,
      fontWeight: 900,
      color: '#fff'
   }

}));



const comments = [{
   "comentatorName": "Elena Vaculovschi",
   "comentatorImage": "https://fv2-3.failiem.lv/thumb_show.php?i=qxjkwzccr&view",
   "comentatorSubtitle": "Посетитель курса",
   "comment": "Мне очень понравился курс, особенно практическая часть курса со всеми её упражнениями и заданиями. Вся предоставленная информация была доступной, очень хорошо структурирована! Также я смогла больше узнать себя!"
},
{
   "comentatorName": "Василе Фаркас",
   "comentatorImage": "https://files.fm/thumb_show.php?i=wsp5qsebv&view",
   "comentatorSubtitle": "Посетитель курса",
   "comment": "Для меня этот курс был важным и полезным, потому что я глубже осознал что в служение с разными людьми, имеющие разные проблемы, важно иметь знание и специальный подход. Важно для меня было также понять, что я не должен и не правильно рвануться разрешать проблему пострадавшего и спасать его, а важно то, чтобы я помог таким людям найти ресурсы для восстановления. Для меня курс был хорошим опытом и уверен, что послужит в дальнейшем работе и служении.  Спасибо большое!"
},
]

const plan = [{
   "blockNumber": "1",
   "blockTitile": "Арт-терапия как инструмент в работе с людьми:",
   "blockList": [{
      "name": "История арт-терапии"
   },
   {
      "name": "Терапевтические цели и методология"
   },
   {
      "name": "Виды арт-терапии"
   }
   ],
   "imagePreview": block1
},

{
   "blockNumber": "2",
   "blockTitile": "Метафорические ассоциативные карты:",
   "blockList": [{
      "name": "Цветотерапия Инструмент для работы МАК"
   },
   {
      "name": "Воображение + рефлексия"
   },
   {
      "name": "Интерпретация карточки индивидуально"
   }],
   "imagePreview": block2
},

{
   "blockNumber": "3",
   "blockTitile": "ИЗО-терапия:",
   "blockList": [{
      "name": "Психодиагностика рисункa"
   },
   {
      "name": "Методика Акватипия"
   },
   {
      "name": "Правила интерпретации"
   },
   {
      "name": "Терапевтические изо-техники"
   }],
   "imagePreview": block3
},

{
   "blockNumber": "4",
   "blockTitile": "Песочная терапия:",
   "blockList": [{
      "name": "Возможности и ограничения"
   },
   {
      "name": "Структура сессии в песке"
   },
   {
      "name": "Мотивационные игры с песком"
   },
   {
      "name": "Диагностика травмы в песочнице"
   }],
   "imagePreview": block4
},

{
   "blockNumber": "5",
   "blockTitile": "Сказкотерапия:",
   "blockList": [{
      "name": "Принципы работы со сказками"
   },
   {
      "name": "Виды сказок и их алгоритмы"
   },
   {
      "name": "Пример психологической работы со сказкой"
   },
   {
      "name": "Создание сказки при помощи МАК"
   }],
   "imagePreview": block5
},
]






const PrepareToSuccess = (props: ICourse) => {
   const classes = useStyles();
   const { user, courseBasket } = useContext(Context);
   const [open, setOpen] = React.useState(false);
   const [openError, setOpenError] = React.useState(false);

   //useEffect(() => {
   //   window.scrollTo(0, 0);
   //}, []);


   const handleClick = () => {
      setOpen(true);
   };

   const handleClickError = () => {
      setOpenError(true);
   };

   const handleAddToCart = async () => {
      await courseBasket.addToBasket({ courseId: props.id, basketId: user.user.id, productDescription: props.description, productTitle: props.title, poductPrice: props.price, unit: props.label });
      handleClick()
   }

   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpen(false);
   };

   const handleCloseError = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpenError(false);
   };


   const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
      props,
      ref,
   ) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });



   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className={classes.root}>
            <Header />
            <div className={classes.header}>
               <Container fluid="xxl" >
                  <Row >
                     <Col>
                        <div className={classes.holder}>
                           <div>
                              <div>
                                 <Row >
                                    <Col xs={2}>
                                       <div className={classes.ladelHolder}>
                                          <div className={classes.label}>
                                             Youth

                                          </div>
                                       </div>

                                    </Col>
                                 </Row>
                                 <Row >
                                    <Col sm={8}>
                                       <div className={classes.titleHolder}>
                                          Подготовка <br />
                                          <span className={classes.decoratrionTitle}> к успеху </span>
                                       </div>
                                       <div className={classes.subHolder}>
                                          Познакомим вас с  Aрт-терапией
                                       </div>
                                       <div className={classes.description}>
                                          Покажем эффективность и практичность арт-терапии в работе с людьми как в группе, так и индивидуально.Предупредим о возможных перегибах при применении этого метода и поделимся основными алгоритами и принципами работы.
                                       </div>
                                    </Col>
                                    <Hidden smDown >
                                       <Col sm={4} style={{ marginTop: 130 }}>
                                          <img src={prevImg} alt='perv' />
                                       </Col>
                                    </Hidden>
                                 </Row>

                                 <Row >
                                    <Col sm={3} style={{ marginBottom: 100 }}>
                                       <Button onClick={handleAddToCart} fullWidth variant='contained' style={{ color: '#fff', backgroundColor: '#3C51A2', margin: 10 }}>
                                          Купить курс
                                       </Button>
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                                    <Col sm={2}>
                                       <div >
                                          Длительность:
                                       </div>
                                       <div>
                                          15 часов
                                       </div>
                                    </Col>
                                    <Col sm={2}>
                                       <div>
                                          Цена:
                                       </div>
                                       <div>
                                          100$
                                       </div>
                                    </Col>
                                    <Col sm={2}>
                                       <div>
                                          Старт:
                                       </div>
                                       <div>
                                          в любое время
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
               <div className={classes.header}>
                  <Container fluid="xxl" >
                     <Row >
                        <Col >
                           <div className={classes.titleSection} style={{ textAlign: 'left', marginBottom: 10 }}>
                              Достичь успеха как забраться на вершину горы:
                           </div>
                           <div className={classes.subtitleSection}>
                              Путь из нескольких грамотных стадий
                           </div>
                           <div className={classes.underline}>

                           </div>


                           <div className={classes.aboutText} style={{ textAlign: 'left', marginLeft: 0, marginTop: 30, marginBottom: 30 }}>
                              Представьте, что <b > вы разбили</b>  стакан дома.
                              Чтобы это имправить, придется пройти <br /> через несколько простых шагов.

                           </div>


                           <img src={climb} alt='' style={{ width: '100%' }} />
                        </Col>
                     </Row>
                     <Row >
                        <Col lg={4}  >
                           <div className={classes.storyHolder}>
                              <div className={classes.storyNumber}>
                                 ВЫ РАССТРАИВАЕТЕСЬ

                              </div>
                              <div className={classes.storyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu interdum tempor aliquam in tincidunt aliquet nibh. Enim facilisis dolor sed sit.     </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.storyHolder}>
                              <div className={classes.storyNumber}>
                                 ВЫ РАССТРАИВАЕТЕСЬ

                              </div>
                              <div className={classes.storyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu interdum tempor aliquam in tincidunt aliquet nibh. Enim facilisis dolor sed sit.     </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.storyHolder}>
                              <div className={classes.storyNumber}>
                                 ВЫ РАССТРАИВАЕТЕСЬ

                              </div>
                              <div className={classes.storyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu interdum tempor aliquam in tincidunt aliquet nibh. Enim facilisis dolor sed sit.     </div>
                           </div>
                        </Col>
                     </Row>

                     <Row >
                        <Col>
                           <div className={classes.contanerQuote}>
                              <img src={quote} alt='star' style={{ position: 'absolute', marginLeft: -40, marginTop: -40 }} />
                              И ещё много разных специалистов стоит за каждым из сервисов. Вы тоже можете в этом участвовать. Главное — найти то, что ближе вашим интересам и способностям. Этим и займёмся на курсе.
                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>




            </div>
            <div>

               <Container>

                  <Row >
                     <Col >
                        <div className={classes.titleSection} style={{ textAlign: 'center', marginBottom: 10, color: '#2F0267' }}>
                           Кому подойдет эта программа:
                        </div>
                     </Col>
                  </Row>
                  <Row style={{ padding: 60 }}>
                     <Col lg={4}  >
                        <div className={classes.aboutHolder}>
                           <img src={hugs} alt='star' />

                           <div className={classes.infoNumber}>
                              Вы интересуетесь психолгией
                           </div>
                           <div className={classes.infoText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.aboutHolder}>
                           <img src={hugs} alt='star' />

                           <div className={classes.infoNumber}>
                              Вы интересуетесь психолгией
                           </div>
                           <div className={classes.infoText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.aboutHolder}>
                           <img src={hugs} alt='star' />

                           <div className={classes.infoNumber}>
                              Вы интересуетесь психолгией
                           </div>
                           <div className={classes.infoText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>


            <div className={classes.header}>
               <Container fluid="xxl" >

                  <Row >
                     <Col >
                        <div className={classes.titleSection} style={{ textAlign: 'center', marginBottom: 10 }}>
                           Пройти тест на профориентацию:
                        </div>
                     </Col>
                  </Row>
                  <Row >
                     <Col>
                     </Col>
                     <Col >
                        <div className={classes.titleSection} style={{ textAlign: 'center', marginBottom: 30 }}>
                           <img src={text} alt="test" />
                        </div>

                        <div className={classes.subtitleSection} style={{ textAlign: 'center', color: '#B1B1B1', marginBottom: 20 }}>
                           Пройдите тест и узнайте, кто вы на каждой вечеринке:
                           психолог, философ, искусствовед, литературовед или кинокритик?
                        </div>
                     </Col>
                     <Col>
                     </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                     <Col xs={5}>
                     </Col>
                     <Col xs={2}>
                        <Button fullWidth variant='contained' style={{ textAlign: 'center', color: '#fff', backgroundColor: '#000', margin: 10 }}>
                           Узнать правду
                        </Button>
                     </Col>
                     <Col xs={5}>
                     </Col>
                  </Row>
                  <Row >
                     <Col >
                        <div >
                           <img src={social} style={{ width: '100%' }} alt="social" />
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>

            <div>

               <Container>

                  <Row >
                     <Col >
                        <div className={classes.titleSection} style={{ textAlign: 'center', marginBottom: 10, color: '#2F0267' }}>
                           Целостный подход к личности:
                        </div>
                     </Col>
                  </Row>
                  <Row style={{ padding: 60 }}>
                     <Col lg={2}  >

                     </Col>
                     <Col lg={8}  >
                        <div className={classes.youthAproach}>
                           <Row>
                              <Col xs={1}>
                              </Col>
                              <Col>
                                 <img src={youth} alt='' />
                              </Col>
                              <Col xs={6} style={{ textAlign: 'left', margin: 10 }}>
                                 Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и усовершенствуйте свои социальные навыки всего за 20 минут в день.
                              </Col>
                              <Col xs={2}>
                              </Col>
                           </Row>
                        </div>
                     </Col>
                     <Col lg={2}>

                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
         <div className={classes.program}>
            <Container fluid="xxl" >
               <Row >
                  <Col >
                     <div className={classes.titleSection}>
                        Программа курса
                     </div>
                     <div className={classes.subtitleSection} style={{ color: '#fff', textAlign: 'center', marginTop: -40, fontWeight: 300, marginBottom: 30, }}>
                        Основные психологические синдромы и техники работы с ними.
                     </div>
                  </Col>
               </Row>
               {
                  plan.map((t: any) =>
                     <CoursePlan {...t} />
                  )
               }

               <Row style={{ marginBottom: 150, marginTop: 50 }}>
                  <Col>
                     <div style={{ textAlign: 'left' }}>
                        <div className={classes.titleSection} style={{ textAlign: 'left' }}>
                           Стоимость
                           курса:
                        </div>
                     </div>
                     <div>
                        <Button fullWidth onClick={handleAddToCart} variant='contained' style={{ color: '#fff', backgroundColor: '#2475B7' }}>
                           В корзину
                        </Button>
                     </div>
                  </Col>
                  <Col style={{ marginTop: 90 }}>
                     <div style={{ textAlign: 'center', color: '#fff', fontWeight: 100 }}>
                        Доступ к курсу навсегда в вашем личном кабинете
                     </div>
                     <div style={{ textAlign: 'center' }} className={classes.titlePrice}>
                        {props.price}$
                     </div>
                     <div style={{ textAlign: 'center' }} className={classes.titleDecoretedText}>
                        ПОЛНЫЙ КУРС
                     </div>
                  </Col>
                  <Col style={{ marginTop: 90 }}>
                     <div style={{ textAlign: 'center' }}>
                        <img src={global} alt="" />
                     </div>

                  </Col>
               </Row>
            </Container>
         </div>
         <LeaderCourseDescription name="Сергей Прокопов" workPosirion="Практикующий психолог, арт-терапевт." description="Стаж и опыт работы 20 лет при общественной организации 
            «Начало Жизни», где  является учредителем. За эти годы  выполняла две роли: программного директора и психолога. На разных этапах были разные проекты оказания помощи - 5 лет женщинам в кризисной беременности, 9 лет опыт работы психолога для женщин с тяжелыми травмами и последствиями сексуального и физического насилия. Затем 6 лет- работа в приюте с девочками подростками, и последние 7 лет один из наших центров это Психологическая Арт Студия, где  больше всего вовлекается в качестве психолога арт-терапевта. "  quote="Верю, что каждый человек уникален, интересен и богат, важно помочь ему раскрыться, преодолеть все препятствия на пути к успеху. В моей жизни всегда были люди и обстоятельства, которые помогали мне идти вперед и я сегодня человек, который помогает другим. 
                  Чем я могу вам помочь?" inProfession="более 20 лет" inWork="более 20 лет" withUs="более 20 лет" photoUrl={leaderPhoto} color="#100267" />

         <FeedBackSection color="#100267" comments={comments} />
         <Footer />
         <Snackbar style={{ marginTop: 100 }} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={12000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
               Курс <b>  {props.title} </b> был успешно добавлен в <b> Корзину </b>
            </Alert>
         </Snackbar>
         <Snackbar style={{ marginTop: 100 }} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openError} autoHideDuration={12000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
               Произошла <b>ошибка</b>
            </Alert>
         </Snackbar>
      </motion.div >
   );
};

export default observer(PrepareToSuccess);