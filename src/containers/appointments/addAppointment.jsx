import React from 'react';
import "./appointments.css";
import { Calendar, Alert, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import DropBar from '../../components/dropdown'


export default class AddAppnt extends React.Component {
    state = {
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
    };

    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = value => {
        this.setState({ value });
    };


    render() {
        const { value, selectedValue } = this.state;
        return (
            <div className="bigDiv" >
               <div className="calendario">
                <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
                <Calendar fullscreen={false} value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
                </div>
                 <Dropdown className="dropOpt" overlay={DropBar}>
                     <a className="ant-dropdown-link" onClick={e => e.preventDefault() }>
                        Seleccione el tratamiento: <DownOutlined />
                    </a>
                 </Dropdown>
                
            </div>
        );
    }

}

