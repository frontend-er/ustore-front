import { Hidden, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import prev from '../assets/Youth/prev.png'
import news from '../assets/Youth/news.png'
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
import boy from '../assets/Youth/youth.png';
import OneCourse from '../components/OneCourse';
import HeaderBgTop from '../assets/CoursesMini/Teens/Top/HeaderBgTop.png';
import HeaderBgHight from '../assets/CoursesMini/Teens/Hight/HeaderBgHight.png';
import HeaderBgUp from '../assets/CoursesMini/Teens/Up/HeaderBg.png';
import SSemaev from '../assets/CoursesMini/Teens/SSemaev.png';
import VKapernauli from '../assets/CoursesMini/Teens/VKapernauli.png';
import about from '../assets/Show/about.png'
import DataTabsAll from '../components/DataTabsAll';
import SProcopov from '../assets/CoursesMini/Youth/SProcopov.png'
import VGrecov from '../assets/CoursesMini/Youth/VGrecov.png'


import igratin from '../assets/CoursesMini/Youth/igratin.png'

import PrepareToSucces from '../assets/CoursesMini/Youth/PrepareToSucces.png'
import EqualRelationShip from '../assets/CoursesMini/Youth/EqualRelationShip.png';
import leadership from '../assets/CoursesMini/Youth/LeaderShip.png';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: 'Roboto Slab',
    backgroundColor: '#F5F5F5'
  },
  titlePage: {
    fontSize: 40,
    lineHeight: '55px',
    alignItems: 'center',
    letterSpacing: '-0.017em',
    color: '#000',
    marginBottom: 40,
    textAlign: 'left',
    fontWeight: 900
  },

  subTitlePage: {
    fontSize: 38,
    lineHeight: '50px',
    alignItems: 'center',
    letterSpacing: '-0.017em',
    color: '#000',
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 400
  },

  blueText: {
    fontWeight: 900,
    color: '#100267'
  },
  youthAproach: {
    border: '1px solid #100267'
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
    background: '#100267',
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
    fontWeight: 300
  },

  numberList: {
    fontSize: 64,
    fontWeight: 900,
    color: '#100267',
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
    backgroundColor: '#100267',
    color: '#fff'
  },

  decoratedNumbers: {
    fontFamily: 'Londrina Outline',
    fontSize: 120,
    color: '#100267',
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
    marginBottom: 20
  },
  leaderDescription: {
    fontSize: 16,
    color: '#000',
    marginBottom: 30,
    fontWeight: 300
  },

  leaderQuote: {
    fontSize: 20,
    lineHeight: 1.3,
    color: '#000',
    fontWeight: 200,
    marginBottom: 70
  },

  sliderTitle: {
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 30,
    fontSize: 32,
    color: '#696969',
    fontWeight: 900,
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal'
  },

  buttonMain: {
    width: 210,
    margin: 10
  },

  baloon: {
    marginBottom: 100
  },
  header: {}
}));

