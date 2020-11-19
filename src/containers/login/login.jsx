import React from 'react';
import "./login.css";
import axios from 'axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';



const Login = () => {
  const history = useHistory();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const login = {
        mail: form.mail.value,
        password: form.password.value,
      }
      console.log(login.mail);
      await axios.post('http://localhost:3200/customers/login', login)//poner luego ruta localhost
      notification.success({ message: 'Logged in' })
      history.push('/appointment')
    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Cannot log in', description: 'Check your credentials' })
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