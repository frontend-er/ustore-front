import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Redirect, { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import { Context } from '..';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 0,
    height: 470
  },
  media: {
    height: 140,
    color: '#fff'
  },

  hotHolder: {
    marginBottom: 30
  },

  titleHolder: {
    display: 'flex',
    margin: 5
  },
  subtitle: {
    marginTop: -10,
    fontSize: 12,
    fontWeight: 100
  },

  descriptioneHolder: {
    marginTop: 5,
    fontSize: 13
  },

  lectorHolder: {
    fontWeight: 900
  },

  wrapperLabelLector: {
    color: '#8A8A8A',
    fontSize: 11
  },
  titleCourseHolder: {
    top: '50px',
    color: '#fff',
    fontWeight: 900,
    fontSize: 18,
    textAlign: 'center',
    position: 'absolute',
    alignItems: 'center',
    marginTop: -10
  },
  labelCourseHolder: {
    position: 'absolute',
    fontWeight: 900,
    color: '#fff',
    top: 10,
    textAlign: 'center',
    left: 140,
    borderBottom: '2px solid #fff'
  },
  duration: {
    fontWeight: 200,
    fontSize: 23
  }
});

interface IOneCourseMini {
  id: number;
  title: string;
  lector?: string;
  tags?: string;
  price: number;
  accentColor: string;
  bgColor: string;
  img: string;
  imgLector?: string;
  description?: string;
  positionLector?: string;
  label: string;
  canBeInCart?: boolean;
  teensOfflene?: boolean;
  duration: string;
  tagsMini: string[];
  button: string;
}

const OneCourseMini = (props: IOneCourseMini) => {
  const { user, courseBasket } = useContext(Context);
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    if (props.teensOfflene) {
      history.push(`/teens`);
    } else {
      history.push(`/course/${props.id}`);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickError = () => {
    setOpenError(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCloseError = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className={classes.hotHolder}>
      <Card className={classes.root} style={{ backgroundColor: props.bgColor }}>
        <CardActionArea onClick={redirect}>
          <CardMedia className={classes.media} image={props.img} title={props.title} />
          <Container>
            <Row>
              <Col className={classes.titleCourseHolder}>
                <div>{props.title}</div>
              </Col>
            </Row>
          </Container>

          {props.imgLector ? (
            <CardContent>
              <div>Длительность:</div>
              <div className={classes.duration}>{props.duration}</div>
              <TagsWrapper>
                {props.tagsMini.map((i) => {
                  return <Tags color={props.accentColor}>{i}</Tags>;
                })}
              </TagsWrapper>
              <Tags color={props.accentColor}></Tags>
              {props.description ? (
                <div>
                  <div>Описание:</div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.descriptioneHolder}
                  >
                    <div style={{ height: 100 }}>{props.description}</div>
                  </Typography>
                </div>
              ) : (
                ''
              )}
            </CardContent>
          ) : (
            ''
          )}
        </CardActionArea>
        <CardActions>
          {props.teensOfflene ? (
            <NavLink to={`/teens`} style={{ textDecoration: 'none', marginRight: 3 }}>
              <Button
                onClick={redirect}
                fullWidth
                variant="outlined"
                style={{
                  color: props.accentColor,
                  borderColor: props.accentColor,
                  margin: 10
                }}
              >
                Подробнее
              </Button>
            </NavLink>
          ) : (
            <NavLink to={`/course/${props.id}`} style={{ textDecoration: 'none', marginRight: 3 }}>
              <Button
                onClick={redirect}
                fullWidth
                variant="outlined"
                style={{
                  color: props.accentColor,
                  borderColor: props.accentColor,
                  margin: 10
                }}
              >
                {props.button}
              </Button>
            </NavLink>
          )}
        </CardActions>
      </Card>
      <Snackbar
        style={{ marginTop: 100 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={12000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Курс <b> {props.title} </b> был успешно добавлен в <b> Корзину </b>
        </Alert>
      </Snackbar>
      <Snackbar
        style={{ marginTop: 100 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openError}
        autoHideDuration={12000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Произошла <b>ошибка</b>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default observer(OneCourseMini);

export const Tags = styled.div<{
  color: string;
}>(
  ({ color }) => css`
    border-radius: 20px;
    color: #ffffff;
    font-size: 12px;
    background-color: ${color};
    padding: 0px 6px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  `
);

export const TagsWrapper = styled.div`
  display: flex;
`;
