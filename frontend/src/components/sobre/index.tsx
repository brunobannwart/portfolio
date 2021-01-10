import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sobre.css';

const Sobre: React.FC = () => {
    return (
        <div id='sobre' className='about'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre</h2>
                        <br />
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                        </h5>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br />
                        <button
                            type='button'
                            className='btn btn-primary btn-lg'
                        >
                            Saiba mais
                        </button>
                    </div>
                    <div className='col-sm-4'>
                        <i className='fas fa-laptop-code' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;