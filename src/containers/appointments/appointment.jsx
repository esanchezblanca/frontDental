import React from 'react';
import "./appointments.css";
import { Card } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import addAppntm from '../../img/addAppntm.png';
import seeAppntm from '../../img/seeAppntm.png';

const Appointment = () => {
    const history = useHistory();

    const AddAppointment = () => {
    history.push('/addappointment')
     }
    
    const SeeAppointment = () => {
        history.push('/seeappointment')
    }


    
    const username = localStorage.getItem('username')

   



    return (
        
        <div>
            <div>
                <h1>{`Hola ${username}`}</h1>
            </div>
            <div className="cardContainer">
            <Card className="addCard" title="Nueva cita" style={{ width: 300 }}>
                <img src={addAppntm} className="addAppntm" onClick={AddAppointment}></img>
            </Card>
            <Card className="cardTitle" title="Citas pendientes / eliminar" onClick={SeeAppointment} style={{ width: 300 }}>
            <img src={seeAppntm} className="addAppntm"></img>
            </Card>
            </div>
        </div>


    );
}

export default Appointment;