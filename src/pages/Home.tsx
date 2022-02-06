//@ts-nocheck

import React, { useContext, Component, Fragment, useEffect, useState } from 'react';
import { Context } from '..';
import { Button, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import MainView from '../components/MainView';
import Footer from '../components/Footer';
import AllDirections from '../components/MainPage/AllDirections';
import SliderLeader from '../components/MainPage/SliderLeader';
import HotOne from '../components/MainPage/HotOne';
import Offline from '../components/Offline';
import blackBg from '../assets/Art/blackBg.png'
import { Col, Container, Row } from 'react-bootstrap';
import Lector from '../assets/Home/Lector.png';
import group from '../assets/Home/group.png';
import notebook from '../assets/Home/notebook.png';
import presentation from '../assets/Home/presentation.png';
import dialog1 from '../assets/Home/dialog1.png';
import dialog2 from '../assets/Home/dialog2.png';
import dialog3 from '../assets/Home/dialog3.png';
import DirectionsPack from '../components/MainPage/DirectionsPack';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto Slab',
    backgroundColor: '#F5F5F5',
    overflow: 'hidden'
  },

  atitudeContainer: {
    backgroundImage: `url(${blackBg})`,
    backgroundRepeat: 'no-repeat, repeat',
    marginTop: 120
  },

  atitudeHolder: {
    minHeight: '400px',
    textAlign: 'center'
  },

  atittudeTitle: {
    color: '#FFF',
    margin: 10,
    fontWeight: 900,
    fontSize: 24,
    textAlign: 'center'
  },

  atittudeSubTitle: {
    color: '#FFF',
    margin: 10,
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'center'
  }
}));

const Home = observer(() => {
  const classes = useStyles();
  const { user, courseBasket } = useContext(Context);
  const [userId, setUserId] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setUserId(user.getUserId());
    const candidate = courseBasket.getBasket(userId?.id);
    setBasket(candidate);
  }, [user]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={classes.root}>
        <Header />
        <MainView />
        <AllDirections />
        <DirectionsPack />
        <Offline />
        <div className={classes.atitudeContainer}>
          <Container style={{ paddingTop: 70 }}>
            <Row style={{ justifyContent: 'center' }}>
              <Col>
                <div className={classes.atitudeHolder}>
                  <img src={Lector} alt="art" />
                  <div className={classes.atittudeTitle}>Дипломированные специалисты</div>
                  <div className={classes.atittudeSubTitle}>
                    <span className={classes.decoratrionTitle}>В нашей команде </span>только профессионалы с профильным
                    образованием.
                  </div>
                </div>
              </Col>
              <Col>
                <div className={classes.atitudeHolder}>
                  <img src={group} alt="art" />

                  <div className={classes.atittudeTitle}>Увлечённые люди</div>
                  <div className={classes.atittudeSubTitle}>
                    Каждый тренер влюблён в то, что делает. И готов заразить этой любовью вас.
                  </div>
                </div>
              </Col>
              <Col>
                <div className={classes.atitudeHolder}>
                  <img src={presentation} alt="art" />
                  <div className={classes.atittudeTitle}>Великолепные рассказчики</div>
                  <div className={classes.atittudeSubTitle}>
                    Мы заботимся о том, чтобы каждый тренер не только разбирался в предмете, но и умел правильно донести
                    свою точку зрения.
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <Row style={{ alignItems: 'center' }}>
                      <Col>
                        <img src={dialog1} alt="" />
                      </Col>
                      <Col>
                        <img src={notebook} alt="art" />
                      </Col>
                      <Col>
                        <img style={{ marginBottom: 20 }} src={dialog2} alt="" />
                        <img src={dialog3} alt="" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
        <SliderLeader />
        <Footer />
      </div>
    </motion.div>
  );
});


export default Home;


