import { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import { FiHome, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'
import './styles.css';
import { AuthContext } from '../../context/auth';

import Header from '../../components/Header'
import CardDashboard from '../../components/CardDashboard';
const PsychologistDashboard = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Sidebar />
            <div className="content">
                <Header name="Dashboard">
                    <FiHome size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Seja bem vindo {user.name}</h1>
                    <CardDashboard name="Quantidade de consultas" color="roxo" value={0} />
                    <Link className="buttonMarcar" to="Marcar" id="met">Ver consulta</Link>
                </div>
            </div>
        </div>
    )
}

export default PsychologistDashboard;