function Youth() {
  const classes = useStyles();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <div className={classes.root}>
          <Header />
          <div className={classes.header}>
            <Container>
              <Row style={{ alignItems: 'center' }}>
                <Hidden smDown>
                  <Col xs={5} style={{ marginTop: 120 }}>
                    <img
                      src={prev}
                      alt="Logo"
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </Col>
                </Hidden>
                <Col xs={2}></Col>
                <Col xs={5} style={{ marginTop: 120 }}>
                  <div className={classes.titlePage} style={{ textAlign: 'right' }}>
                    <span className={classes.decoratrionTitle}> Общение и образование </span> позитивная атмосфера
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    Берем интервью у интересных личностей. Показываем жизнь города изнутри. Мечтайте и добивайтесь
                    большего вместе с нашими гостями!
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: 30, marginBottom: 80 }}>
                <Col></Col>
                <Col sm={2}>
                  <div className={classes.blueText}>Офлайн программы:</div>
                  <div>и мероприятия</div>
                </Col>
                <Col sm={2}>
                  <div className={classes.blueText}>Еженедельно:</div>
                  <div>в 17:00</div>
                </Col>
                <Col sm={2}>
                  <div className={classes.blueText}>Для подростков:</div>
                  <div>до 18 лет</div>
                </Col>
                <Col sm={2}>
                  <div className={classes.blueText}>Курсы:</div>
                  <div>более 10 програм</div>
                </Col>
                <Col></Col>
              </Row>

              <Row style={{ alignItems: 'center' }}>
                <Col xs={6} style={{ marginTop: 120 }}>
                  <div className={classes.titlePage}>
                    О чем мы <span className={classes.decoratrionTitle}>расказываем? </span>
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    Мы берем интервью у интересных людей. Наши гости уже чего-то добились, всегда мечтают о большем,
                    любят свою жизнь и свою работу.
                  </div>
                </Col>
                <Col xs={1}></Col>

                <Hidden smDown>
                  <Col xs={4} style={{ marginTop: 120 }}>
                    <img
                      src={news}
                      alt="Logo"
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </Col>
                </Hidden>
              </Row>

              <Container style={{ marginBottom: 80, marginTop: 140 }}>
                <Row style={{ alignItems: 'center' }}>
                  <Col xs={4}>
                    <img style={{ width: 390 }} src={boy} alt="" />
                  </Col>
                  <Col xs={8}>
                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                      <Col lg={1}></Col>
                      <Col lg={10}>
                        <div className={classes.youthAproach}>
                          <Row style={{ alignItems: 'center' }}>
                            <Col xs={1}></Col>
                            <Col className={classes.decoratedNumbers}>01</Col>
                            <Col xs={8} style={{ textAlign: 'left' }}>
                              Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и
                              усовершенствуйте свои социальные навыки всего за 20 минут в день.
                            </Col>
                            <Col xs={1}></Col>
                          </Row>
                        </div>
                      </Col>
                      <Col lg={1}></Col>
                    </Row>
                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                      <Col lg={1}></Col>
                      <Col lg={10}>
                        <div className={classes.youthAproach}>
                          <Row style={{ alignItems: 'center' }}>
                            <Col xs={1}></Col>
                            <Col className={classes.decoratedNumbers}>02</Col>
                            <Col xs={8} style={{ textAlign: 'left' }}>
                              Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и
                              усовершенствуйте свои социальные навыки всего за 20 минут в день.
                            </Col>
                            <Col xs={1}></Col>
                          </Row>
                        </div>
                      </Col>
                      <Col lg={1}></Col>
                    </Row>
                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                      <Col lg={1}></Col>
                      <Col lg={10}>
                        <div className={classes.youthAproach}>
                          <Row style={{ alignItems: 'center' }}>
                            <Col xs={1}></Col>
                            <Col className={classes.decoratedNumbers}>03</Col>
                            <Col xs={8} style={{ textAlign: 'left' }}>
                              Научитесь предотвращать конфликты, постройте доверительные отношения с коллегами и
                              усовершенствуйте свои социальные навыки всего за 20 минут в день.
                            </Col>
                            <Col xs={1}></Col>
                          </Row>
                        </div>
                      </Col>
                      <Col lg={1}></Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>

          <Container>
            <Row>
              <Col>
                <div className={classes.sliderTitle}> Популярные продукты и курсы:</div>
              </Col>
            </Row>
            <Row style={{ marginTop: 80 }}>
              <Col xs={2}></Col>
              <Col>
                <div>
                  <OneCourse
                    id={8}
                    title="“Подготовка к успеху”"
                    bgColor="#E8E6F0"
                    label=" Urban Youth"
                    lector="Сергей Прокопов"
                    positionLector="Социальный педагог"
                    tags="youth"
                    price={100}
                    imgLector={SProcopov}
                    img={PrepareToSucces}
                    description="На курсе изучаем, как понимать себя, свои ресурсы и управлять ими. Помогаем ответить на вопрос: «Что делать после окончания школы?»"
                    accentColor="#100267"
                  />
                </div>
              </Col>
              <Col>
                <OneCourse
                  id={11}
                  title="“Игратин”"
                  bgColor="#E8E6F0"
                  label=" Urban Youth"
                  lector="Сергей Прокопов"
                  positionLector="Социальный педагог"
                  tags="youth"
                  price={100}
                  imgLector={VGrecov}
                  img={igratin}
                  description="На курсе изучаем, как понимать себя, свои ресурсы и управлять ими. Помогаем ответить на вопрос: «Что делать после окончания школы?»"
                  accentColor="#100267"
                />
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Container>

          <Container style={{ marginBottom: 60 }}>
            <Row style={{ marginBottom: 60 }}>
              <Col>
                <div className={classes.sliderTitle}>
                  {' '}
                  Все от <span className={classes.decoratrionTitle}> Urban Youth: </span>{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col xs={4}>
                    <OneCourse
                      id={9}
                      title="“Отношения по замыслу Творца”"
                      bgColor="#E8E6F0"
                      label=" Urban Youth"
                      lector="Сергей Прокопов"
                      positionLector="Социальный педагог"
                      tags="youth"
                      price={100}
                      imgLector={SProcopov}
                      img={PrepareToSucces}
                      description="Курс подготовки к браку христианской молодежи. Поднимаем основные вопросы, которые волнуют современную молодежь."
                      accentColor="#100267"
                    />
                  </Col>
                  <Col xs={4}>
                    <OneCourse
                      id={8}
                      title="“Подготовка к успеху”"
                      bgColor="#E8E6F0"
                      label=" Urban Youth"
                      lector="Сергей Прокопов"
                      positionLector="Социальный педагог"
                      tags="youth"
                      price={100}
                      imgLector={SProcopov}
                      img={EqualRelationShip}
                      description="На курсе изучаем, как понимать себя, свои ресурсы и управлять ими. Помогаем ответить на вопрос: «Что делать после окончания школы?»"
                      accentColor="#100267"
                    />
                  </Col>
                  <Col xs={4}>
                    <OneCourse
                      id={11}
                      title="“Игратин”"
                      bgColor="#E8E6F0"
                      label=" Urban Youth"
                      lector="Виталий Греков"
                      positionLector="Разработчик развивающего досуга"
                      tags="youth"
                      price={100}
                      imgLector={VGrecov}
                      img={igratin}
                      description="Новое слово развивающего досуга- игратин. Создание интерактивной игры в онлайн формате."
                      accentColor="#100267"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <OneCourse
                      id={10}
                      title="“Равноценное лидерство”"
                      bgColor="#E8E6F0"
                      label=" Urban Youth"
                      lector="Сергей Прокопов"
                      positionLector="Социальный педагог"
                      tags="youth"
                      price={100}
                      imgLector={SProcopov}
                      img={leadership}
                      description="Формирование лидеров нового поколения, обладающих здоровой самооценкой, умеющих работать в команде ради достижения общей цели и позитивных изменений в сообществе."
                      accentColor="#100267"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <CallSection color="#3BBAC8" />
          <SliderLeader />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Youth;