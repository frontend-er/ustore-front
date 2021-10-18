import { AxiosResponse } from "axios";
import api from "../http";
import { IBasket } from "../models/response/IBasket";
import { IBasketCourse } from "../models/response/IBasketCourse";

export default class BasketService {
   static getBasket(id: number): Promise<AxiosResponse<IBasket[]>> {
      return api.get<IBasket[]>(`/basket?id=${id}`)
   }

   static removeItem(id: number): Promise<AxiosResponse<IBasket[]>> {
      return api.delete<IBasket[]>(`/basket?id=${id}`)
   }

   static addItem(data: IBasketCourse): Promise<AxiosResponse<IBasketCourse[]>> {
      return api.post<IBasketCourse[]>(`/basket`, data)
   }
}