import React from 'react';
import "./login.css";
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Login = () => {

  return (
    <div className="divLogin">
        <input className="loginInput" type="email" name="email" placeholder="Email/Usuario"/>
        <input className="loginInput" type="password" name="password" placeholder="Contraseña"/>
        <a className="register" onClick={GoRegister}>No tengo cuenta</a>
        <button className="loginButton" type="submit">Enviar</button>
    </div>
  );
};

function GoRegister () {
    const history = useHistory();
    history.push('/register')
}

export default Login;