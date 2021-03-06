import { makeStyles } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';

import OneCourse from '../components/OneCourse';
import HeaderBgTop from '../assets/CoursesMini/Teens/Top/HeaderBgTop.png';
import HeaderBgUp from '../assets/CoursesMini/Teens/Up/HeaderBg.png';
import HeaderBgHight from '../assets/CoursesMini/Teens/Hight/HeaderBgHight.png';
import SSemaev from '../assets/CoursesMini/Teens/SSemaev.png';
import VKapernauli from '../assets/CoursesMini/Teens/VKapernauli.png';
import PASTeam from '../assets/CoursesMini/ArtTherapy/ParentsScool/PASTeam.png';
import ParentsSchool from '../assets/CoursesMini/ArtTherapy/ParentsScool/ParentsSchool.png';

const useStyles = makeStyles(() => ({
  sliderTitle: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 32,
    color: '#696969',
    fontWeight: 900,
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal'
  }
}));
function Offline() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div style={{ textAlign: 'center', fontSize: 13 }}> Кишинев, ул. Pan Halippa, 1</div>
            <div className={classes.sliderTitle}> Офлайн мероприятия: </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 20, justifyContent: 'space-between' }}>
          <Col xs={1}></Col>
          <Col>
            <div>
              <OneCourse
                id={7}
                title="“High”
                Воскресенье в 10:00"
                bgColor="#ECEEF6"
                label="Urban Teens"
                lector="Вера Карапунарлы"
                positionLector="Социальный педагог"
                tags="psychology"
                price={100}
                imgLector={VKapernauli}
                img={HeaderBgHight}
                canBeInCart={false}
                teensOfflene={true}
                description="Встречи для тех, кому от 11 до 13 лет! Здесь ты сможешь найти друзей, поиграть в интересные игры, послушать классных людей!"
                accentColor="#2475B7"
              />
            </div>
          </Col>
          <Col>
            <div>
              <OneCourse
                id={7}
                title="“Urban Top” 
                        Воскресенье в 14:00"
                bgColor="#ECEEF6"
                label="Urban Teens"
                lector="Сергей Семаев"
                positionLector="Социальный педагог"
                tags="psychology"
                price={100}
                imgLector={SSemaev}
                img={HeaderBgTop}
                canBeInCart={false}
                teensOfflene={true}
                description="Высшая ступень Урбан Тинс! Теперь ты в топе! Встречи для тех, кому от 14 до 16 лет! Давай вместе найдем ответы на твои вопросы!"
                accentColor="#2475B7"
              />
            </div>
          </Col>
          <Col>
            <div>
              <OneCourse
                id={7}
                title="Школа родителей
Среда в 17:00"
                bgColor="#E1D3E6"
                label="Urban PAS"
                lector="Команда ПАС"
                positionLector="Психологи, педагоги, арт-терапевты"
                tags="psychology"
                price={100}
                imgLector={PASTeam}
                img={ParentsSchool}
                canBeInCart={false}
                description="Повышение грамотности родителей в воспитании детей, улучшение климата в родительско-детских отношений, повышение уровня взаимопонимания между родителями и детьми."
                accentColor="#8741A2"
              />
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Offline;
