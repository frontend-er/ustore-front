// @ts-nocheck
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OneCourseMini from '../OneCourseMini';
import IUbeivolk from '../../assets/CoursesMini/ArtTherapy/RestoreBroken/IUbeivolk.png';
import AVasiltsova from '../../assets/CoursesMini/ArtTherapy/Audiotracks/AVasiltsova.png';
import AutioGoHight from '../../assets/CoursesMini/ArtTherapy/Audiotracks/AutioGoHight.png';
import ReuserBroken from '../../assets/CoursesMini/ArtTherapy/RestoreBroken/RestoreBoken.png';
import Metodology from '../../assets/CoursesMini/ArtTherapy/Methodology/Metodology.png';
import UAnna from '../../assets/CoursesMini/Kids/UAnna.png';
import InnaCiriac from '../../assets/CoursesMini/Kids/InnaCiriac.png';
import OVoronova from '../../assets/CoursesMini/Kids/OVoronova.png';
import MethodsOfLections from '../../assets/CoursesMini/Kids/MethodsOfLections.png';
import KidsGames from '../../assets/CoursesMini/Kids/KidsGames.png';
import KidsQuests from '../../assets/CoursesMini/Kids/KidsQuests.png';
import SProcopov from '../../assets/CoursesMini/Youth/SProcopov.png';
import VGrecov from '../../assets/CoursesMini/Youth/VGrecov.png';
import PrepareToSucces from '../../assets/CoursesMini/Youth/PrepareToSucces.png';
import EqualRelationShip from '../../assets/CoursesMini/Youth/EqualRelationShip.png';
import LeaderShip from '../../assets/CoursesMini/Youth/LeaderShip.png';


const useStyles = makeStyles((theme) => ({
  sliderTitle: {
    marginTop: 80,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 32,
    color: '#535353',
    fontWeight: 900,
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal'
  },

  lectorHolder: {
    fontWeight: 900
  },

  wrapperLabelLector: {
    color: '#8A8A8A',
    fontSize: 12
  },

  wrapperDirection: {
    display: 'flex',
    height: 470,
    marginBottom: 40
  },

  descriptionDirection: {
    background: '#F3ECF6',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    fontSize: 14,
    width: 340
  },

  descriptionDirectionKids: {
    background: '#E2F5F7',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    fontSize: 14,
    width: 340
  },

  descriptionDirectionYouth: {
    background: '#ECEEF6',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    fontSize: 14,
    width: 340
  },

  popularBy: {
    fontWeight: 500,
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#A3A3A3',
    marginTop: 20,
    marginBottom: 10
  },

  urbanPasName: {
    fontWeight: 900,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#8741A2',
    marginBottom: 5
  },

  urbanKidsName: {
    fontWeight: 900,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#3BBAC8',
    marginBottom: 5
  },

  urbanYouthName: {
    fontWeight: 900,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#100267',
    marginBottom: 5
  },

  descriptionText: {
    flex: 'wrap',
    width: 281,
    fontWeight: 300,
    fontSize: 16,
    textAlign: 'center'
  },

  lectorsWrapper: {
    display: 'flex',
    marginTop: 20
  },

  lectorsWrapperKids: {
    display: 'flex',
    marginTop: 5
  },

  textLectorPosition: {
    fontWeight: 300,
    fontSize: 15,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#A3A3A3',
    marginTop: 20
  }
}));

