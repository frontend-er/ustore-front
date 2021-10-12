// @ts-nocheck


import { makeStyles, Link, InputBase, TextField, Button, Hidden } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import background from "../assets/Footer/FooterBG.png";
import logo from '../assets/enternal/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';






const useStyles = makeStyles(theme => ({
   root: {
      width: 330,
      marginTop: '20%',
      marginLeft: '35%',

   },

   background: {
      backgroundImage: `url(${background})`,
      fontFamily: 'Roboto Slab'
   },

   background2: {
      backgroundColor: '#141311'
   },
   holder: {
      height: '110vh',
      textAlign: 'left'
   },

   holder2: {
      textAlign: 'left'
   },

   link: {
      color: '#fff',
      margin: 12,
      fontSize: 14,
      '&:hover': {
         color: '#8E8E8E'
      }

   },


   links: {
      textAlign: 'center',

   },


   logo: {
      margin: 6
   },

   holderLogo: {
      display: 'flex',
      flexDirection: 'row',
      fontFamily: 'MuseoModerno',
      fontSize: 20,
      lineHeight: 0.9,
      marginTop: 100

   },

   logoName: {
      marginTop: 16,
      color: '#fff'

   },

   logoNameHead: {
      marginTop: -12,
      fontSize: 23

   },
   logoSubtitle: {
      fontSize: 13,
      fontFamily: 'Roboto Slab',
      marginTop: 6

   },


   footerTopLine: {
      marginTop: 12
   },

   social: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: 26,
      marginTop: 45,
      marginLeft: 6


   },

   callIconMini: {
      color: '#fff',
      margin: 9
   },

   questions: {
      textDecoration: 'underline',
      marginTop: 35,
      color: '#fff',
      marginLeft: 6

   },

   question: {
      color: '#fff',
      '&:hover': {
         color: '#E5E5E5'
      }
   },


   emailForwardHolder: {
      backgroundColor: '#fff',
      borderRadius: 13,
      marginBottom: 70
   },


   titleForward: {
      color: '#000',
      marginLeft: 16,
      marginTop: 46,
      paddingTop: 9,
      marginBottom: 12,
      fontWeight: 900,
      fontSize: 19,
   },

   subtitleForward: {
      fontWeight: 100,
      fontSize: 15,
      marginLeft: 16,
      marginTop: 16,

   },

   inputModal: {
      color: '#fff',
      marginLeft: 16,
      marginBottom: 19,
      flex: 1,

   },

   inpuButton: {
      flex: 1,
      marginLeft: 16,
      marginTop: 11,
      marginBottom: 12,
      marginRight: 22
   },

   contacts: {
      color: '#fff',
      marginTop: 100,

   },

   contact: {
      fontWeigth: 100,

   },


   contactTitle: {
      marginTop: 46,

   },


   map: {
      marginTop: 46,

   },

   linkCopy: {
      textAlign: 'center',
   },

   copy: {
      paddingBottom: 12,
      color: '#fff',
      margin: 12,
   }



}));




