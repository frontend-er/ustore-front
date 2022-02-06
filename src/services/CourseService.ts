import { AxiosResponse } from "axios";
import api from "../http";
import { IBasket } from "../models/response/IBasket";
import { IBasketCourse } from "../models/response/IBasketCourse";
import { ISection } from "../models/response/ISection";

export default class CourseService {
   static getAllCouses(): Promise<AxiosResponse<IBasket[]>> {
      return api.get<IBasket[]>(`/course`)
   }

   static removeItem(id: number): Promise<AxiosResponse<IBasket[]>> {
      return api.delete<IBasket[]>(`/section?id=${id}`)
   }

   static addItem(data: ISection): Promise<AxiosResponse<IBasketCourse[]>> {
      return api.post<IBasketCourse[]>(`/course`, data)
   }
}