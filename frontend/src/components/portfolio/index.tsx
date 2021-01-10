import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';

const Portfolio: React.FC = () => {
    return (
        <div className='portfolio'>
            <div className='container-fluid text-center'>
                <h2>Portfólio</h2>
                <h5>Nossos principais projetos</h5>
                <br />
                <div className='row text-center'>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <p>
                                <strong>Projeto</strong>
                            </p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <p>
                                <strong>Projeto</strong>
                            </p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <p>
                                <strong>Projeto</strong>
                            </p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;