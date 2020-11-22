import React from 'react';
import "./appointments.css";
import { Card } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default class SeeAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayAppointment: []
        };
    }

    componentDidMount() {
        this.getAppointment();
    }

    //Hace llamada a backend para listar citas pendientes
    getAppointment() {
        const user = localStorage.getItem('user')
        axios.get(`http://localhost:3200/appointment/showPending/${user}`)
            .then(res => {
                console.log(res)
                this.setState({
                    arrayAppointment: res.data
                });
            })
            .catch(err => { })
    }
    render() {
        return (
            <section>
                <h1>Citas pendientes</h1>
                { this.state.arrayAppointment.map((appoinment) => {
                    return (
                        <article className="citaDetalle" >
                            <p>Tratamiento: {appoinment.treatment} </p>
                            <p>Día: {appoinment.day}</p>
                            <p>Sala: {appoinment.room}</p>
                        </article>
                    );
                })
                }
            </section>);
    }

}