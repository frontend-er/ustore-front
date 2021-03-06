

import { Hidden, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import prev from '../assets/Art/prev.png'
import family from '../assets/Kids/family.png'
import kids from '../assets/Kids/kids.png'
import draw from '../assets/Kids/draw.png'
import talk from '../assets/Kids/talk.png'
import edu from '../assets/Kids/edu.png'
import blackBg from '../assets/Art/blackBg.png'
import makingArt from '../assets/Art/makingArt.png'
import crochet from '../assets/Art/crochet.png'
import dots from '../assets/Art/dots.png'
import ParentsSchool from '../assets/CoursesMini/ArtTherapy/ParentsScool/ParentsSchool.png';
import ReuserBroken from '../assets/CoursesMini/ArtTherapy/RestoreBroken/RestoreBoken.png';
import PASTeam from '../assets/CoursesMini/ArtTherapy/ParentsScool/PASTeam.png';
import IUbeivolk from '../assets/CoursesMini/ArtTherapy/RestoreBroken/IUbeivolk.png';
import bgBlurSmall from '../assets/Teens/bgBlurSmall.png';
import SliderLeader from '../components/MainPage/SliderLeader';
import OneCourse from '../components/OneCourse';
import DataTabsAll from '../components/DataTabsAll';
import CallSection from '../components/CallSection';
import teens from '../assets/Teens/teens.png';
import bibleTruth from '../assets/CoursesMini/ArtTherapy/BibleTruth/BibleTruth.png';
import Metodology from '../assets/CoursesMini/ArtTherapy/Methodology/Metodology.png';
import sand from '../assets/CoursesMini/ArtTherapy/sand.png';
import audioUp from '../assets/CoursesMini/ArtTherapy/audioUp.png';

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
    color: '#8741A2'
  },
  youthAproach: {
    border: '1px solid #8741A2'
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
    background: '#8741A2',
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
    color: '#8741A2',
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
    backgroundColor: '#8741A2',
    color: '#fff'
  },

  decoratedNumbers: {
    fontFamily: 'Londrina Outline',
    fontSize: 120,
    color: '#8741A2',
    lineHeight: 1.2
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

  atitudeContainer: {
    backgroundImage: `url(${blackBg})`,
    backgroundRepeat: 'no-repeat, repeat',
    marginTop: 120
  },

  atitudeHolder: {
    border: '1px solid #fff',
    height: '50vh',
    minHeight: '420px'
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

  quote: {
    margin: 20,
    fontWeight: 900,
    fontSize: 24
  }
}));

