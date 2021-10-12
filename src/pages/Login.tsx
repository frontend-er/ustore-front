
// @ts-nocheck


import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { Context } from '..';
import { observer } from "mobx-react-lite";
import { IUser } from '../models/response/IUser';
import UserService from '../services/UserServise';
import logo from '../assets/loading/5mhees.gif'
import FooterLogin from '../components/FooterLogin';
import { Redirect } from 'react-router';
import EmailConfirm from '../components/EmailConfirm';
import { motion } from 'framer-motion';

function Login() {


   const { user } = useContext(Context);
   const [users, setUsers] = useState<IUser[]>([]);

   useEffect(() => {
      if (localStorage.getItem('token')) {
         user.checkAuth()
      }
   }, [user])

   async function getUsers() {
      try {
         const response = await UserService.getUsers();
         setUsers(response.data);
      } catch (e) {
         console.log(e);
      }
   }

   if (user.isLoading) {
      return <div><img style={{ width: 62, height: 89.07 }} src={logo} alt="loading..." /></div>
   }

   if (!user.isAuth) {
      return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div>
               <LoginForm />
               <FooterLogin />
            </div>
         </motion.div>
      );
   }


   if (!user.user.isActivated) {
      return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div>
               <EmailConfirm />
               <FooterLogin />
            </div>
         </motion.div>

      );
   }


   return (
      (<Redirect to="/" />)
   );
}

export default observer(Login);