import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OneCourse from '../OneCourse';
import ReuserBroken from '../../assets/CoursesMini/ArtTherapy/RestoreBroken/RestoreBoken.png'
import IUbeivolk from '../../assets/CoursesMini/ArtTherapy/RestoreBroken/IUbeivolk.png'
import SProcopov from '../../assets/CoursesMini/Youth/SProcopov.png'
import PrepareToSucces from '../../assets/CoursesMini/Youth/PrepareToSucces.png'
import MethodsOfLections from '../../assets/CoursesMini/Kids/MethodsOfLections.png'
import UAnna from '../../assets/CoursesMini/Kids/UAnna.png'


const useStyles = makeStyles(theme => ({

   hotSubtitle: {
      marginTop: 100,
      textAlign: 'center',
      fontSize: 14,
      color: '#000000'
   },


   hotTitle: {
      textAlign: 'center',
      fontSize: 32,
      color: '#000000',
      fontWeight: 900,
      fontFamily: 'Roboto Slab',
      fontStyle: 'normal',
   },



}));


function HotOne() {
   const classes = useStyles()
   return (
      <Container fluid="xxl" style={{ marginBottom: 40 }}>
         <Row >
            <Col >
               <div className={classes.hotSubtitle}>
                  Самые продоваемые
               </div>
               <div className={classes.hotTitle} style={{ marginBottom: 40 }}>
                  Хиты продаж
               </div>
            </Col>
         </Row>


         <Row >
            <Col xs={1}>
            </Col>
            <Col >
               <div>
                  <OneCourse id={1} title='“Как восстанавливать разрушенное”' bgColor='#E1D3E6' label="Urban PAS" lector='Iulia Ubeivolk' positionLector="Психолог, арт-терапевт" tags='psychology' price={100} imgLector={IUbeivolk} img={ReuserBroken} description="Курс, для тех, кто работает с людьми и помогает им восстанавливаться от нанесенных ударов судьбы, кто нуждается в инструментах и практических советах в этом труде." accentColor='#8741A2' />

               </div>
            </Col>
            <Col >
               <div>
                  <OneCourse id={8} title='“Подготовка к успеху”' bgColor='#E8E6F0' label=" Urban Youth" lector='Сергей Прокопов' positionLector="Социальный педагог" tags='youth' price={100} imgLector={SProcopov} img={PrepareToSucces} description="На курсе изучаем, как понимать себя, свои ресурсы и управлять ими. Помогаем ответить на вопрос: «Что делать после окончания школы?»" accentColor='#100267' />

               </div>
            </Col>
            <Col >
               <div>
                  <OneCourse id={13} title='“Методы составления
                     детских уроков”' bgColor='#E2F5F7' label="Urban Kids" lector='Анна Убейволк' positionLector="Методист" tags='psychology' price={100}
                     imgLector={UAnna} img={MethodsOfLections}
                     description="Мы соединили западный подход к развитию креативности ребенка и восточно-европейский подход к развитию мышления. Покажем, как выглядит хороший дидактический материал, и поделимся авторскими разработками." accentColor='#3BBAC8' />

               </div>
            </Col>
            <Col xs={1}>
            </Col>
         </Row>
      </Container>
   );
}

export default HotOne;