function Art() {
  const classes = useStyles();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <div className={classes.root}>
          <Header />
          <div>
            <Container>
              <Row style={{ alignItems: 'center' }}>
                <Col xl={1}></Col>
                <Col xl={5} style={{ marginTop: 120 }}>
                  <div className={classes.titlePage}>
                    <b>
                      {' '}
                      Urban <span className={classes.decoratrionTitle}>Art-Therapy</span>
                    </b>
                  </div>

                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, convallis nec diam cursus nulla quam
                    cras. Elementum quis eget imperdiet pellentesque. Vestibulum sit ut commodo facilisis. Interdum eget
                    bibendum consequat viverra duis pretium ultricies posuere.
                  </div>
                </Col>

                <Hidden smDown>
                  <Col xl={5} style={{ marginTop: 120 }}>
                    <img
                      src={prev}
                      alt="Logo"
                      style={{
                        width: 495,
                        height: 300
                      }}
                    />
                  </Col>
                </Hidden>
              </Row>

              <Row style={{ marginTop: 30, marginBottom: 80 }}>
                <Col></Col>
                <Col sm={2}>
                  <div className={classes.blueText}>???????????? ??????????????????:</div>
                  <div>?? ??????????????????????</div>
                </Col>
                <Col sm={2}>
                  <div className={classes.blueText}>??????????????????????:</div>
                  <div>?? 17:00</div>
                </Col>
                <Col sm={2}>
                  <div className={classes.blueText}>?????? ????????????????????:</div>
                  <div>???? 18 ??????</div>
                </Col>
                <Col sm={2}>
                  <div className={classes.blueText}>??????????:</div>
                  <div>?????????? 10 ??????????????</div>
                </Col>
                <Col></Col>
              </Row>

              <Row style={{ marginTop: 100 }}>
                <Col xl={1}></Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 1</div>
                    <img style={{ marginTop: -30 }} src={family} alt={'family'} />
                    <div className={classes.cardTitle}>???? ???????????????? ?????????? ???? ???????????? ?????? ??????????</div>
                    <div className={classes.cardSubtitle}>
                      ???????????? ???????????????? ?????????????????? ???? ?????????????? ???????????????????? ??????????????! ???????? ?????????? ?????? ?????????? ?? ???????????? ?? ??????????????
                      ?????? ??????????????????.
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 2</div>
                    <img style={{ marginTop: -50, marginLeft: 10 }} src={kids} alt={'family'} />
                    <div className={classes.cardTitle}>???? ???? ?????????????????? ????????????????</div>
                    <div className={classes.cardSubtitle}>
                      ??????????????- ?????? ???? ???????????? ?????? ???????????? ???? ????????????????????. ??????????????- ?????? ???????????????? ????????, ????????, ?????????????? ????
                      ??????????????????????, ?????? ????????????.
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 3</div>
                    <img style={{ marginTop: -30 }} src={talk} alt={'family'} />
                    <div className={classes.cardTitle}>???? ???????????? ???????????????? ??????????????????</div>
                    <div className={classes.cardSubtitle}>
                      ?????? ?????????? ?????????????? ???????????????????? ?????????? 10 ??????. ???? ?????? ?????????? ???? ?????????????????????? ?????????????????? ?????????????????? ??????????????
                      ?? ???????????? ?????? ?? ???????? ????????????????????.
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 4</div>
                    <img style={{ marginTop: -30 }} src={draw} alt={'family'} />
                    <div className={classes.cardTitle}>???? ???????????????????? ???????????? ??????????????</div>
                    <div className={classes.cardSubtitle}>
                      ???? ?????????????????? ???????????????????????? ???? ?????????????????????? ??????????????????, ?? ?????????????????? ???? ????????????????????. ?????????? ???????????? ????
                      ????????!
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 5</div>
                    <img style={{ marginTop: -50, marginLeft: 50 }} src={edu} alt={'family'} />
                    <div className={classes.cardTitle}>???? ?????????????? ?? ????????????????????</div>
                    <div className={classes.cardSubtitle}>
                      ???????????????? ????????????????, ?????? ?????????????? ???? ???????????????? ?????????????????? ??????????????????. ???? ?????????????????? ???????????? ???? ??????
                      ????????????????.
                    </div>
                  </div>
                </Col>
              </Row>

              <Container>
                <Row>
                  <Col>
                    <div className={classes.sliderTitle}>
                      {' '}
                      ?????????????????? ???????????? <span className={classes.decoratrionTitle}> ?? ????????????????: </span>{' '}
                    </div>
                  </Col>
                </Row>
                <Row style={{ padding: 60 }}>
                  <Col lg={2}></Col>
                  <Col lg={8}>
                    <div className={classes.youthAproach}>
                      <Row>
                        <Col xs={1}></Col>
                        <Col>
                          <img src={teens} alt="" />
                        </Col>
                        <Col xs={6} style={{ textAlign: 'left', margin: 10 }}>
                          ?????????????????? ?????????????????????????? ??????????????????, ?????????????????? ?????????????????????????? ?????????????????? ?? ?????????????????? ??
                          ???????????????????????????????? ???????? ???????????????????? ???????????? ?????????? ???? 20 ?????????? ?? ????????.{' '}
                        </Col>
                        <Col xs={2}></Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={2}></Col>
                </Row>
                <Row style={{ paddingLeft: 60, paddingRight: 60 }}>
                  <Col lg={2}></Col>
                  <Col lg={8}>
                    <div className={classes.youthAproach}>
                      <Row>
                        <Col xs={1}></Col>
                        <Col>
                          <img src={teens} alt="" />
                        </Col>
                        <Col xs={6} style={{ textAlign: 'left', margin: 10 }}>
                          ?????????????????? ?????????????????????????? ??????????????????, ?????????????????? ?????????????????????????? ?????????????????? ?? ?????????????????? ??
                          ???????????????????????????????? ???????? ???????????????????? ???????????? ?????????? ???? 20 ?????????? ?? ????????.{' '}
                        </Col>
                        <Col xs={2}></Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={2}></Col>
                </Row>
              </Container>
            </Container>
          </div>

          <div className={classes.atitudeContainer}>
            <Container style={{ paddingTop: 130, paddingBottom: 130 }}>
              <Row style={{ justifyContent: 'center' }}>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div className={classes.atittudeTitle}>????????????????:</div>
                    <div className={classes.atittudeSubTitle}>
                      Lorem ipsum dolor sit amet, <span className={classes.decoratrionTitle}> consectetur </span>{' '}
                      adipiscing elit. Curabitur turpis amet laoreet massa semper iaculis nisi, ornare.{' '}
                      <span className={classes.decoratrionTitle}> Amet ornare neque, </span> mauris, ullamcorper
                      facilisis eget lorem. Volutpat enim, vel massa aliquet eget. Sit augue nec quam tincidunt lacus et
                      auctor sagittis.
                    </div>
                    <img src={makingArt} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div className={classes.atittudeTitle}>????????????????:</div>
                    <div className={classes.atittudeSubTitle}>
                      Lorem ipsum dolor sit amet, <span className={classes.decoratrionTitle}> consectetur </span>{' '}
                      adipiscing elit. Curabitur turpis amet laoreet massa semper iaculis nisi, ornare.{' '}
                      <span className={classes.decoratrionTitle}> Amet ornare neque, </span> mauris, ullamcorper
                      facilisis eget lorem. Volutpat enim, vel massa aliquet eget. Sit augue nec quam tincidunt lacus et
                      auctor sagittis.
                    </div>
                    <img src={crochet} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div className={classes.atittudeTitle}>????????????????:</div>
                    <div className={classes.atittudeSubTitle}>
                      Lorem ipsum dolor sit amet, <span className={classes.decoratrionTitle}> consectetur </span>{' '}
                      adipiscing elit. Curabitur turpis amet laoreet massa semper iaculis nisi, ornare.{' '}
                      <span className={classes.decoratrionTitle}> Amet ornare neque, </span> mauris, ullamcorper
                      facilisis eget lorem. Volutpat enim, vel massa aliquet eget. Sit augue nec quam tincidunt lacus et
                      auctor sagittis.
                    </div>
                    <img src={makingArt} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div className={classes.atittudeTitle}>????????????????:</div>
                    <div className={classes.atittudeSubTitle}>
                      Lorem ipsum dolor sit amet, <span className={classes.decoratrionTitle}> consectetur </span>{' '}
                      adipiscing elit. Curabitur turpis amet laoreet massa semper iaculis nisi, ornare.{' '}
                      <span className={classes.decoratrionTitle}> Amet ornare neque, </span> mauris, ullamcorper
                      facilisis eget lorem. Volutpat enim, vel massa aliquet eget. Sit augue nec quam tincidunt lacus et
                      auctor sagittis.
                    </div>
                    <img src={makingArt} alt="art" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <Container style={{ marginTop: 100 }}>
            <Row>
              <Col></Col>
              <Col>
                <div style={{ textAlign: 'center' }}>
                  <img src={dots} alt="" />
                  <div className={classes.quote}>
                    ???? ?????????????? ????????????????. ?????????? ?????????????? ???? ?????? ????????????????, ????, ????????????-????????????????, ?? ???????? ???????????????????????? ??
                    ????????????????!
                  </div>

                  <img src={dots} alt="" />
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <div className={classes.sliderTitle}>
                  {' '}
                  <span className={classes.decoratrionTitle}> ????????????????????</span> ???????????????? ?? ??????????:
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 80 }}>
              <Col xs={4}></Col>
              <Col>
                <div>
                  <OneCourse
                    id={8}
                    title="?????????? ??????????????????
