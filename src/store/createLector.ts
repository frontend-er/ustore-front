//@ts-nocheck
import { makeAutoObservable } from "mobx";
import BasketService from "../services/BasketService";
import { IBasketCourse } from "../models/response/IBasketCourse";
import { ISection } from "../models/response/ISection";
import SectionService from "../services/SectionService";
import LectorService from "../services/LectorService";

export default class CreateLector {
   lector = [] as ILector;

   constructor() {
      makeAutoObservable(this);
   }

   setLector(lector) {
      this.lector = lector;
   }


   getLectorActual() {
      return this.lector
   }


 

   async getAllLectors() {
      try {
         const responce =  await LectorService.getAllLectors();
         
         this.setLector(responce.data);
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


   async addLector(data: IBasketCourse) {
      try {
         const responce = await LectorService.addItem(data);
         this.setLector(responce.data)
      } catch (error) {
         console.log(error)
      }
   }

}



