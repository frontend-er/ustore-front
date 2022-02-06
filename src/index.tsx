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
import CreateSection from "./store/createSection";
import CreateLector from "./store/createLector";
import CreateCourse from "./store/createCurse";

const user = new User();
const course = new Course();
const courseBasket = new CourseBasket();
const createSection = new CreateSection();
const createLector = new CreateLector();
const createCourse = new CreateCourse();

interface IContext {
  user: User;
  course: Course;
  courseBasket: CourseBasket;
  createSection: CreateSection;
  createLector: CreateLector;
  createCourse: CreateCourse;
}

export const Context = createContext<IContext>({
  user,
  course,
  courseBasket,
  createSection,
  createLector,
  createCourse,
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Context.Provider
      value={{
        user,
        course,
        courseBasket,
        createSection,
        createLector,
        createCourse,
      }}
    >
      <Router>
        <App />
      </Router>
    </Context.Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

