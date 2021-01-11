import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';

interface StructPortfolio {
    titulo: string,
    descrição: string,
}

interface Props {
    portfolios: StructPortfolio[],
}

const Portfolio: React.FC<Props> = ({
    portfolios
}) => {
    return (
        <div className='portfolio'>
            <div className='container-fluid text-center'>
                <h2>Portfólio</h2>
                <h5>Nossos principais projetos</h5>
                <br />
                <div className='row text-center'>
                    {portfolios.map(portfolio => {
                        return (
                            <div className='col-sm-4'>
                                <div className='thumbnail'>
                                    <p>
                                        <strong>{portfolio.titulo}</strong>
                                    </p>
                                    <p>{portfolio.descrição}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;