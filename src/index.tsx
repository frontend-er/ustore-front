import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './store/user';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import "@fontsource/roboto-slab";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import Course from './store/course';
import CourseBasket from './store/courseBasket';




const user = new User();
const course = new Course();
const courseBasket = new CourseBasket();


interface IContext {
  user: User,
  course: Course,
  courseBasket: CourseBasket
}


export const Context = createContext<IContext>({ user, course, courseBasket })



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Context.Provider value={{
      user, course, courseBasket
    }}>
      <Router>
        <App />
      </Router>

    </Context.Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

