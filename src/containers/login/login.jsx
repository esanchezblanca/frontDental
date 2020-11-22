import React from 'react';
import "./login.css";
import axios from 'axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const Login = (props) => {
  const history = useHistory();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const login = {
        mail: form.mail.value,
        password: form.password.value,
      }
      await axios.post('http://localhost:3200/customers/login', login)
        .then(res => {
          localStorage.setItem('user',res.data.user.id)
          localStorage.setItem('username',res.data.user.name)
          notification.success({ message: 'Logged in' })
          history.push('/appointment')
        }).catch(err => {
          console.error(err)
          notification.error({ message: 'Cannot log in', description: 'Check your credentials' })
        })

    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Cannot log in', description: 'Check your credentials' })
      // openNotification()
    }
  }

  const GoRegister = () => {
    history.push('/register')
  }

  //encriptar antes de enviar
  return (
    <form className="divLogin" onSubmit={handleSubmit}>
      <input className="loginInput" type="email" name="mail" placeholder="Email/Usuario" />
      <input className="loginInput" type="password" name="password" placeholder="Contraseña" />
      <a className="register" onClick={GoRegister}>No tengo cuenta</a>
      <button className="loginButton" type="submit">Enviar</button>
    </form>
  );
};



export default Login;