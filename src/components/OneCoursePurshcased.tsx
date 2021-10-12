import React from 'react';
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
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

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
   courseTitle: string,
   courseLector: string,
   coursePosition: string,
   courseDescription: number,
   accentColor: string,
   bgColor: string,
   progress: number,
   raiting: number,
   photoLeader: string,
   photoLabel: string,

}

interface ILinearProgressWithLabel {

   progress: number


}





function LinearProgressWithLabel({ progress }: ILinearProgressWithLabel) {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" />
         </Box>
         <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" >{`${Math.round(
               progress,
            )}%`}</Typography>
         </Box>
      </Box>
   );
}




function OneCoursePurshcased(props: IOneCourse) {

   const [value, setValue] = React.useState<number | null>(2);
   const classes = useStyles();
   let history = useHistory();

   const redirect = () => {
      history.push(`/watch/${props.id}`)
   }


   return (
      <div className={classes.hotHolder}>
         <Card className={classes.root} style={{ backgroundColor: props.bgColor }} >
            <CardActionArea onClick={redirect} >
               <CardMedia
                  className={classes.media}
                  image={props.photoLabel}
                  title={props.courseTitle}
               />

               <div className={classes.titleCourseHolder}>
                  {props.courseTitle}

               </div>
               <CardContent>
                  <div className={classes.titleHolder}>
                     <img src={props.photoLeader} alt="lector" style={{ marginRight: 20 }} />

                     <div>
                        <div className={classes.wrapperLabelLector}>
                           Лектор:

                        </div>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.lectorHolder}>
                           {props.courseLector}
                        </Typography>
                        <div className={classes.subtitle}>
                           {props.coursePosition}
                        </div>

                     </div>

                  </div>

                  <Typography variant="body2" color="textSecondary" component="p" className={classes.descriptioneHolder}>
                     {props.courseDescription}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions >
               <Box sx={{ width: '100%' }}>
                  <LinearProgressWithLabel progress={props.progress} />
               </Box>
               Reting
               <Rating name="disabled" value={props.raiting} disabled />
            </CardActions>
         </Card>
      </div>
   );
}

export default OneCoursePurshcased;