function Footer() {


   const classes = useStyles()

   const dudUrl = '#'

   return (
      <div>

         <Hidden mdDown>
            <div className={classes.background}>

               <Container fluid="xxl" className={classes.holder}>
                  <Row className={classes.footerTopLine}>
                     <Col md={4} lg={4} xl={4}>
                        <div className={classes.holderLogo}>
                           <div className={classes.logo}>
                              <img src={logo} alt="Logo" style={{ height: 54.54, width: 39.97 }} />
                           </div>
                           <div className={classes.logoName}>
                              <b> urban </b> center
                              <div className={classes.logoSubtitle}>
                                 <b>Образовательный </b> проект

                              </div>
                           </div>
                        </div>

                        <div className={classes.social}>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faTwitter} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faFacebook} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faInstagram} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faTelegram} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faVk} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faYoutube} className={classes.callIconMini} />
                           </Link>



                        </div>

                        <div className={classes.questions}>
                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Авторске ли это курсы?
                              </Link>

                           </div>

                           <div>  <Link href={dudUrl} className={classes.question}>
                              Как записаться на мероприятия?
                           </Link></div>

                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Хотим на курсы!
                              </Link>
                           </div>

                        </div>


                        <div className={classes.emailForwardHolder}>
                           <div className={classes.titleForward}>
                              Рассылка для самых  любознатеьных
                           </div>

                           <div className={classes.subtitleForward}>
                              Хочу получать больше интересных текстов,
                              психологических разборов и секретных скидок
                           </div>
                           <div className={classes.social}>
                              <TextField
                                 className={classes.inputModal}
                                 id="filled-secondary"
                                 label="Enter your email"
                                 color="secondary"
                                 placeholder="urban@service.com"
                              />

                              <Button variant="contained" color="primary" className={classes.inpuButton}>
                                 Подписаться
                              </Button>
                           </div>

                        </div>




                     </Col>
                     <Col className={classes.links} md={4} lg={4} xl={4}>

                        <div className={classes.contacts}>
                           <div >
                              <b>8 800 302 58 28</b>

                           </div>

                           <div className={classes.contact}>
                              info@urbancenter.md

                           </div>

                           <div className={classes.contactTitle}>
                              <Link href={dudUrl} className={classes.question}>
                                 Возврат курсов

                              </Link>
                           </div>
                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Оплата курсов
                              </Link>

                           </div>
                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Вакансии



                              </Link>

                           </div>

                           <div className={classes.contactTitle}>
                              <b> Для резюме:</b>

                           </div>
                           <div>
                              hr_urban@gmail.com

                           </div>



                           <div className={classes.contactTitle}>
                              <b> Сотрудничество:</b>

                           </div>
                           <div>
                              urban@gmail.com

                           </div>




                           <div className={classes.contactTitle}>
                              <b>Корпоративным клиентам:</b>

                           </div>
                           <div>
                              corporativ_urban@gmail.com

                           </div>

                        </div>


                     </Col>

                     <Col className={classes.links} md={4} lg={4} xl={4}>
                        <div className={classes.contacts}>
                           <div >
                              <b>Chisinau MD, Moldova <br />
                                 ул. Pan Halippa, 1</b>

                           </div>
                           <div className={classes.map}>

                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.0802587053112!2d28.828441906071518!3d47.00800058914583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97e9d15c55557%3A0x306abbce760b8dbd!2sUrban%20Center!5e0!3m2!1sru!2s!4v1631514521794!5m2!1sru!2s" width="300" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                           </div>


                           <div className={classes.contactTitle}>
                              <b>Принимаем к оплате</b>

                           </div>
                           <div>
                              visa / mastercard

                           </div>


                        </div>


                     </Col>
                  </Row>


                  <Row>
                     <Col className={classes.links}>
                        <Link href={dudUrl} className={classes.link}>
                           О нас
                        </Link>
                        <Link href={dudUrl} className={classes.link}>
                           О лекторах
                        </Link>
                        <Link href={dudUrl} className={classes.link}>
                           Видеокурсы
                        </Link>
                        <Link href={dudUrl} className={classes.link}>
                           Мероприятия
                        </Link>
                        <Link href={dudUrl} className={classes.link}>
                           Сотрудничество
                        </Link>
                        <Link href={dudUrl} className={classes.link}>
                           Политика конфиденциальности
                        </Link>
                        <Link href={dudUrl} className={classes.link}>
                           Подкасты
                        </Link>
                     </Col>
                  </Row>
                  <Row className={classes.linkCopy}>
                     <Col className={classes.copy}>
                        © Copyright 2021 Начало Жизни
                     </Col>
                  </Row>
               </Container>
            </div >
         </Hidden>

         <Hidden lgUp>
            <div className={classes.background2}>
               <Container fluid="xxl" className={classes.holder2}>
                  <Row className={classes.footerTopLine}>
                     <Col md={4} lg={4} xl={4}>
                        <div className={classes.holderLogo}>
                           <div className={classes.logo}>
                              <img src={logo} alt="Logo" style={{ height: 54.54, width: 39.97 }} />
                           </div>
                           <div className={classes.logoName}>
                              <b> urban </b> center
                              <div className={classes.logoSubtitle}>
                                 <b>Образовательный </b> проект

                              </div>
                           </div>
                        </div>

                        <div className={classes.social}>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faTwitter} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faFacebook} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faInstagram} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faTelegram} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faVk} className={classes.callIconMini} />
                           </Link>
                           <Link href={dudUrl} >
                              <FontAwesomeIcon icon={faYoutube} className={classes.callIconMini} />
                           </Link>



                        </div>

                        <div className={classes.questions}>
                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Авторске ли это курсы?
                              </Link>

                           </div>

                           <div>  <Link href={dudUrl} className={classes.question}>
                              Как записаться на мероприятия?
                           </Link></div>

                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Хотим на курсы!
                              </Link>
                           </div>

                        </div>


                        <div className={classes.emailForwardHolder}>
                           <div className={classes.titleForward}>
                              Рассылка для самых  любознатеьных
                           </div>

                           <div className={classes.subtitleForward}>
                              Хочу получать больше интересных текстов,
                              психологических разборов и секретных скидок
                           </div>
                           <div className={classes.social}>
                              <TextField
                                 className={classes.inputModal}
                                 id="filled-secondary"
                                 label="Enter your email"
                                 color="secondary"
                                 placeholder="urban@service.com"
                              />

                              <Button variant="contained" color="primary" className={classes.inpuButton}>
                                 Подписаться
                              </Button>
                           </div>

                        </div>




                     </Col>
                     <Col className={classes.links} md={4} lg={4} xl={4}>

                        <div className={classes.contacts}>
                           <div >
                              <b>8 800 302 58 28</b>

                           </div>

                           <div className={classes.contact}>
                              info@urbancenter.md

                           </div>

                           <div className={classes.contactTitle}>
                              <Link href={dudUrl} className={classes.question}>
                                 Возврат курсов

                              </Link>
                           </div>
                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Оплата курсов
                              </Link>

                           </div>
                           <div>
                              <Link href={dudUrl} className={classes.question}>
                                 Вакансии



                              </Link>

                           </div>

                           <div className={classes.contactTitle}>
                              <b> Для резюме:</b>

                           </div>
                           <div>
                              hr_urban@gmail.com

                           </div>



                           <div className={classes.contactTitle}>
                              <b> Сотрудничество:</b>

                           </div>
                           <div>
                              urban@gmail.com

                           </div>




                           <div className={classes.contactTitle}>
                              <b>Корпоративным клиентам:</b>

                           </div>
                           <div>
                              corporativ_urban@gmail.com

                           </div>

                        </div>


                     </Col>

                     <Col className={classes.links} md={4} lg={4} xl={4}>
                        <div className={classes.contacts}>
                           <div >
                              <b>Chisinau MD, Moldova <br />
                                 ул. Pan Halippa, 1</b>

                           </div>
                           <div className={classes.map}>

                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.0802587053112!2d28.828441906071518!3d47.00800058914583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97e9d15c55557%3A0x306abbce760b8dbd!2sUrban%20Center!5e0!3m2!1sru!2s!4v1631514521794!5m2!1sru!2s" width="200" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                           </div>


                           <div className={classes.contactTitle}>
                              <b>Принимаем к оплате</b>

                           </div>
                           <div>
                              visa / mastercard

                           </div>


                        </div>


                     </Col>
                  </Row>


                  <Row>

                     <Hidden xsDown>
                        <Col className={classes.links}>
                           <Link href={dudUrl} className={classes.link}>
                              О нас
                           </Link>
                           <Link href={dudUrl} className={classes.link}>
                              О лекторах
                           </Link>
                           <Link href={dudUrl} className={classes.link}>
                              Видеокурсы
                           </Link>
                           <Link href={dudUrl} className={classes.link}>
                              Мероприятия
                           </Link>
                           <Link href={dudUrl} className={classes.link}>
                              Сотрудничество
                           </Link>
                           <Link href={dudUrl} className={classes.link}>
                              Политика конфиденциальности
                           </Link>
                           <Link href={dudUrl} className={classes.link}>
                              Подкасты
                           </Link>
                        </Col>
                     </Hidden>

                  </Row>
                  <Row className={classes.linkCopy}>
                     <Col className={classes.copy}>
                        © Copyright 2021 Начало Жизни
                     </Col>
                  </Row>
               </Container>
            </div >
         </Hidden>
      </div>





   );
}

export default Footer;