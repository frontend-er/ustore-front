import {
  Hidden,
  makeStyles,
  Button,
  MenuItem,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import prev from '../assets/Event/team.png';
import quality from '../assets/Event/quality.png';
import retret from '../assets/Event/retret.png';
import conference from '../assets/Event/conference.png';
import online from '../assets/Event/online.png';
import kids from '../assets/Event/kids.png';
import edu from '../assets/Kids/edu.png';
import blackBg from '../assets/Event/blackBg.png';
import order from '../assets/Event/order.png';
import hands from '../assets/Event/hands.png';
import gift from '../assets/Event/gift.png';
import cash from '../assets/Event/cash.png';
import date from '../assets/Event/date.png';
import dots from '../assets/Event/dots.png';
import bgBlurSmall from '../assets/Teens/bgBlurSmall.png';
import SliderLeader from '../components/MainPage/SliderLeader';
import CallSection from '../components/CallSection';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: 'Roboto Slab',
    backgroundColor: '#F5F5F5'
  },
  titlePage: {
    fontSize: 54,
    lineHeight: 1.2,
    alignItems: 'center',
    letterSpacing: '-0.017em',
    color: '#000',
    marginBottom: 40,
    textAlign: 'right',
    fontWeight: 600
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
    color: '#9BC53E'
  },
  youthAproach: {
    border: '1px solid #9BC53E'
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
    background: '#9BC53E',
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
    color: '#9BC53E',
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
    backgroundColor: '#9BC53E',
    color: '#fff'
  },

  decoratedNumbers: {
    fontFamily: 'Londrina Outline',
    fontSize: 120,
    color: '#9BC53E',
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

  textBig: {
    color: '#9BC53E',
    fontWeight: 900,
    fontSize: 52
  },

  whyWe: {
    fontWeight: 900,
    fontSize: 25,
    padding: 20
  },

  atitudeContainer: {
    backgroundImage: `url(${blackBg})`,
    backgroundRepeat: 'no-repeat, repeat',
    marginTop: 120
  },

  atitudeHolder: {
    minHeight: '330px',
    textAlign: 'center'
  },

  atittudeTitle: {
    color: '#FFF',
    margin: 10,
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: 900,
    fontSize: 28,
    borderRadius: '50%',
    border: '5px solid #9BC53E'
  },

  atittudeSubTitle: {
    color: '#FFF',
    margin: 10,
    fontWeight: 400,
    fontSize: 18,
    padding: 20
  },

  quote: {
    margin: 20,
    fontWeight: 900,
    fontSize: 24
  },

  orderHolderLeft: {
    background: '#fff',
    boxShadow: '2px 4px 40px rgba(0, 0, 0, 0.25)',
    borderRadius: 48
  },

  textField: {
    width: 300,
    borderRadius: 112,
    margin: 14,
    paddingBottom: 12
  },

  cssLabel: {
    color: '#B1B1B1',
    fontSize: 18
  },

  cssOutlinedInput: {
    color: '#B1B1B1',
    '&$cssFocused $notchedOutline': {
      borderColor: `#9BC53E !important`
    }
  },

  formHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#B1B1B1 !important'
  },

  calendar: {
    border: 'none',
    fontFamily: 'Roboto Slab'
  },

  numberCalendar: {
    color: '#9F9F9F'
  },
  prise: {
    fontWeight: 900,
    fontSize: 24,
    marginTop: 0,
    marginLeft: 40,
    marginBottom: 40
  },
  priseCalc: {
    fontWeight: 900,
    fontSize: 24,
    color: '#7B7B7B',
    borderBottom: '2px solid #38B2C6'
  }
}));