?????????? ?? 17:00"
                    bgColor="#E1D3E6"
                    label="Urban Teens"
                    lector="?????????????? ??????"
                    positionLector="??????????????????, ????????????????, ??????-??????????????????"
                    tags="psychology"
                    price={100}
                    imgLector={PASTeam}
                    img={ParentsSchool}
                    canBeInCart={false}
                    description="?????????????????? ?????????????????????? ?????????????????? ?? ???????????????????? ??????????, ?????????????????? ?????????????? ?? ??????????????????????-?????????????? ??????????????????, ?????????????????? ???????????? ?????????????????????????????? ?????????? ???????????????????? ?? ????????????."
                    accentColor="#8741A2"
                  />
                </div>
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <div className={classes.sliderTitle}>
                  {' '}
                  ?????? ???? <span className={classes.decoratrionTitle}> Urban PAS: </span>{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <DataTabsAll
                  color="#8741A2"
                  bgColor="#E1D3E6"
                  allCiurses={
                    <div>
                      <Row>
                        <Col xs={4}>
                          <OneCourse
                            id={7}
                            title="?????????? ??????????????????
                                    ?????????? ?? 17:00"
                            bgColor="#E1D3E6"
                            label="Urban Teens"
                            lector="?????????????? ??????"
                            positionLector="??????????????????, ????????????????, ??????-??????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={PASTeam}
                            img={ParentsSchool}
                            canBeInCart={false}
                            description="?????????????????? ?????????????????????? ?????????????????? ?? ???????????????????? ??????????, ?????????????????? ?????????????? ?? ??????????????????????-?????????????? ??????????????????, ?????????????????? ???????????? ?????????????????????????????? ?????????? ???????????????????? ?? ????????????."
                            accentColor="#8741A2"
                          />
                        </Col>
                        <Col xs={4}>
                          <OneCourse
                            id={1}
                            title="????????? ?????????????????????????????? ?????????????????????????"
                            bgColor="#E1D3E6"
                            label="Urban PAS"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={ReuserBroken}
                            description="????????, ?????? ??????, ?????? ???????????????? ?? ???????????? ?? ???????????????? ???? ?????????????????????????????????? ???? ???????????????????? ???????????? ????????????, ?????? ?????????????????? ?? ???????????????????????? ?? ???????????????????????? ?????????????? ?? ???????? ??????????."
                            accentColor="#8741A2"
                          />
                        </Col>
                        <Col xs={4}>
                          <OneCourse
                            id={6}
                            title="??????????????? ???????????????????? ?????????? + ??????-???????????????????????"
                            bgColor="#E1D3E6"
                            label="Urban PAS"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={bibleTruth}
                            description="???????????? ?????????????? ??????-??????????????, ???????????? ???? ???????????????? ?? ?????????????? ?????? ???????????????????? ???? ?? ???????????????????? ??????????????. ???????? ?????????? ???????????????? ?? ?????????????? ???????????????? ????????????, ?????????????? ???????????? ?????????????? ??????-??????????????."
                            accentColor="#8741A2"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={4}>
                          <OneCourse
                            id={3}
                            title="??????????????? ??????-?????????????????"
                            bgColor="#E1D3E6"
                            label="Urban Teens"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={Metodology}
                            description="?????????????????????? ???????????? ???????????????????????????? ?? ??????-????????????????????????, ???????????????????? ???? ???????? ?????? ?????????????????????????? ?? ????????????????????????."
                            accentColor="#8741A2"
                          />
                        </Col>
                        <Col xs={4}>
                          <OneCourse
                            canBeInCart={false}
                            id={4}
                            title="???????????????????????? ????????????????????????????"
                            bgColor="#E1D3E6"
                            label="Urban PAS"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={audioUp}
                            description="?????????????????? ??????????????????????, ?????? ?????????? ?????????????????? ?? ?????????? ?? ??????????... ?????????????????????? ?? ???????????????? ?? ???????????????? ???? ?????????????? ?????????????? ?????????? ??????????."
                            accentColor="#8741A2"
                          />
                        </Col>
                        <Col xs={4}>
                          <OneCourse
                            canBeInCart={false}
                            id={5}
                            title="???????????????????????? ??????????????????? ?????????????????"
                            bgColor="#E1D3E6"
                            label="Urban PAS"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={sand}
                            description="?????????? ???????????????????????????? ?? ???????????? ???????????????? ?????????????? ????????????????????????, ??????????????, ?? ?? ???????? ?????????? ?????????????????? ???????????????????????????? ????????????????..."
                            accentColor="#8741A2"
                          />
                        </Col>
                      </Row>
                    </div>
                  }
                  offline={
                    <Row>
                      <Col xs={4}>
                        <OneCourse
                          id={7}
                          title="?????????? ?????????????????? ?????????? ?? 17:00"
                          bgColor="#E1D3E6"
                          label="Urban Teens"
                          lector="?????????????? ??????"
                          positionLector="??????????????????, ????????????????, ??????-??????????????????"
                          tags="psychology"
                          price={100}
                          imgLector={PASTeam}
                          img={ParentsSchool}
                          canBeInCart={false}
                          description="?????????????????? ?????????????????????? ?????????????????? ?? ???????????????????? ??????????, ?????????????????? ?????????????? ?? ??????????????????????-?????????????? ??????????????????, ?????????????????? ???????????? ?????????????????????????????? ?????????? ???????????????????? ?? ????????????."
                          accentColor="#8741A2"
                        />
                      </Col>
                    </Row>
                  }
                  freeCouses={
                    <div>
                      <Row>
                        <Col xs={4}>
                          <OneCourse
                            canBeInCart={false}
                            id={4}
                            title="???????????????????????? ????????????????????????????"
                            bgColor="#E1D3E6"
                            label="Urban PAS"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={audioUp}
                            description="?????????????????? ??????????????????????, ?????? ?????????? ?????????????????? ?? ?????????? ?? ??????????... ?????????????????????? ?? ???????????????? ?? ???????????????? ???? ?????????????? ?????????????? ?????????? ??????????."
                            accentColor="#8741A2"
                          />
                        </Col>
                        <Col xs={4}>
                          <OneCourse
                            canBeInCart={false}
                            id={5}
                            title="???????????????????????? ??????????????????? ?????????????????"
                            bgColor="#E1D3E6"
                            label="Urban PAS"
                            lector="Iulia Ubeivolk"
                            positionLector="????????????????, ??????-????????????????"
                            tags="psychology"
                            price={100}
                            imgLector={IUbeivolk}
                            img={sand}
                            description="?????????? ???????????????????????????? ?? ???????????? ???????????????? ?????????????? ????????????????????????, ??????????????, ?? ?? ???????? ?????????? ?????????????????? ???????????????????????????? ????????????????..."
                            accentColor="#8741A2"
                          />
                        </Col>
                      </Row>
                    </div>
                  }
                />
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

export default Art;