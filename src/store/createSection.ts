//@ts-nocheck
import { makeAutoObservable } from "mobx";
import BasketService from "../services/BasketService";
import { IBasketCourse } from "../models/response/IBasketCourse";
import { ISection } from "../models/response/ISection";
import SectionService from "../services/SectionService";
import { ICourse } from "../pages/MethodsOfArtTherapy";

export default class CreateSection {
   section = [] as ICourse;

   constructor() {
      makeAutoObservable(this);
   }

   setSection(section) {
      this.section = section;
   }


   getSectionActual() {
      return this.section
   }


 

   async getAllSections() {
      try {
         const responce =  await SectionService.getAllSections();
         
         this.setSection(responce.data);
      } catch (error) {
         console.log(error)
      }
   }


   async removeSection(data: IBasketCourse) {
      try {
         await BasketService.removeItem(id);
      } catch (error) {
         console.log(error)
      }
   }


   async addSection(data: ICourse) {
      try {
         const responce = await SectionService.addItem(data);
         this.setSection(responce.data)
      } catch (error) {
         console.log(error)
      }
   }

}



