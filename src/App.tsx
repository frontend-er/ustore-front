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
import RestoreBrokenCourse from './pages/MethodsOfArtTherapy';
import { Context } from '.';
import Cabinet from './pages/Cabinet';
import Watch from './pages/Watch';
import Basket from './pages/Basket';
import AboutProject from './pages/AboutProject';
import Kids from './pages/Kids';
import PrepareToSuccess from './pages/PrepareToSuccess';
import KidsLections from './pages/KidsLections';
import Teens from './pages/Teens';
import Art from './pages/Art';
import Show from './pages/Show';
import Event from './pages/Event';
import Youth from './pages/Youth';
import MethodsOfArtTherapy from './pages/MethodsOfArtTherapy';
import AdminPanel from "./pages/AdminPanel";

const App: FC = () => {
  const location = useLocation();
  const { user, courseBasket } = useContext(Context);

  useEffect(() => {
    user.checkAuth();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/about">
          <AboutProject />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/teens">
          <Teens />
        </Route>
        <Route path="/therapy">
          <Art />
        </Route>
        <Route path="/show">
          <Show />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/youth">
          <Youth />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/course/1">
          <MethodsOfArtTherapy
            id={1}
            title="“Методы Арт-терапии”"
            label="Urban PAS"
            price={100}
            description="Возможность самому соприкоснуться с арт-инструментом, попробовав на себе его эффективность и безопасность."
          />
        </Route>
        <Route path="/course/8">
          <PrepareToSuccess
            id={8}
            title="“Подготовка к успеху”"
            label="Urban Youth"
            price={100}
            description="Курс, призванный помочь сформировать здоровое поколение молодых лидеров, которые берут на себя ответственность за собственное будущее и будущее своей страны. "
          />
        </Route>
        <Route path="/course/12">
          <KidsLections />
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
        <Route path="/admin">
          <AdminPanel />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default observer(App);