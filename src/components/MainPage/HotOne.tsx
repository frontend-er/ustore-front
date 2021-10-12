import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OneCourse from '../OneCourse';
import ReuserBroken from '../../assets/CoursesMini/ArtTherapy/RestoreBroken/RestoreBoken.png'
import IUbeivolk from '../../assets/CoursesMini/ArtTherapy/RestoreBroken/IUbeivolk.png'

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
      <Container fluid="xxl">
         <Row >
            <Col >
               <div className={classes.hotSubtitle}>
                  Самые продоваемые
               </div>
               <div className={classes.hotTitle}>
                  Хиты продаж
               </div>
            </Col>
         </Row>


         <Row >
            <Col >
               <div>
                  <OneCourse id={1} title='“Как восстанавливать
                        разрушенное”' bgColor='#E1D3E6' label="Urban PAS" lector='Iulia Ubeivolk' positionLector="Психолог, арт-терапевт" tags='psychology' price={100} imgLector={IUbeivolk} img={ReuserBroken} description="Курс, для тех, кто работает с людьми и помогает им восстанавливаться от нанесенных ударов судьбы, кто нуждается в инструментах и практических советах в этом труде." accentColor='#8741A2' />

               </div>
            </Col>
            <Col >
               <div>
                  <OneCourse id={2} title='“Как восстанавливать
                        разрушенное”' bgColor='#E1D3E6' label="Urban PAS" lector='Iulia Ubeivolk' positionLector="Психолог, арт-терапевт" tags='psychology' price={100} imgLector={IUbeivolk} img={ReuserBroken} description="Курс, для тех, кто работает с людьми и помогает им восстанавливаться от нанесенных ударов судьбы, кто нуждается в инструментах и практических советах в этом труде." accentColor='#8741A2' />

               </div>
            </Col>
            <Col >
               <div>
                  <OneCourse id={3} title='“Как восстанавливать 
                        разрушенное”' bgColor='#E1D3E6' label="Urban PAS" lector='Iulia Ubeivolk' positionLector="Психолог, арт-терапевт" tags='psychology' price={100} imgLector={IUbeivolk} img={ReuserBroken} description="Курс, для тех, кто работает с людьми и помогает им восстанавливаться от нанесенных ударов судьбы, кто нуждается в инструментах и практических советах в этом труде." accentColor='#8741A2' />

               </div>
            </Col>
         </Row>
      </Container>
   );
}

export default HotOne;