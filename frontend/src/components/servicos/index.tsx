import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './servicos.css';

interface StructServiço {
    icone: string,
    titulo: string,
    descrição: string,
}

interface Props {
    serviços: StructServiço[],
}

const Serviços: React.FC<Props> = ({
    serviços,
}) => {
    return (
        <div id='serviços' className='services'>
            <div className='container-fluid text-center'>
                <h2>Serviços</h2>
                <h5>O que nós oferecemos</h5>
                <br />
                <div className='row'>
                    {serviços.map(serviço => {
                        return (
                            <div className='col-sm-4'>
                                <i className={serviço.icone} />
                                <h5>{serviço.titulo}</h5>
                                <p>{serviço.descrição}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Serviços;