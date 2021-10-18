
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { IUser } from "../models/response/IUser";

export default class User {
   user = {} as IUser;
   isAuth = false;
   isLoading = false;

   constructor() {
      makeAutoObservable(this);
   }

   setAuth(bool: boolean) {
      this.isAuth = bool;
   }

   setUser(user: IUser) {
      this.user = user;
   }

   getUserId() {
      return this.user.id;
   }

   setLoading(bool: boolean) {
      this.isLoading = bool;
   }

   async login(email: string, password: string) {
      try {
         const response = await AuthService.login(email, password);
         console.log(response)
         localStorage.setItem('token', response.data.accessToken);
         this.setAuth(true);
         this.setUser(response.data.user);
      } catch (error) {
         let errorMessage = "Failed to do something exceptional";
         if (error instanceof Error) {
            errorMessage = error.message;
         }
         console.log(errorMessage);
      }
   }

   async registration(email: string, password: string) {
      try {
         const response = await AuthService.regestration(email, password);
         console.log(response)
         localStorage.setItem('token', response.data.accessToken);
         this.setAuth(true);
         this.setUser(response.data.user);
      } catch (error) {
         let errorMessage = "Failed to do something exceptional";
         if (error instanceof Error) {
            errorMessage = error.message;
         }
         console.log(errorMessage);
      }
   }

   async logout() {
      try {
         const response = await AuthService.logout();
         localStorage.removeItem('token');
         this.setAuth(false);
         this.setUser({} as IUser);
      } catch (error) {
         let errorMessage = "Failed to do something exceptional";
         if (error instanceof Error) {
            errorMessage = error.message;
         }
         console.log(errorMessage);
      }
   }

   async checkAuth() {
      this.setLoading(true);
      try {
         const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, { withCredentials: true })
         console.log(response);
         localStorage.setItem('token', response.data.accessToken);
         this.setAuth(true);
         this.setUser(response.data.user);
      } catch (error) {

         let errorMessage = "Failed to do something exceptional";
         if (error instanceof Error) {
            errorMessage = error.message;
         }
         console.log(errorMessage);
      } finally {
         this.setLoading(false);
      }
   }
}



