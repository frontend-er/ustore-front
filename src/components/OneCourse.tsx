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
import Redirect, { useHistory } from 'react-router'
import { observer } from 'mobx-react';
import { Context } from '..';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
      borderRadius: 0,


   },
   media: {
      height: 140,
      color: '#fff',
   },

   hotHolder: {
      marginBottom: 30,

   },

   titleHolder: {
      display: 'flex',
      margin: 5,


   },
   subtitle: {
      marginTop: -10,
      fontSize: 12,
      fontWeight: 100
   },

   descriptioneHolder: {
      marginTop: 20
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
      color: "#fff",
      fontWeight: 900,
      fontSize: 22,
      textAlign: 'center',
      position: 'absolute',
      alignItems: 'center'


   },
   labelCourseHolder: {
      position: 'absolute',
      fontWeight: 900,
      color: "#fff",
      top: 10,
      textAlign: 'center',
      left: 140,
      borderBottom: '2px solid #fff'

   }

});


interface IOneCourse {
   id: number,
   title: string,
   lector?: string,
   tags?: string,
   price: number,
   accentColor: string,
   bgColor: string,
   img: string,
   imgLector?: string,
   description?: string,
   positionLector?: string,
   label: string,
   canBeInCart?: boolean,
   teensOfflene?: boolean
}



function OneCourse(props: IOneCourse) {

   const { user, courseBasket } = useContext(Context);
   const [open, setOpen] = React.useState(false);
   const [openError, setOpenError] = React.useState(false);



   const classes = useStyles();
   let history = useHistory();

   const redirect = () => {
      if (props.teensOfflene) {
         history.push(`/teens`)
      } else {
         history.push(`/course/${props.id}`)
      }
   }

   const handleClick = () => {
      setOpen(true);
   };

   const handleClickError = () => {
      setOpenError(true);
   };

   const handleAddToCart = async () => {
      await courseBasket.addToBasket({ courseId: props.id, basketId: user.user.id, productDescription: props.description, productTitle: props.title, poductPrice: props.price, unit: props.label });
      handleClick()
   }

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


   const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
      props,
      ref,
   ) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });

   return (
      <div className={classes.hotHolder}>
         <Card className={classes.root} style={{ backgroundColor: props.bgColor }} >
            <CardActionArea onClick={redirect} >
               <CardMedia
                  className={classes.media}
                  image={props.img}
                  title={props.title}
               />
               <div className={classes.labelCourseHolder}>
                  {props.label}
               </div>
               <Container>
                  <Row>
                     <Col className={classes.titleCourseHolder} >
                        <div  >
                           {props.title}
                        </div>
                     </Col>
                  </Row>
               </Container>



               {
                  props.imgLector ? <CardContent>
                     <div className={classes.titleHolder}>
                        {
                           props.imgLector ? <img src={props.imgLector} alt="lector" style={{ marginRight: 20, width: 62, height: 61 }} /> : ''
                        }

                        {
                           props.imgLector ? <div>
                              <div className={classes.wrapperLabelLector}>
                                 Лектор:

                              </div>
                              <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                                 {props.lector}
                              </Typography>
                              <div className={classes.subtitle}>
                                 {props.positionLector}
                              </div>

                           </div> : ''
                        }


                     </div>

                     {
                        props.description ? <Typography variant="body2" color="textSecondary" component="p" className={classes.descriptioneHolder}>
                           {props.description}
                        </Typography> : ''
                     }


                  </CardContent> : ''
               }



            </CardActionArea>
            <CardActions >
               {
                  (props.teensOfflene) ? <NavLink to={`/teens`} style={{ textDecoration: 'none', marginRight: 3 }}>
                     <Button onClick={redirect} fullWidth variant='outlined' style={{
                        color: props.accentColor, borderColor: props.accentColor, margin: 10
                     }} >
                        Подробнее
                     </Button>
                  </NavLink> : <NavLink to={`/course/${props.id}`} style={{ textDecoration: 'none', marginRight: 3 }}>
                     <Button onClick={redirect} fullWidth variant='outlined' style={{
                        color: props.accentColor, borderColor: props.accentColor, margin: 10
                     }} >
                        Подробнее
                     </Button>
                  </NavLink>
               }


               {
                  (props.canBeInCart !== false) ? <Button onClick={handleAddToCart} fullWidth variant='contained' style={{ color: '#fff', backgroundColor: props.accentColor, margin: 10 }}>
                     В корзину +
                  </Button> : ''
               }

            </CardActions>
         </Card>
         <Snackbar style={{ marginTop: 100 }} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={12000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
               Курс <b>  {props.title} </b> был успешно добавлен в <b> Корзину </b>
            </Alert>
         </Snackbar>
         <Snackbar style={{ marginTop: 100 }} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openError} autoHideDuration={12000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
               Произошла <b>ошибка</b>
            </Alert>
         </Snackbar>
      </div>
   );
}

export default observer(OneCourse);