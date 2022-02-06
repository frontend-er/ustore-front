import { AxiosResponse } from "axios";
import api from "../http";
import { IBasket } from "../models/response/IBasket";
import { IBasketCourse } from "../models/response/IBasketCourse";
import { ISection } from "../models/response/ISection";

export default class LectorService {
   static getAllLectors(): Promise<AxiosResponse<IBasket[]>> {
      return api.get<IBasket[]>(`/lector`)
   }

   static removeItem(id: number): Promise<AxiosResponse<IBasket[]>> {
      return api.delete<IBasket[]>(`/section?id=${id}`)
   }

   static addItem(data: ISection): Promise<AxiosResponse<IBasketCourse[]>> {
      return api.post<IBasketCourse[]>(`/lector`, data)
   }
}