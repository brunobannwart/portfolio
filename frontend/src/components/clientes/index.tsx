import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clientes.css';

interface StructCliente {
    nome: string,
    avaliação: string,
}

interface Props {
    clientes: StructCliente[],
}

const Clientes: React.FC<Props> = ({
    clientes
}) => {
    return (
        <div className='customers'>
            <div className='container-fluid text-center'>
                <h2>Clientes</h2>
                <h5>Avaliações de nossos principais clientes</h5>

                <div id='lista' className='carousel slide' data-ride='carousel'>
                    <ol className='carousel-indicators'>
                        <li
                            data-target='#lista'
                            data-slide-to='0'
                            className='active'
                        />
                        <li
                            data-target='#lista'
                            data-slide-to='1'
                        />
                        <li
                            data-target='#lista'
                            data-slide-to='2'
                        />
                    </ol>

                    <div className='carousel-inner'>
                        {clientes.map(cliente => {
                            return (
                                <div className='carousel-item'>
                                    <div className='carousel-caption text-start'>
                                        <h4>{cliente.nome}</h4>
                                        <p>{cliente.avaliação}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <a
                        className='carousel-control-prev'
                        href='#lista'
                        role='button'
                        data-slide='prev'
                    >
                        <span className='carousel-control-prev-icon'></span>
                    </a>
                    <a
                        className='carousel-control-next'
                        href='#lista'
                        role='button'
                        data-slide='next'
                    >
                        <span className='carousel-control-next-icon'></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Clientes;