function Event() {
  const classes = useStyles();
  const [password, setPassword] = React.useState<string>('');
  const [employees, setEmployees] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [city, setCity] = React.useState('');
  const [value, onChange] = React.useState(new Date());
  const [prise, setPrise] = React.useState('10 000');
  const myRef = useRef<HTMLDivElement>()

  
   {/* @ts-ignore */}
  const executeScroll = () => myRef?.current?.scrollIntoView()
  const handleChangeEmployees = (event: SelectChangeEvent) => {
    setEmployees(event.target.value);
  };
  const handleChangeDuration = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };
  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <div className={classes.root}>
          <Header />
          <div>
            <Container>
              <Row style={{ alignItems: 'center' }}>
                <Hidden smDown>
                  <Col xl={5} style={{ marginTop: 120 }}>
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
                <Col xl={1}></Col>
                <Col xl={5} style={{ marginTop: 120 }}>
                  <div className={classes.titlePage}>
                    Корпоративные
                    <b> лекции, вебинары и игры </b>для вас и ваших сотрудников!
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    Проводим психологические тренинги и повышаем soft skills ваших сотрудников.
                  </div>
                </Col>
              </Row>

              <Row style={{ marginTop: 100 }}>
                <Col xl={1}></Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 1</div>
                    <img style={{ width: 180, marginTop: -30 }} src={quality} alt={'family'} />
                    <div className={classes.cardTitle}>Мы проводим оценку состояния сотрудников</div>
                    <div className={classes.cardSubtitle}>
                      Узнаем о психологическом состоянии вашей команды и обсудим прогноз возможных опасностей.
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 2</div>
                    <img style={{ width: 180, marginTop: -20 }} src={conference} alt={'family'} />
                    <div className={classes.cardTitle}>Мы проводим тренинги</div>
                    <div className={classes.cardSubtitle}>Повысим эффективность работы команды.</div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 3</div>
                    <img style={{ width: 180, marginTop: -30 }} src={retret} alt={'retret'} />
                    <div className={classes.cardTitle}>Мы проводим ретриты</div>
                    <div className={classes.cardSubtitle}>Это будет командо-формирующий отдых.</div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 4</div>
                    <img style={{ width: 180 }} src={kids} alt={'kids'} />
                    <div className={classes.cardTitle}>Мы работаем и с детьми</div>
                    <div className={classes.cardSubtitle}>
                      Успешно создаем здоровый и веселый досуг для детей и подростков.
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className={classes.cardHolder}>
                    <div className={classes.numberCard}> 5</div>
                    <img style={{ width: 180, marginTop: -20, marginLeft: 10 }} src={online} alt={'online'} />
                    <div className={classes.cardTitle}>Мы работаем и онлайн</div>
                    <div className={classes.cardSubtitle}>
                      Полностью организуем видео-конференции, телемосты и иные онлайн мероприятия, обеспечивая их своим
                      качественным оборудованием.
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className={classes.sliderTitle}> Почему мы? </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <span className={classes.textBig}>1.</span>
                    <div className={classes.whyWe}>Опыт</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    Наша команда работает <br /> слаженно более 10 лет
                  </div>
                </Col>

                <Col>
                  <div
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <span className={classes.textBig}>2.</span>
                    <div className={classes.whyWe}>
                      Персональный <br /> подход
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    Мы учитываем все ваши <br /> вопросы и переживания
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <span className={classes.textBig}>3.</span>
                    <div className={classes.whyWe}>Результат</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    Вы получаете не только незабываемые <br /> впечатления, вы достигаете цели
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className={classes.atitudeContainer}>
            <Container style={{ paddingTop: 130, paddingBottom: 130 }}>
              <Row>
                <Col>
                  <div className={classes.sliderTitle} style={{ color: '#fff' }}>
                    {' '}
                    Как это происходит?
                  </div>
                </Col>
              </Row>
              <Row style={{ justifyContent: 'center', marginTop: 30 }}>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div>
                      <span className={classes.atittudeTitle}>1</span>
                    </div>
                    <div className={classes.atittudeSubTitle}>Оставляете заявку</div>
                    <img src={order} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div>
                      <span className={classes.atittudeTitle}>2</span>
                    </div>
                    <div className={classes.atittudeSubTitle}>
                      Вместе выбираем дату, тему, длительность и формат мероприятия
                    </div>
                    <img src={hands} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div>
                      <span className={classes.atittudeTitle}>3</span>
                    </div>
                    <div className={classes.atittudeSubTitle}>Утверждаем дату</div>
                    <img src={date} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div>
                      <span className={classes.atittudeTitle}>4</span>
                    </div>
                    <div className={classes.atittudeSubTitle}>Оплачиваете заказ.</div>
                    <img src={cash} alt="art" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.atitudeHolder}>
                    <div>
                      <span className={classes.atittudeTitle}>5</span>
                    </div>
                    <div className={classes.atittudeSubTitle}>
                      Согласовываем мероприятие на нашей или вашей площадке и оплачиваете заказ.
                    </div>
                    <img src={gift} alt="art" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={5}></Col>
                <Col xs={2}>
                  <Button
                    onClick={executeScroll}
                    variant="contained"
                    fullWidth
                    color="primary"
                  >
                    Оставить заявку
                  </Button>
                </Col>
                <Col xs={5}></Col>
              </Row>
            </Container>
          </div>

          <Container style={{ marginTop: 20, marginBottom: 100 }}>
            <Row>
              <Col>
              {/* @ts-ignore */}
                <div className={classes.sliderTitle} ref={myRef}> Оставить заявку: </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <div className={classes.orderHolderLeft}>
                  <div className={classes.whyWe} style={{ fontSize: 18, textAlign: 'center' }}>
                    <div>Количество участников</div>
                    <FormControl fullWidth variant="standard" sx={{ m: 1, maxWidth: 220, marginBottom: 3 }}>
                      <InputLabel id="demo-simple-select-helper-label">Количество участников</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={employees}
                        label="Количество участников"
                        onChange={handleChangeEmployees}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={5}>5 участников</MenuItem>
                        <MenuItem value={6}>6 участников</MenuItem>
                        <MenuItem value={7}>7 участников</MenuItem>
                        <MenuItem value={8}>8 участников</MenuItem>
                        <MenuItem value={9}>9 участников</MenuItem>
                        <MenuItem value={10}>10 участников</MenuItem>
                        <MenuItem value={15}>10+ участников</MenuItem>
                        <MenuItem value={20}>15+ участников </MenuItem>
                        <MenuItem value={30}>20+ участников</MenuItem>
                        <MenuItem value={40}>40 участников</MenuItem>
                      </Select>
                    </FormControl>
                    <div>Длительность</div>
                    <FormControl fullWidth variant="standard" sx={{ m: 1, maxWidth: 220, marginBottom: 3 }}>
                      <InputLabel id="demo-simple-select-helper-label">Длительность</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={duration}
                        label="Длительность"
                        onChange={handleChangeDuration}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1 час</MenuItem>
                        <MenuItem value={2}>2 часа</MenuItem>
                        <MenuItem value={5}>5 часов</MenuItem>
                        <MenuItem value={8}>8 часов</MenuItem>
                      </Select>
                    </FormControl>
                    <div>Город</div>
                    <FormControl fullWidth variant="standard" sx={{ m: 1, maxWidth: 220, marginBottom: 3 }}>
                      <InputLabel id="demo-simple-select-helper-label">Город</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={city}
                        label="Город"
                        onChange={handleChangeCity}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Chisinau'}>Кишинев</MenuItem>
                        <MenuItem value={'Orhei'}>Орхей</MenuItem>
                        <MenuItem value={'Belti'}>Бельцы</MenuItem>
                      </Select>
                      <FormHelperText>With label + helper text</FormHelperText>
                    </FormControl>
                  </div>
                  <Row>
                    <Col>
                      <div className={classes.whyWe} style={{ fontSize: 18, textAlign: 'center' }}>
                        <div>Формат</div>
                      </div>
                      <div>
                        <div style={{ marginLeft: 20 }}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked />}
                              label="Корпоратив"
                            />
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                              label="Тренинг"
                            />
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                              label="Семинар"
                            />
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                              label="Team bu"
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className={classes.whyWe} style={{ fontSize: 18, textAlign: 'center' }}>
                        <div>Тема</div>
                      </div>
                      <div>
                        <div style={{ marginLeft: 20 }}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked />}
                              label="Психология"
                            />
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                              label="История"
                            />
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                              label="Арт"
                            />
                            <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                              label="Наука"
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={8}>
                <div className={classes.orderHolderLeft}>
                  <Row>
                    <Col>
                      <div style={{ marginTop: 20, marginLeft: 40, marginBottom: 20 }}>
                        <TextField
                          id="standard-name"
                          label=""
                          placeholder="Password"
                          className={classes.textField}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          value={password}
                          margin="normal"
                          variant="standard"
                          InputLabelProps={{
                            classes: {
                              root: classes.cssLabel
                            }
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput
                            },
                            inputMode: 'numeric'
                          }}
                          fullWidth
                        />
                      </div>

                      <div style={{ marginTop: 20, marginLeft: 40, marginBottom: 20 }}>
                        <TextField
                          id="standard-name"
                          label=""
                          placeholder="Password"
                          className={classes.textField}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          value={password}
                          margin="normal"
                          variant="standard"
                          InputLabelProps={{
                            classes: {
                              root: classes.cssLabel
                            }
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput
                            },
                            inputMode: 'numeric'
                          }}
                          fullWidth
                        />
                      </div>
                      <div style={{ marginTop: 20, marginLeft: 40, marginBottom: 20 }}>
                        <TextField
                          id="standard-name"
                          label=""
                          placeholder="Password"
                          className={classes.textField}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          value={password}
                          margin="normal"
                          variant="standard"
                          InputLabelProps={{
                            classes: {
                              root: classes.cssLabel
                            }
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput
                            },
                            inputMode: 'numeric'
                          }}
                          fullWidth
                        />
                      </div>
                    </Col>
                    <Col>
                      <div style={{ margin: 30 }}>
                        <Calendar
                          onChange={onChange}
                          value={value}
                          className={`${classes.calendar} ${classes.numberCalendar}`}
                          showWeekNumbers={false}
                          showNeighboringMonth={false}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ marginTop: 10, marginLeft: 40, marginBottom: 20, marginRight: 40 }}>
                        <TextField
                          id="standard-name"
                          label=""
                          placeholder="Password"
                          className={classes.textField}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          multiline
                          value={password}
                          margin="normal"
                          rows={4}
                          InputLabelProps={{
                            classes: {
                              root: classes.cssLabel
                            }
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput
                            },
                            inputMode: 'numeric'
                          }}
                          fullWidth
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className={classes.prise}>
                        Цена: <span className={classes.priseCalc}>{prise} лей</span>
                      </div>
                    </Col>

                    <Col>
                      <div style={{ marginRight: 40 }}>
                        <Button fullWidth variant="contained" color="primary">
                          Оставить заявку
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container style={{ marginTop: 100, marginBottom: 100 }}>
            <Row>
              <Col></Col>
              <Col>
                <div style={{ textAlign: 'center' }}>
                  <img src={dots} alt="" />
                  <div className={classes.quote}>
                    Из вашего мероприятия мы сделаем Событие! Мы создаем впечатления как для подростков, так и для
                    бизнес компаний!
                  </div>

                  <img src={dots} alt="" />
                </div>
              </Col>
              <Col></Col>
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

export default Event;
