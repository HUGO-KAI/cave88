//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from '../../components/Login/Login.jsx'
const url = process.env.REACT_APP_API_URL;

//La page SignIn
const SignIn = () => {
    //Envoyer les données de l'utilisateur au backend
    const handleSubmit = (userInfo) => {
        axios.post(`${url}/api/auth/login`,userInfo)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("token", res.data.token);
            window.location.href = "/Admin";
          }else { // fail to login
            window.alert('登录失败、');
            return;
        }})
        .catch((error) => {
          window.alert('User non trouvé');
        })
      };
    return (
        <>
        <Login userSubmit={handleSubmit}/>
        </>
    )
}

export default SignIn