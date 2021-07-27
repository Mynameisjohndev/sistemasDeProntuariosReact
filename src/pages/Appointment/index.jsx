import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

import Header from '../../components/Header'
import styles from './styles.css';

function Appointment() {
    return (
        <div>
            <Sidebar />

            <div className="content">
                <Header name="Agendar consulta">
                    <BsReverseLayoutTextWindowReverse size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Informe os dados para agendar uma consulta</h1>
                </div>
            </div>

        </div>
    );
}

export default Appointment;