import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navegar.css';

interface Props {
    nome: string,
}

const Navegar: React.FC<Props> = ({
    nome,
}) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark static-top'>
            <div className='container-fluid'>
                <section className='navbar-brand'>{nome}</section>
            </div>
        </nav>
    );
}

export default Navegar;