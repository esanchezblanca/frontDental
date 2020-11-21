import React from 'react';
import "./appointments.css";
import { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Appointment = () => {
   const user = localStorage.getItem('user')
   console.log(user)
    axios.get('http://localhost:3001/customer/findId/')
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{})
        

    return (
        <h1>Hola $`fulanito`</h1>

    );
}

export default Appointment;