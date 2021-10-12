import React, { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Col, Container, Row } from 'react-bootstrap';
import { createTheme, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background from "../assets/enternal/leaderDescriptionBG.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components';





const useStyles = makeStyles((theme) => ({
   root: {
      fontFamily: 'Roboto Slab'
   },

   titleSection: {
      fontWeight: 900,
      fontSize: 48,
      textAlign: 'center',
      color: '#747474',
      marginTop: 40,
      marginBottom: 40
   },

   textLigth: {
      fontWeight: 100,
      color: '#000',
      fontSize: 18,
      paddingLeft: 20,
      paddingTop: 20,

   },
   textBold: {
      fontWeight: 400,
      color: '#000',
      fontSize: 33,
      paddingLeft: 20,
      paddingTop: 5,
   },

   rowBottomHolder: {
      marginTop: 60,
      marginBottom: 50
   },

   boldText: {
      fontSize: 24,
      padding: 10
   },

   ligthText: {
      fontSize: 24,
      padding: 10


   },
   textHigthLigth: {
      fontSize: 60,
      fontWeight: 300
   },

   commentatorPosition: {
      fontWeight: 900,
      color: '#000',
      fontSize: 18,
      textDecoration: 'underline',
      marginBottom: 30
   },

   commentatorName: {
      fontWeight: 900,
      color: '#000',
      fontSize: 34,
   },
   commentatorComment: {
      fontWeight: 200,
      color: '#fff',
      fontSize: 23,
      padding: 20,
      borderRadius: 10

   },


}));

interface IComments {
   comentatorName: string;
   comentatorImage: string;
   comentatorSubtitle: string;
   comment: string;
}



interface IFeedBackSectionProps {
   color: string;
   comments: IComments[]

}

function FeedBackSection({ color, comments }: IFeedBackSectionProps) {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <Container fluid="xxl" >
            <Row >
               <Col >
                  <div className={classes.titleSection}>
                     О проекте:
                  </div>
               </Col>
            </Row>
            <Row>
               <Col md={6} >
                  <div className={classes.boldText}>
                     <b>
                        «Urban center» — это один из крупнейших образовательных проектов Молдовы. Наша главная цель — сделать образование, психологию и науку понятными и доступными каждому
                     </b>
                  </div>
                  <div className={classes.ligthText}>
                     <p>
                        Мы тщательно отбираем лекторов и работаем над материалом, чтобы вы легко и нескучно научились разбираться даже в самых сложных темах.
                     </p>
                  </div>

               </Col>
               <Col xs={6} md={3} >
                  <div style={{ borderLeft: `5px solid ${color}`, margin: 12 }}>

                     <div>
                        <div className={classes.textBold}>
                           <span className={classes.textHigthLigth}>10</span>  лет
                        </div>
                        <div className={classes.textLigth}>
                           Мы работаем для вас с 2011 года
                        </div>


                     </div>
                  </div>
                  <div style={{ borderLeft: `5px solid ${color}`, margin: 12 }}>

                     <div>
                        <div className={classes.textBold}>
                           <span className={classes.textHigthLigth}>10</span> лет
                        </div>
                        <div className={classes.textLigth}>
                           Мы работаем для вас с 2011 года
                        </div>


                     </div>
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div style={{ borderLeft: `5px solid ${color}`, margin: 12 }}>

                     <div>
                        <div className={classes.textBold}>
                           <span className={classes.textHigthLigth}>10</span> лет
                        </div>
                        <div className={classes.textLigth}>
                           Мы работаем для вас с 2011 года
                        </div>


                     </div>
                  </div>
                  <div style={{ borderLeft: `5px solid ${color}`, margin: 12 }}>

                     <div>
                        <div className={classes.textBold}>
                           <span className={classes.textHigthLigth}>10</span> лет
                        </div>
                        <div className={classes.textLigth}>
                           Мы работаем для вас с 2011 года
                        </div>


                     </div>
                  </div>
               </Col>
            </Row>
            <Row >
               <Col >
                  <div className={classes.titleSection}>
                     Отзывы:
                  </div>
                  <div>
                     <Row>
                        {
                           comments.map(t =>
                              <Col md={6}>
                                 <Row>
                                    <Col xl={2}>
                                       <div>
                                          <div>
                                             <img src={t.comentatorImage} alt="photo" style={{ marginTop: 20 }} />
                                          </div>
                                       </div>
                                    </Col>
                                    <Col xl={10}>
                                       <div>
                                          <div className={classes.commentatorName}>
                                             {t.comentatorName}
                                          </div>
                                          <div className={classes.commentatorPosition}>
                                             {t.comentatorSubtitle}
                                          </div>
                                          <div className={classes.commentatorComment} style={{ background: color }}>
                                             {t.comment}
                                          </div>
                                       </div>
                                    </Col>
                                 </Row>
                              </Col>
                           )
                        }
                     </Row>

                  </div>


               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default FeedBackSection;