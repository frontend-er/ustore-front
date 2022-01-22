import { Input, makeStyles, Button, TextField } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#000'
   },
   sliderTitle: {
      textAlign: 'center',
      marginTop: 70,
      marginBottom: 30,
      fontSize: 32,
      color: '#fff',
      fontWeight: 900,
      fontFamily: 'Roboto Slab',
      fontStyle: 'normal',
   },
   notchedOutline: {
      borderWidth: '1px',
      borderColor: '#B1B1B1 !important'
   },
   cssLabel: {
      color: '#B1B1B1',
      fontSize: 18,
   },

   cssFocused: {
      borderColor: '#B1B1B1'
   },

   cssOutlinedInput: {
      color: '#B1B1B1',
      '&$cssFocused $notchedOutline': {
         borderColor: `${theme.palette.primary.main} !important`,
      }
   },
})
)


interface ICallSection {
   color: string
}

function CallSection({ color }: ICallSection) {
   const classes = useStyles()
   return (
      <div className={classes.root}>
         <Container>
            <Row>
               <Col xs={2}>
               </Col>
               <Col>
                  <div className={classes.sliderTitle}> Мы Вас наберем, если нужна помощь:  </div>
                  <div style={{ marginBottom: 20, textAlign: 'center', color: '#fff' }}>
                     Если вы хотите узнать больше про формат, тему и особенности проведения мероприятия,
                     то оставьте заявку, и наш менеджер ответит на все вопросы.
                  </div>
               </Col>
               <Col xs={2}>
               </Col>

            </Row>


            <Row style={{ paddingBottom: 70, margin: 10, alignItems: 'center' }}>
               <Col>
               </Col>
               <Col>
                  <TextField label="Имя" variant="standard" InputLabelProps={{
                     classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                     },
                  }}
                     InputProps={{
                        classes: {
                           root: classes.cssOutlinedInput,
                           focused: classes.cssFocused,
                        },
                        inputMode: "numeric"
                     }} />
               </Col>
               <Col>
                  <TextField label="Email" variant="standard" InputLabelProps={{
                     classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                     },
                  }}
                     InputProps={{
                        classes: {
                           root: classes.cssOutlinedInput,
                           focused: classes.cssFocused,
                        },
                        inputMode: "numeric"
                     }} />
               </Col>

               <Col>
                  <Button variant="contained" fullWidth color="primary"  >
                     Отправить
                  </Button>
               </Col>
               <Col>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default CallSection;