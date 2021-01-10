import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './rodape.css';

interface Props {
    nome: string,
    ano: string,
}

const Rodape: React.FC<Props> = ({
    nome,
    ano,
}) => {
    return (
        <footer className='container-fluid text-right'>
            <p>&copy; Direitos reservados {nome} {ano}</p>
        </footer>
    );
}

export default Rodape;