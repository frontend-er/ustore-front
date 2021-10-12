// @ts-nocheck

import React, { FC, useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import PropTypes from 'prop-types';
import { Context } from '..';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Button, Paper, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background from "../assets/Registration/registration-bg.png";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { useTheme } from 'styled-components';
import { useHistory, useLocation } from 'react-router';


const useStyles = makeStyles(theme => ({
   root: {
      width: 350,
      height: 300,
      backgroundColor: '#141311',
      position: 'absolute',
      left: ' 50%',
      top: '50%',
      marginLeft: -175,
      marginTop: -150,

   },
   fab: {
      position: 'absolute',

   },
   background: {
      backgroundImage: `url(${background})`,
   },
   holder: {
      height: '107vh',
      textAlign: 'left'
   },

   loginForm: {
      color: '#fff'
   },

   textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300,
      borderRadius: 112,
      margin: 14,
      paddingBottom: 12,


   },

   cssLabel: {
      color: '#B1B1B1',
      fontSize: 18,
   },

   cssOutlinedInput: {
      color: '#B1B1B1',
      '&$cssFocused $notchedOutline': {
         borderColor: `${theme.palette.primary.main} !important`,
      }
   },

   formHolder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

   },

   notchedOutline: {
      borderWidth: '1px',
      borderColor: '#B1B1B1 !important'
   },

   assistText: {
      color: '#B1B1B1',
      fontSize: 12,
      marginTop: -10,
      textAlign: 'left',
      marginBottom: 10,
      width: 300

   }


}));

function TabContainer(props) {
   return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
         {props.children}
      </Typography>
   );
}





const LoginForm: FC = () => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const { user } = useContext(Context);
   const classes = useStyles()

   const [value, setValue] = React.useState(0);

   function handleChange(event, newValue) {
      setValue(newValue);
   }

   let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/login" } };
   let login = () => {
      user.registration(email, password)
      user.login(email, password)
      history.replace(from);
   };

   return (
      <div className={classes.background}>
         <Container fluid="xxl">
            <Row className={classes.loginForm}>
               <Col className={classes.holder}>
                  <div className={classes.root}>
                     <AppBar position="static" color="transparent" elevation={0} >
                        <Tabs style={{ background: 'transparent', boxShadow: 'none' }}
                           value={value}
                           onChange={handleChange}
                           centered

                        >
                           <Tab label="Вход" />
                           <Tab label="Регистрация" />
                        </Tabs>
                     </AppBar>
                     {value === 0 && <TabContainer> <form className={classes.formHolder}>

                        <TextField
                           label=""
                           placeholder="Email"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              },
                              inputMode: "numeric"
                           }}
                           className={classes.textField}
                           variant="outlined"
                           onChange={e => setEmail(e.target.value)}
                           value={email}
                           type="text"
                        />

                        <TextField
                           id="standard-name"
                           label=""
                           placeholder="Password"
                           className={classes.textField}
                           onChange={e => setPassword(e.target.value)}
                           type="password"

                           value={password}
                           margin="normal"
                           variant="outlined"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              },
                              inputMode: "numeric"
                           }}

                           fullWidth
                        />

                        <Button variant="contained" fullWidth color="primary" onClick={() => user.login(email, password)} >
                           Войти
                        </Button>



                     </form></TabContainer>}
                     {value === 1 && <TabContainer ><div className={classes.formHolder}>

                        <TextField
                           label=""
                           placeholder="Email"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              },
                              inputMode: "numeric"
                           }}
                           className={classes.textField}
                           variant="outlined"
                           onChange={e => setEmail(e.target.value)}
                           value={email}
                           type="text"
                        />

                        <TextField
                           id="standard-name"
                           label=""
                           placeholder="Password"
                           className={classes.textField}
                           onChange={e => setPassword(e.target.value)}
                           type="password"

                           value={password}
                           margin="normal"
                           variant="outlined"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              },
                              inputMode: "numeric"
                           }}

                           fullWidth
                        />

                        { /*
                           <TextField
                           id="standard-name"
                           label=""
                           placeholder="Repeat password"
                           className={classes.textField}
                           onChange={e => setPassword(e.target.value)}
                           type="password"
                           value={password}
                           margin="normal"
                           variant="outlined"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              },
                              inputMode: "numeric"
                           }}

                           fullWidth
                        />

                        */
                        }

                        <div className={classes.assistText}>
                           *You need to repeat password
                        </div>


                        <FormControlLabel
                           className={classes.assistText}
                           control={<Checkbox value="checkedH" defaultChecked />}
                           label="I agree with Terms and Policy"
                        />

                        <Button variant="contained" fullWidth color="primary" onClick={login}>
                           Регистрация
                        </Button>

                     </div></TabContainer>}
                  </div>
               </Col>
            </Row>
         </Container>
      </div >
   );
};

export default observer(LoginForm);