const DirectionsPack = () => {
  const classes = useStyles();

  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <div>
              <div className={classes.sliderTitle}>Наши направления:</div>
              <div className={classes.wrapperDirection}>
                <div className={classes.descriptionDirection}>
                  <div className={classes.popularBy}>Популярное от:</div>
                  <div className={classes.urbanPasName}>Urban PAS</div>
                  <div className={classes.descriptionText}>
                    Психологическая Арт Студия предлагает курс арт-терапии по направлениям: живопись, ручное творчество,
                    песочная терапия и др.
                  </div>
                  <div className={classes.textLectorPosition}>Тренеры:</div>
                  <div>
                    <div className={classes.lectorsWrapper}>
                      <div>
                        <img src={IUbeivolk} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Юлия Убейволк
                        </Typography>
                        <div className={classes.subtitle}>Психолог, арт-терапевт</div>
                      </div>
                    </div>
                    <div className={classes.lectorsWrapper}>
                      <div>
                        <img src={AVasiltsova} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Анна Васильцова
                        </Typography>
                        <div className={classes.subtitle}>Психолог, арт-терапевт</div>
                      </div>
                    </div>
                  </div>
                </div>
                <OneCourseMini
                  id={1}
                  title="“Как восстанавливать разрушенное”"
                  bgColor="#E1D3E6"
                  label="Urban PAS"
                  lector="Iulia Ubeivolk"
                  positionLector="Психолог, арт-терапевт"
                  tags="psychology"
                  price={100}
                  imgLector={IUbeivolk}
                  img={ReuserBroken}
                  description="Курс, для тех, кто работает с людьми и помогает им восстанавливаться от нанесенных ударов судьбы, кто нуждается в инструментах и практических советах в этом труде."
                  accentColor="#8741A2"
                  duration={'40 часов'}
                  tagsMini={['Консультант', 'Травма']}
                  button="Подробнее"
                />
                <OneCourseMini
                  id={2}
                  title="“Методы Арт-терапии”"
                  bgColor="#E1D3E6"
                  label="Urban PAS"
                  lector="Iulia Ubeivolk"
                  positionLector="Психолог, арт-терапевт"
                  tags="psychology"
                  price={100}
                  imgLector={AVasiltsova}
                  img={Metodology}
                  description="Возможность самому соприкоснуться с арт-инструментом, попробовав на себе его эффективность и безопасность."
                  accentColor="#8741A2"
                  duration={'7 часов'}
                  tagsMini={['Теория', 'Практика']}
                  button="Скоро"
                />
                <OneCourseMini
                  id={3}
                  title="“Как восстанавливать разрушенное”"
                  bgColor="#E1D3E6"
                  label="Urban PAS"
                  lector="Iulia Ubeivolk"
                  positionLector="Психолог, арт-терапевт"
                  tags="psychology"
                  price={100}
                  imgLector={IUbeivolk}
                  img={AutioGoHight}
                  description="Мысленное путешествие, где можно отдохнуть и душой и телом...
                  Встретьтесь с мудрецом и ответьте на главные вопросы своей жизни."
                  accentColor="#8741A2"
                  duration={'7 минут'}
                  tagsMini={['Уравновешенность', 'Релакс']}
                  button="Подробнее"
                />
              </div>
              <div className={classes.wrapperDirection}>
                <div className={classes.descriptionDirectionKids}>
                  <div className={classes.popularBy}>Популярное от:</div>
                  <div className={classes.urbanKidsName}>Urban Kids</div>
                  <div className={classes.descriptionText}>
                    Центр Раннего Развития предлагает программу по обучению мам и их детей, охватывая основные периоды
                    развития и воспитания.
                  </div>
                  <div className={classes.textLectorPosition}>Педагоги:</div>
                  <div>
                    <div className={classes.lectorsWrapperKids}>
                      <div>
                        <img src={OVoronova} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Ольга Воронова
                        </Typography>
                        <div className={classes.subtitle}>Директор центра, педагог</div>
                      </div>
                    </div>
                    <div className={classes.lectorsWrapperKids}>
                      <div>
                        <img src={UAnna} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Анна Убейволк
                        </Typography>
                        <div className={classes.subtitle}>Методист</div>
                      </div>
                    </div>
                    <div className={classes.lectorsWrapperKids}>
                      <div>
                        <img src={InnaCiriac} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Инна Кирияк
                        </Typography>
                        <div className={classes.subtitle}>Детский педагог</div>
                      </div>
                    </div>
                  </div>
                </div>
                <OneCourseMini
                  id={4}
                  title="“Методы составления
                 детских уроков”"
                  bgColor="#E2F5F7"
                  label="Urban Kids"
                  lector="Анна Убейволк"
                  positionLector="Методист"
                  tags="psychology"
                  price={100}
                  imgLector={UAnna}
                  img={MethodsOfLections}
                  description="Мы соединили западный подход к развитию креативности ребенка и восточно-европейский подход к развитию мышления. Покажем, как выглядит хороший дидактический материал, и поделимся авторскими разработками."
                  accentColor="#3BBAC8"
                  button="Подробнее"
                  tagsMini={['Теория', 'Практика']}
                  duration={'40 минут'}
                />
                <OneCourseMini
                  id={12}
                  title="“Сборник упражнений для детей”"
                  bgColor="#E2F5F7"
                  label="Urban Kids"
                  lector="Анна Убейволк"
                  positionLector="Методист"
                  tags="psychology"
                  price={100}
                  imgLector={InnaCiriac}
                  img={KidsGames}
                  description="Сборник упражнений для детей по развитию пяти сфер личности ребенка: эмоциональная, физическая, социальная, интеллектуальная, духовная."
                  accentColor="#3BBAC8"
                  button="Подробнее"
                  tagsMini={['Детская психология', 'Игры для детей']}
                  duration={'Все время дополняется'}
                />
                <OneCourseMini
                  id={6}
                  title="“Творческие задания для детей”"
                  bgColor="#E2F5F7"
                  label="Urban PAS"
                  lector="Iulia Ubeivolk"
                  positionLector="Психолог, арт-терапевт"
                  tags="psychology"
                  price={100}
                  imgLector={KidsQuests}
                  img={KidsQuests}
                  description="Представляем вам авторские разработки по развитию
                   детской креативности. В сборник входят задания для распечатки и видео-объяснения к ним."
                  accentColor="#3BBAC8"
                  duration={'Все время дополняется'}
                  tagsMini={['Детская креативность', 'Творчество']}
                  button="Подробнее"
                />
              </div>

              <div className={classes.wrapperDirection}>
                <div className={classes.descriptionDirectionYouth}>
                  <div className={classes.popularBy}>Популярное от:</div>
                  <div className={classes.urbanYouthName}>Urban Youth</div>
                  <div className={classes.descriptionText}>
                    Молодые люди задаются “взрослыми” вопросами. Мы дадим на них развернутые профессиональные ответы.
                  </div>
                  <div className={classes.textLectorPosition}>Тренеры:</div>
                  <div>
                    <div className={classes.lectorsWrapperKids}>
                      <div>
                        <img src={SProcopov} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Сергей Прокопов
                        </Typography>
                        <div className={classes.subtitle}>Социальный педагог, тренер</div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className={classes.lectorsWrapperKids}>
                      <div>
                        <img src={VGrecov} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} />
                      </div>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                          Виталий Греков
                        </Typography>
                        <div className={classes.subtitle}>Разработчик развивающего досуга</div>
                      </div>
                    </div>
                  </div>
                </div>
                <OneCourseMini
                  id={7}
                  title="“Подготовка к успеху”"
                  bgColor="#D6D6E8"
                  lector="Анна Убейволк"
                  positionLector="Методист"
                  tags="psychology"
                  price={100}
                  imgLector={UAnna}
                  img={PrepareToSucces}
                  description="Курс, призванный помочь сформировать здоровое поколение молодых лидеров, которые берут на себя ответственность за собственное будущее и будущее своей страны. "
                  accentColor="#100267"
                  button="Подробнее"
                  tagsMini={['Профориентация', 'Призвание']}
                  duration={'Все время дополняется'}
                />
                <OneCourseMini
                  id={8}
                  title="“Равноценные отношения”"
                  bgColor="#D6D6E8"
                  lector="Анна Убейволк"
                  positionLector="Методист"
                  tags="psychology"
                  price={100}
                  imgLector={UAnna}
                  img={EqualRelationShip}
                  description="Курс подготовки к браку христианской молодежи. Поднимаем основные вопросы, которые волнуют современную молодежь."
                  accentColor="#100267"
                  button="Подробнее"
                  tagsMini={['Отношения', 'Брак']}
                  duration={'Все время дополняется'}
                />
                <OneCourseMini
                  id={9}
                  title="“Равноценное лидерство”"
                  bgColor="#D6D6E8"
                  lector="Анна Убейволк"
                  positionLector="Методист"
                  tags="psychology"
                  price={100}
                  imgLector={UAnna}
                  img={LeaderShip}
                  description="Формирование лидеров нового поколения, обладающих здоровой самооценкой, умеющих работать в команде ради достижения общей цели и позитивных изменений в сообществе."
                  accentColor="#100267"
                  button="Подробнее"
                  tagsMini={['Равноценность', 'Лидерство']}
                  duration={'Все время дополняется'}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DirectionsPack;
