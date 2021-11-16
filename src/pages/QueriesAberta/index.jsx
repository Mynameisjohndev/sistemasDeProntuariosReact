import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage';
import { AuthContext } from '../../context/auth';

const QueriesAberta = () => {

    const { cosultas, user } = useContext(AuthContext);
    const [name, setName] =  useState("João");

    return(
        <div>
        <Sidebar />

        <div className="content">
            <Header name="Prontuários">
                <BsReverseLayoutTextWindowReverse size={25} />
            </Header>
        </div>

        <div className="content">
            <div className="bodyContent">
                <h1 id="Title">Paciente: {name}</h1>
                {cosultas.length == 0 && user.tipo == "psicologo" && (
                    <AlertMessage text="Não existem prontuários deste paciente!" />   
                )}
                <Link className="buttonMarcar" to="/Novo/Prontuario" id="met">Novo prontuário</Link>
            </div>
        </div>
    </div>
    );
}

export default QueriesAberta;