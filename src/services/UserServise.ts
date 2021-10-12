import { AxiosResponse } from "axios";
import api from "../http";
import { IUser } from "../models/response/IUser";

export default class UserService {
   static getUsers(): Promise<AxiosResponse<IUser[]>> {
      return api.get<IUser[]>('/users')
   }
}