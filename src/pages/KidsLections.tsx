import React, { FC, useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background from "../assets/CoursesMax/Kids/KidsLections/background.png";
import bgpage from "../assets/CoursesMax/Kids/KidsLections/colorBg.png";
import kids1 from "../assets/CoursesMax/Kids/KidsLections/kids1.png";
import kids2 from "../assets/CoursesMax/Kids/KidsLections/kids2.png";
import kids3 from "../assets/CoursesMax/Kids/KidsLections/kids3.png";
import star from "../assets/CoursesMax/ArtTherapy/RestorationBroken/star.png";
import hugs from "../assets/CoursesMax/ArtTherapy/RestorationBroken/hugs.png";
import quote from "../assets/CoursesMax/ArtTherapy/RestorationBroken/quote.png";
import block2 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block2.png";
import block3 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block3.png";
import block4 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block4.png";
import block5 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block5.png";
import block1 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block1.png";

import smallItem from "../assets/CoursesMax/ArtTherapy/RestorationBroken/smalItem.png";
import leaderPhoto from "../assets/CoursesMax/ArtTherapy/RestorationBroken/YuliaUbeivolk.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeaderCourseDescription from '../components/LeaderCourseDescription';
import FeedBackSection from '../components/FeedBackSection';
import CoursePlan from '../components/CoursePlan';
import { motion } from 'framer-motion';
import { padding } from '@mui/system';

const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5'
   },
   header: {
      backgroundImage: `url(${background})`,
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
      color: '#3BBAC8',
      paddingRight: 12,
      paddingLeft: 12,
   },

   subHolder: {
      marginTop: 40,
      fontWeight: 100,
      fontSize: 24,
      marginBottom: 40,
      color: '#C2C2C2'

   },

   description: {
      marginTop: 40,
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
   page: {
      backgroundImage: `url(${bgpage})`,

   },

   titleSection: {
      fontWeight: 900,
      fontSize: 48,
      textAlign: 'center',
      color: '#fff',
      marginTop: 40,
      marginBottom: 40
   },
   aboutHolder: {
      width: 332,
      height: 405,
      background: 'rgba(255, 255, 255, 0.2)',
      opacity: 0.8,
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
      color: '#fff',
      lineHeight: 1.1,
      marginTop: 10,
      marginBottom: 10


   },

   infoText: {
      fontWeight: 100,
      fontSize: 18,
      color: '#fff',
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

   program: {
      background: '#000',
      fontFamily: 'Roboto Slab',
      paddingBottom: 20,
      marginBottom: -20
   },


   prorgamBlock: {
      background: '#F5F5F5',
      borderRadius: 30,
      color: '#000',
      marginRight: 70,
      marginTop: 120,
      display: 'flex',
      flexDirection: 'row'
   },

   blockName: {
      fontSize: 32,
      fontWeight: 900,
      position: 'absolute',
      color: '#fff',
      marginTop: 75,
      marginLeft: 85
   },

   blockSmall: {
      fontSize: 12,

   },
   blockTitle: {
      fontSize: 24,
      marginLeft: 20,
      marginBottom: 20,
      fontWeight: 900

   },
   blockList: {
      fontSize: 18,
      marginLeft: 20,
      fontWeight: 400
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






const KidsLections: FC = () => {
   const classes = useStyles()
   const { user } = useContext(Context);


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);



   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div>
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
                                                Urban Kids

                                             </div>
                                          </div>
                                       </Col>
                                    </Row>
                                    <Row >
                                       <Col>
                                          <div className={classes.titleHolder}>
                                             Детский урок   <span className={classes.decoratrionTitle}> от А до Я  </span>
                                          </div>
                                       </Col>
                                    </Row>
                                    <Row >
                                       <Col>
                                          <div className={classes.subHolder}>
                                             Курс для начинающих.
                                             Создание уроков для детей от 3 до 7 лет.
                                          </div>
                                       </Col>
                                    </Row>
                                    <Row >
                                       <Col>
                                          <div className={classes.description}>
                                             Расскажем о том, как эффективно взаимодействовать с детьми на уроке и создавать интересные, развивающие занятия. Чем наполнить урок и как сделать его качественным?
                                          </div>
                                       </Col>
                                    </Row>
                                    <Row >
                                       <Col sm={3} style={{ marginBottom: 100 }}>
                                          <Button fullWidth variant='contained' style={{ color: '#fff', backgroundColor: '#3BBAC8', margin: 10 }}>
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

                                    <Row >
                                       <Col>
                                          <div className={classes.subHolder}>
                                             Кому будет полезен курс:

                                          </div>
                                       </Col>
                                    </Row>

                                    <Row >
                                       <Col>
                                          <div className={classes.forWho}>
                                             <img src={star} alt='star' style={{ marginRight: 20 }} />
                                             <div>
                                                Тем, кто начал работать  <br /> с детьми
                                             </div>
                                          </div>
                                       </Col>
                                       <Col>
                                          <div className={classes.forWho}>
                                             <img src={star} alt='star' style={{ marginRight: 20 }} />
                                             <div>
                                                Тем, кто хочет найти <br /> готовые уроки
                                             </div>
                                          </div>
                                       </Col>
                                       <Col>
                                          <div className={classes.forWho}>
                                             <img src={star} alt='star' style={{ marginRight: 20 }} />
                                             <div>
                                                Тем, кто хочет узнать о новых дидактических материалах
                                             </div>
                                          </div>
                                       </Col>
                                    </Row>
                                 </div>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>

               <div className={classes.page}>
                  <Container fluid="xxl" >

                     <Row >
                        <Col >
                           <div className={classes.titleSection}>
                              О чем этот курс?
                           </div>
                        </Col>
                     </Row>
                     <Row >
                        <Col lg={4}  >
                           <div className={classes.aboutHolder}>
                              <div className={classes.aboutNumber}>
                                 01

                              </div>
                              <div className={classes.aboutText}>
                                 Вы узнаете, как выглядят хорошие материалы для уроков и как использовать их максимально эффективно.                              </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.aboutHolder}>
                              <div className={classes.aboutNumber}>
                                 02

                              </div>
                              <div className={classes.aboutText}>
                                 Вы узнаете,  как создавать урок быстро, но без ущерба качества. Наработаете систему создания уроков по структуре.                              </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.aboutHolder}>
                              <div className={classes.aboutNumber}>
                                 03

                              </div>
                              <div className={classes.aboutText}>
                                 Вы получите методичку с готовыми уроками и будете уметь с ней работать и на ее основе создавать бесконечное количество собственных уроков.                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Container>


                  <Container fluid="xxl" >

                     <Row >
                        <Col >
                           <div className={classes.titleSection} style={{ textAlign: 'left', marginBottom: 10 }}>
                              В комплект входит методичка!
                           </div>

                           <div className={classes.underline}>

                           </div>
                           <div className={classes.aboutText} style={{ textAlign: 'left', marginLeft: 0, marginTop: 30, marginBottom: 30 }}>
                              Комплекс уроков с наработанной структурой и  <b >  авторскими материалами, </b>   который вдвое упростит <br /> процесс создания уроков.
                              Методичка рассчитана на детей от 3 до 4 лет.
                           </div>
                        </Col>
                     </Row>
                     <Row >
                        <Col lg={4}  >
                           <div className={classes.storyHolder}>
                              <div className={classes.storyNumber}>
                                 Все уроки апробированы

                              </div>
                              <div className={classes.storyText}>С 2015 года мы успешно проводим эти уроки в нашем центре. Методичка продавалась заграницу и успешно использовалась в Азии и других странах.  </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.storyHolder}>
                              <div className={classes.storyNumber}>
                                 Творческие задания

                              </div>
                              <div className={classes.storyText}>В методичку включены авторские теорческие задания, развивающие креативность, мелку моторику.    </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.storyHolder}>
                              <div className={classes.storyNumber}>
                                 Упражнения и игры

                              </div>
                              <div className={classes.storyText}>Игра- основная деятельность ребенка. именно через игру урок раскрывается особенным образом для детей.     </div>
                           </div>
                        </Col>
                     </Row>

                     <Row >
                        <Col>
                           <div className={classes.contanerQuote}>
                              <img src={quote} alt='star' style={{ position: 'absolute', marginLeft: -40, marginTop: -40 }} />
                              Мы соединили европейские подходы по развитию детской креативности и восточные подходы по развитию мышления.
                           </div>
                        </Col>
                     </Row>


                     <Row style={{ paddingBottom: 60 }}>
                        <Col lg={4}  >
                           <div className={classes.aboutHolder}>
                              <img src={kids1} alt='star' />

                              <div className={classes.infoNumber}>
                                 Развитие по 5 сферам личности
                              </div>
                              <div className={classes.infoText}>
                                 Каждая личность обладает пятью сферами: эмоциональная, социальная, физическая, интеллектуальная, духовная.
                                 Наши уроки рассчитаны на развитие 5 сфер личности ребенка.                              </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.aboutHolder}>
                              <img src={kids2} alt='star' />

                              <div className={classes.infoNumber}>
                                 Современные технологии
                              </div>
                              <div className={classes.infoText}>
                                 Прогресс двигается вперед и нельзя это игнорировать. Мы используем новейшие методы, не забывая о старых. Используем современные технологии, не пренебрегая естественными материалами.                              </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className={classes.aboutHolder}>
                              <img src={kids3} alt='star' />

                              <div className={classes.infoNumber}>
                                 Любовь к детям- основа работы
                              </div>
                              <div className={classes.infoText}>
                                 Мы верим, что дети чувствуют любовь. Каждый аспект нашего курса и методички пропитан любовью к детям.                              </div>
                           </div>
                        </Col>
                     </Row>



                  </Container>
               </div>
            </div >

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





               </Container>
            </div>
            <LeaderCourseDescription name="Юлия Убейволк" workPosirion="Практикующий психолог, арт-терапевт." description="Стаж и опыт работы 20 лет при общественной организации 
            «Начало Жизни», где  является учредителем. За эти годы  выполняла две роли: программного директора и психолога. На разных этапах были разные проекты оказания помощи - 5 лет женщинам в кризисной беременности, 9 лет опыт работы психолога для женщин с тяжелыми травмами и последствиями сексуального и физического насилия. Затем 6 лет- работа в приюте с девочками подростками, и последние 7 лет один из наших центров это Психологическая Арт Студия, где  больше всего вовлекается в качестве психолога арт-терапевта. "  quote="Верю, что каждый человек уникален, интересен и богат, важно помочь ему раскрыться, преодолеть все препятствия на пути к успеху. В моей жизни всегда были люди и обстоятельства, которые помогали мне идти вперед и я сегодня человек, который помогает другим. 
                  Чем я могу вам помочь?" inProfession="более 20 лет" inWork="более 20 лет" withUs="более 20 лет" photoUrl={leaderPhoto} color="#8741A2" />

            <FeedBackSection color="#2C003C" comments={comments} />
            <Footer />
         </div >

      </motion.div >
   );
};

export default observer(KidsLections);