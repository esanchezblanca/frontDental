import React from 'react';
import "./home.css";
import {Card} from 'antd';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { useHistory } from 'react-router-dom';
import clinica from '../../img/maddent.png';
import sala from '../../img/sala1.jpg'

const Home = () => {

    return (
        <div>
            <div>
                <img src={clinica} className="logoNombre" />
            </div>
            <div>
                <div className="datosClinica">
                    <img src={sala} className="sala1" />
                    
                    <div className="cardDiv">
                        <Card title="Nuestros servicios" style={{ width: 300 }}>
                            <p>Ortodoncia</p>
                            <p>Implantes</p>
                            <p>Especialista maxilofacial</p>
                            <p>Blanqueamiento</p>
                        </Card>
                        <Card title="Sobre nosotros" style={{ width: 300 }}>
                            <p>Más de 25 años de experiencia</p>
                            <p>C/Mayor 30, 1B</p>
                            <p>Teléfono 918802560</p>
                        </Card>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;