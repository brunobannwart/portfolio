import React from 'react';

import Contato from './components/contato';
import Navegar from './components/navegar';
import Rodape from './components/rodape';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <>
            <Navegar nome='Company' />
            <Contato
                localização='São Paulo, SP'
                email='company@email.com'
                telefone='(11) 9999-9999'
            />
            <Rodape 
                nome='Company'
                ano={new Date().getFullYear().toString()}
            />
        </>
    );
}

export default App;
