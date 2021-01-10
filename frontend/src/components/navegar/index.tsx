import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navegar.css';

interface Props {
    nome: string,
}

const Navegar: React.FC<Props> = ({
    nome,
}) => {
    const [menuFechado, setMenuFechado] = useState(true);

    return (
        <nav className='navbar navbar-expand-lg navbar-dark static-top'>
            <div className='container-fluid'>
                <section className='navbar-brand'>{nome}</section>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#menu'
                    aria-controls='menu'
                    aria-label='Menu de navegação'
                    aria-expanded={!menuFechado ? true : false}
                    onClick={() => setMenuFechado(!menuFechado)}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className={`${menuFechado ? 'collapse' : ''} navbar-collapse flex-row-reverse`}
                    id='menu'
                >
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                            <a className='nav-link' href='/'>Contato</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Serviços</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navegar;