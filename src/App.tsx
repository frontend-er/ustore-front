import React, { FC, useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import {
  BrowserRouter as Router,
  Switch,
  Route, useLocation
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { AnimatePresence, motion } from 'framer-motion';
import RestoreBrokenCourse from './pages/RestoreBrokenCourse';
import { Context } from '.';
import Cabinet from './pages/Cabinet';
import Watch from './pages/Watch';
import Basket from './pages/Basket';


const App: FC = () => {

  const location = useLocation();
  const { user, courseBasket } = useContext(Context);



  useEffect(() => {
    user.checkAuth();
  }, [])




  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/about">
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/course/1">
          <RestoreBrokenCourse />
        </Route>
        <Route path="/cabinet">
          <Cabinet />
        </Route>
        <Route path="/watch/1">
          <Watch />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default observer(App);