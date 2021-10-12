import { AxiosResponse } from "axios";
import api from "../http";
import { IBasket } from "../models/response/IBasket";

export default class BasketService {
   static getBasket(id: number): Promise<AxiosResponse<IBasket[]>> {
      return api.get<IBasket[]>(`/basket?id=${id}`)
   }

   static removeItem(courseId: number, basketId: number): Promise<AxiosResponse<IBasket[]>> {
      return api.delete<IBasket[]>(`/basket?courseId=${courseId}&basketId=${basketId}`)
   }
}