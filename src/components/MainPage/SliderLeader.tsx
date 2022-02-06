// @ts-nocheck

import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import IuliaUbeivolc from '../../assets/MainPage/Team/IuliaUbeivolc.png';
import AnnaUbeivolc from '../../assets/MainPage/Team/AnnaUbeivolc.png';
import OlgaVoronova from '../../assets/MainPage/Team/OlgaVoronova.png';
import InnaCiriac from '../../assets/MainPage/Team/InnaCiriac.png';
import VeraCarapunarli from '../../assets/MainPage/Team/VeraCarapunarli.png';
import SegheiSemaev from '../../assets/MainPage/Team/SegheiSemaev.png';
import VasilitsovaAnna from '../../assets/MainPage/Team/VasilitsovaAnna.png';
import PolinaSozonova from '../../assets/MainPage/Team/PolinaSozonova.png';
import VitaliiGrecov from '../../assets/MainPage/Team/VitaliiGrecov.png';
import CataragaSerhei from '../../assets/MainPage/Team/CataragaSerhei.png';

const useStyles = makeStyles((theme) => ({
  sliderSubtitle: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 14,
    color: '#000000'
  },

  sliderTitle: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000000',
    fontWeight: 900,
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal'
  },

  slideWrapper: {
    width: 244,
    height: 330,
    background: '#FFFFFF',
    boxShadow: '4px 14px 40px rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    marginTop: 60,
    marginBottom: 60,
    marginLeft: 36,
    textAlign: 'center'
  },

  slidesHolder: {
    height: 500
  },

  directionsWrapper: {
    width: 178,
    height: 62,
    border: '2px solid #9BC53E',
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 30
  },

  leaderPosition: {
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    color: '#6D6D6D',
    padding: 10
  },

  leaderName: {
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 22,
    color: '#000',
    marginTop: -10,
    marginBottom: 5
  },

  directionsTitle: {
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 16,
    color: '#000'
  },

  directionsEnum: {
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    color: '#6D6D6D'
  },
  photoHolder: {
    width: 244
  }
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        background:
          'linear-gradient(89.78deg, #A03CA2 3.68%, #3C51A2 17.9%, #2475B7 33.6%, #3BBAC8 57.63%, #5ABB7F 74.79%, #9BC53E 97.85%)',
        borderRadius: '50%',
        marginTop: -2,
        width: 19,
        height: 19
      }}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        background:
          'linear-gradient(89.78deg, #A03CA2 3.68%, #3C51A2 17.9%, #2475B7 33.6%, #3BBAC8 57.63%, #5ABB7F 74.79%, #9BC53E 97.85%)',
        borderRadius: '50%',
        marginTop: -2
      }}
    ></div>
  );
}

const OneLector = ({ description, name, derections, photo }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.slideWrapper}>
        <div className={classes.photoHolder}>
          <img className={classes.photoHolder} src={photo} alt="AllPhoto" />
        </div>
        <div className={classes.leaderPosition}>{description}</div>

        <div className={classes.leaderName}>{name}</div>
        <div className={classes.directionsWrapper}>
          <div className={classes.directionsTitle}>Направления:</div>
          <div className={classes.directionsEnum}>{derections}</div>
        </div>
      </div>
    </div>
  );
};

function SliderLeader() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <div>
              <div className={classes.sliderSubtitle}>Люди готовые поделиться опытом </div>
              <div className={classes.sliderTitle}> Команда центра:</div>
              <Slider {...settings} className={classes.slidesHolder}>
                <OneLector
                  name="Юлия Убейволк"
                  derections="Urban PAS, психология"
                  description="Психолог, арт-терапевт"
                  photo={IuliaUbeivolc}
                />
                <OneLector
                  name="Анна Убейволк"
                  derections="Urban Kids, Urban Show, образование"
                  description="Методист, ведущая шоу"
                  photo={AnnaUbeivolc}
                />
                <OneLector
                  name="Ольга Воронова"
                  derections="Urban Kids"
                  description="Директор центра, 
                  педагог для мам"
                  photo={OlgaVoronova}
                />
                <OneLector
                  name="Вера Карапунарлы"
                  derections="Urban Teens"
                  description="Педагог, лидер"
                  photo={VeraCarapunarli}
                />
                <OneLector
                  name="Сергей Семаев"
                  derections="Urban Teens"
                  description="Педагог, лидер"
                  photo={SegheiSemaev}
                />
                <OneLector
                  name="Анна Васильцова"
                  derections="Urban PAS, психология"
                  description="Психолог, арт-терапевт"
                  photo={VasilitsovaAnna}
                />
                <OneLector
                  name="Полина Сазонова"
                  derections="Urban PAS, координатор проекта"
                  description="Cоциальный педагог"
                  photo={PolinaSozonova}
                />
                <OneLector
                  name="Виталий Греков"
                  derections="Urban Event, досуг"
                  description="Разработчик развивающего досуга "
                  photo={VitaliiGrecov}
                />
                <OneLector
                  name="Сергей Катарага"
                  derections="Urban Event, психология"
                  description="Директор Urban Event"
                  photo={CataragaSerhei}
                />

                <OneLector
                  name="Инна Кирияк"
                  derections="Urban Kids"
                  description="Психолог, арт-терапевт"
                  photo={InnaCiriac}
                />
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SliderLeader;
