import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './servicos.css';

const Serviços: React.FC = () => {
    return (
        <div id='serviços' className='services'>
            <div className='container-fluid text-center'>
                <h2>Serviços</h2>
                <h5>O que nós oferecemos</h5>
                <br />
                <div className='row'>
                    <div className='col-sm-4'>
                        <i className='fa fa-tools' />
                        <h5>Dedicação</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-sm-4'>
                        <i className='fa fa-certificate' />
                        <h5>Qualidade</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-sm-4'>
                        <i className='fa fa-clock' />
                        <h5>Pontualidade</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <i className='fa fa-money' />
                        <h5>Preço justo</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-sm-4'>
                        <i className='fa fa-blind' />
                        <h5>Acessibilidade</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-sm-4'>
                        <i className='fa fa-marker' />
                        <h5>Personalização</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serviços;