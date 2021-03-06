//@ts-nocheck
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { IUser } from "../models/response/IUser";
import { IBasket } from "../models/response/IBasket";
import BasketService from "../services/BasketService";
import { IBasketCourse } from "../models/response/IBasketCourse";

export default class CourseBasket {
   basket = {} as IBasket;

   constructor() {
      makeAutoObservable(this);
   }

   setBasket(basket: IBasket) {
      this.basket = basket
   }


   async getBasket(id: number) {
      try {
         const responce = await BasketService.getBasket(id);
         this.setBasket(responce.data)
      } catch (error) {
         console.log(error)
      }
   }

   getBasketActual() {
      return this.basket
   }



   async emptyBasket(id: number) {
      try {
         await BasketService.removeItem(id);
      } catch (error) {
         console.log(error)
      }
   }


   async addToBasket(data: IBasketCourse) {
      try {
         const responce = await BasketService.addItem(data);
         this.setBasket(responce.data)
      } catch (error) {
         console.log(error)
      }
   }

}



