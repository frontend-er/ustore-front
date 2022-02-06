// @ts-nocheck

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Button, Paper, FormControlLabel, Checkbox, makeStyles, Hidden } from '@material-ui/core';
import burger from '../assets/MainPage/mainPhoto.png';
import { Baloon } from "./MotionComponents/Baloon";

const useStyles = makeStyles((theme) => ({
  titlePage: {
    marginTop: 120,
    marginBottom: 50,
    fontSize: 40,
    lineHeight: "50px",
    alignItems: "center",
    letterSpacing: "-0.017em",
    color: "#535353",
  },

  buttonMain: {
    width: 210,
    margin: 10,
  },

  baloon: {
    marginBottom: 100,
  },
}));

function MainView() {
  const classes = useStyles();
  return (
    <Container fluid="xl" style={{ marginTop: 100 }}>
      <Row>
        <Col>
          <div className={classes.titlePage}>
            Здесь <b>каждый</b> найдет для <b>себя</b> что-то полезное
          </div>

          <ul>
            <li>Смотрите нас онлайн – на сайте</li>
            <li>Или участвуйте в наших мероприятиях</li>
          </ul>
        </Col>
        <Col xl={1}></Col>

        <Hidden smDown>
          <Col className={classes.baloon}>
            <Baloon className={classes.baloon} />
          </Col>
        </Hidden>
      </Row>
    </Container>
  );
}

export default MainView;