
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
      width: 330,
      marginTop: '20%',
      marginLeft: '35%'

   },

   background: {
      background: "#000",
      marginTop: -73,
      fontFamily: 'Roboto Slab',
      marginLeft: -2,
   },

   holderLectors: {
      paddingTop: 180
   },

   lectorsText: {
      fontWeight: 'bold',
      fontSize: 24,
      color: ' #FFFFFF'
   },

   infoBox: {
   },

   nameLector: {
      fontWeight: 900,
      fontSize: 48,
      color: ' #FFFFFF'
   },


   workLector: {
      fontWeight: 300,
      fontSize: 24,
      color: ' #FFFFFF',
      marginBottom: 40
   },

   descriptionLector: {
      fontWeight: 100,
      fontSize: 24,
      color: ' #FFFFFF',
      paddingRight: 10
   },
   quoteHolder: {
      display: 'flex',
      justifyContent: 'row'
   },

   quote: {
      color: '#ffffff',
      textAlign: 'center'
   },

   textLigth: {
      fontWeight: 100,
      color: '#ffffff',
      fontSize: 18,
      paddingLeft: 20,
      paddingTop: 20,

   },
   textBold: {
      fontWeight: 900,
      color: '#ffffff',
      fontSize: 37,
      paddingLeft: 20,
      paddingTop: 10,
   },

   rowBottomHolder: {
      marginTop: 60,
      marginBottom: 50
   }


}));



interface ILeaderCourseDescriptionProps {
   name: string;
   workPosirion: string;
   description: string;
   quote: string;
   inProfession: string;
   inWork: string;
   withUs: string;
   photoUrl: string;
   color: string;

}



function LeaderCourseDescription({ name, workPosirion, description, quote, inProfession, inWork, withUs, photoUrl, color }: ILeaderCourseDescriptionProps) {


   const classes = useStyles(color)


   return (
      <div className={classes.background}>
         <Container className={classes.holderLectors}>
            <Row>
               <Col xl={8}>
                  <div>
                     <div className={classes.lectorsText}>
                        Лектор курса:
                     </div>
                     <div className={classes.nameLector}>
                        {name}
                     </div>
                     <div className={classes.workLector}>
                        {workPosirion}
                     </div>
                     <div className={classes.descriptionLector}>
                        {description}
                     </div>
                  </div>
               </Col>

               <Col xl={4}>
                  <div >
                     <div style={{ textAlign: 'center', marginBottom: 30, marginTop: 30 }}>
                        <img src={photoUrl} alt={name} style={{ width: 327.19, height: 327.19 }} />
                     </div>

                     <div className={classes.quoteHolder}>
                        <div style={{ color: `${color}` }}>
                           <FontAwesomeIcon icon={faQuoteLeft} />
                        </div>
                        <div className={classes.quote}>
                           {quote}
                        </div>
                        <div style={{ color: `${color}` }}>
                           <FontAwesomeIcon icon={faQuoteRight} />
                        </div>
                     </div>


                  </div>
               </Col>
            </Row>

            <Row >
               <Col md={4} className={classes.rowBottomHolder}>
                  <div className={classes.infoBox} style={{ borderLeft: `5px solid ${color}` }}>

                     <div >
                        <div className={classes.textLigth}>
                           В профессии:
                        </div>
                        <div className={classes.textBold}>
                           {inProfession}
                        </div>

                     </div>
                  </div>
               </Col>
               <Col md={4} className={classes.rowBottomHolder}>
                  <div className={classes.infoBox} style={{ borderLeft: `5px solid ${color}` }}>

                     <div>
                        <div className={classes.textLigth}>
                           Лектор:
                        </div>
                        <div className={classes.textBold}>
                           {inWork}
                        </div>

                     </div>
                  </div>
               </Col>
               <Col md={4} className={classes.rowBottomHolder}>
                  <div className={classes.infoBox} style={{ borderLeft: `5px solid ${color}` }}>

                     <div>
                        <div className={classes.textLigth}>
                           С нами:
                        </div>
                        <div className={classes.textBold}>
                           {withUs}
                        </div>

                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default LeaderCourseDescription