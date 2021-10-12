//@ts-nocheck
import React, { useContext } from 'react';
import { Context } from '..';
import { AppBar, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import Page404 from './ErrorPaged/Page404';
import HeaderCabinet from '../components/HeaderCabinet';
import { Col, Container, Row } from 'react-bootstrap';
import OneCoursePurshcased from '../components/OneCoursePurshcased';


const purcshcasedCourses = [{
   "id": "1",
   "courseTitle": "Арт-терапия как инструмент в работе с людьми:",
   "courseSubtitle": "Арт-терапия как инструмент в работе с людьми:",
   "courseLector": "Srghei Mihailov",
   "coursePosition": "Социальный педгог",
   "courseDescription": "Мы соединили западный подход к развитию креативности ребенка и восточно-европейский подход к развитию мышления. Покажем, как выглядит хороший дидактический материал, и поделимся авторскими разработками.",
   "progress": 10,
   "raiting": 10,
   "photoLeader": "",
   "photoLabel": "",
   "accentColor": "#2475B7",
   "bgColor": "#D3E0EA",
},

{
   "id": "2",
   "courseTitle": "Арт-терапия как инструмент в работе с людьми:",
   "courseSubtitle": "Арт-терапия как инструмент в работе с людьми:",
   "courseLector": "Srghei Mihailov",
   "coursePosition": "Социальный педгог",
   "courseDescription": "Мы соединили западный подход к развитию креативности ребенка и восточно-европейский подход к развитию мышления. Покажем, как выглядит хороший дидактический материал, и поделимся авторскими разработками.",
   "progress": 10,
   "raiting": 10,
   "photoLeader": "",
   "photoLabel": "",
   "accentColor": "#2475B7",
   "bgColor": "#D3E0EA",
},

]



const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#fff',
      overflow: 'hidden'

   },
   titleBold: {
      marginTop: 30,
      marginBottom: 30,
      fontWeight: 900,
      fontSize: 42

   }

}));


interface ICabinet {

}


function TabContainer(props) {
   return (
      <Typography component="div" >
         {props.children}
      </Typography>
   );
}


function Cabinet() {
   const classes = useStyles()
   const { course } = useContext(Context);
   const { user } = useContext(Context);
   const [value, setValue] = React.useState(0);


   function handleChange(event, newValue) {
      setValue(newValue);
   }

   if (!user.isAuth) {
      return <Page404 />
   }

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className={classes.root}>
            <HeaderCabinet />
            <Container fluid="xxl">
               <Row >
                  <Col>
                     <div className={classes.titleBold}>
                        Моё обучение
                     </div>
                  </Col>
               </Row>
            </Container>

            <Container>
               <Row >
                  <Col >
                     <AppBar position="static" color="transparent" elevation={0} >
                        <Tabs style={{ background: 'transparent', boxShadow: 'none', fontWeight: 900 }}
                           value={value}
                           onChange={handleChange}
                        >
                           <Tab label="Сейчас прохожу" />
                           <Tab label="Завершенные" />
                        </Tabs>
                     </AppBar>
                  </Col>
               </Row>
            </Container>

            {value === 0 && <TabContainer >
               <div style={{ backgroundColor: '#F3F3F3' }}>
                  <Container>
                     <Row>
                        {
                           purcshcasedCourses.map((t) => <Col xl={4}>
                              <div>
                                 <OneCoursePurshcased {...t} />
                              </div>
                           </Col>)
                        }
                     </Row>
                  </Container>
               </div>


            </TabContainer>}
            {
               value === 1 && <TabContainer >

                  <div style={{ backgroundColor: '#F3F3F3' }}>
                     <Container>
                        <Row>
                           <Col>
                              <div>
                                 <OneCoursePurshcased bgColor='#D3E0EA' accentColor='#3C51A2' />
                              </div>
                           </Col>
                        </Row>
                     </Container>
                  </div>
               </TabContainer>
            }
         </div >
      </motion.div >
   );
}

export default observer(Cabinet);



