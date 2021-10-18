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

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
      borderRadius: 0,
      marginLeft: 30,


   },
   media: {
      height: 140,
      color: '#fff'
   },

   hotHolder: {
      marginTop: 80,
      marginBottom: 30,

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
      marginTop: -100,
      marginBottom: 100,
      color: "#fff",
      fontWeight: 900,
      fontSize: 22,
      textAlign: 'center',
      position: 'absolute'


   },
   labelCourseHolder: {
      position: 'absolute',
      fontWeight: 900,
      color: "#fff",
      top: 10,
      textAlign: 'center',
      left: 125,
      borderBottom: '2px solid #fff'

   }

});


interface IOneCourse {
   id: number,
   title: string,
   lector: string,
   tags: string,
   price: number,
   accentColor: string,
   bgColor: string,
   img: string,
   imgLector: string,
   description: string,
   positionLector: string,
   label: string,
}



function OneCourse(props: IOneCourse) {

   const { user, courseBasket } = useContext(Context);

   const classes = useStyles();
   let history = useHistory();

   const redirect = () => {
      history.push(`/course/${props.id}`)
   }

   const handleAddToCart = async () => {
      try {
         await courseBasket.addToBasket({ courseId: props.id, basketId: user.user.id, productDescription: props.description, productTitle: props.title, poductPrice: props.price, unit: props.label })
      } catch (error) {
         console.log(error)
      }
   }


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
               <div className={classes.titleCourseHolder}>
                  {props.title}

               </div>
               <CardContent>
                  <div className={classes.titleHolder}>
                     <img src={props.imgLector} alt="lector" style={{ marginRight: 20 }} />

                     <div>
                        <div className={classes.wrapperLabelLector}>
                           Лектор:

                        </div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                           {props.lector}
                        </Typography>
                        <div className={classes.subtitle}>
                           {props.positionLector}
                        </div>

                     </div>

                  </div>

                  <Typography variant="body2" color="textSecondary" component="p" className={classes.descriptioneHolder}>
                     {props.description}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions >
               <NavLink to={`/course/${props.id}`} style={{ textDecoration: 'none', marginRight: 3 }}>
                  <Button fullWidth variant='outlined' style={{
                     color: props.accentColor, borderColor: props.accentColor, margin: 10
                  }} >
                     Подробнее
                  </Button>
               </NavLink>


               <Button onClick={handleAddToCart} fullWidth variant='contained' style={{ color: '#fff', backgroundColor: props.accentColor, margin: 10 }}>
                  В корзину +
               </Button>
            </CardActions>
         </Card>
      </div>
   );
}

export default observer(OneCourse);