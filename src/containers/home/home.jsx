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
                    {/* esto mejor en card */}
                    <div>
                        <Card title="Nuestros servicios" style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;