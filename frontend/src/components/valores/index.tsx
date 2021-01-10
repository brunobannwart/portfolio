import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './valores.css';

const Valores: React.FC = () => {
    return (
        <div className='values'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <i className='fa fa-handshake-o' />
                    </div>
                    <div className='col-sm-8'>
                        <h2>Nossos valores</h2>
                        <br />
                        <h5>
                            <strong>Missão: </strong>
                            Nossa missão Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo
                            consequat
                        </h5>
                        <br />
                        <p>
                            <strong>Visão: </strong>
                            Nossa visão Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo
                            consequat
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Valores;