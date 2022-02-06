//@ts-nocheck
import { makeAutoObservable } from "mobx";
import BasketService from "../services/BasketService";
import { ICourse } from "../pages/MethodsOfArtTherapy";
import CourseService from "../services/CourseService";

export default class CreateCourse {
   course = [] as ICourse;

   constructor() {
      makeAutoObservable(this);
   }

   setCourse(course) {
      this.course = course;
   }

   getCourseActual() {
      return this.course
   }

   async getAllCourses() {
      try {
         const responce =  await CourseService.getAllCouses();
         this.setCourse(responce.data);
      } catch (error) {
         console.log(error)
      }
   }

   async removeSection(data: ICourse) {
      try {
         await BasketService.removeItem(id);
      } catch (error) {
         console.log(error)
      }
   }


   async addCourse(data: ICourse) {
      try {
         const responce = await CourseService.addItem(data);
         this.setLector(responce.data)
      } catch (error) {
         console.log(error)
      }
   }

}



