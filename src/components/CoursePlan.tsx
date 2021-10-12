import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Col, Row } from 'react-bootstrap';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({


   prorgamBlock: {
      background: '#F5F5F5',
      borderRadius: 30,
      color: '#000',
      marginRight: 70,
      marginTop: 120,
      display: 'flex',
      flexDirection: 'row'
   },

   blockName: {
      fontSize: 32,
      fontWeight: 900,
      position: 'absolute',
      color: '#fff',
      marginLeft: -210,
      marginTop: 80
   },

   blockSmall: {
      fontSize: 12,

   },
   blockTitle: {
      fontSize: 24,
      marginLeft: 20,
      marginBottom: 20,
      fontWeight: 900,
      marginTop: 20,


   },
   blockList: {
      fontSize: 18,
      marginLeft: 20,
      fontWeight: 400
   }


}));

interface IList {
   name: string;
}


interface ICoursePlan {
   blockNumber: string;
   blockTitile: string;
   imagePreview: string;
   blockList: IList[];
}




function CoursePlan({ blockNumber, blockTitile, blockList, imagePreview }: ICoursePlan) {
   const classes = useStyles()
   return (
      <Row >
         <Col >
            <Card style={{ background: '#fff', margin: 10 }}>
               <Row>
                  <Col md={4}>
                     <CardMedia
                        component="img"
                        style={{ height: '100%', width: '100%' }}
                        image={imagePreview}
                        alt="Live from space album cover"
                     />
                  </Col>
                  <Col md={8}>
                     <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                           <div className={classes.blockName}>
                              {blockNumber}<span className={classes.blockSmall}></span> Блок
                           </div>
                           <div>
                              <div className={classes.blockTitle}>
                                 {blockTitile}
                              </div>
                              <ul>
                                 {
                                    blockList.map(t =>
                                       <li className={classes.blockList}>
                                          {t.name}
                                       </li>
                                    )
                                 }
                              </ul>
                           </div>
                        </CardContent>
                     </Box>
                  </Col>
               </Row>

            </Card>
         </Col>

      </Row >

   );
}

export default CoursePlan;