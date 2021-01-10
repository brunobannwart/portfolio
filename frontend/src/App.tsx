import React from 'react';
import ReactNotifications from 'react-notifications-component';

import Contato from './components/contato';
import Navegar from './components/navegar';
import Rodape from './components/rodape';
import Serviços from './components/servicos';
import Sobre from './components/sobre';
import Valores from './components/valores';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
    return (
        <>
            <ReactNotifications />
            <Navegar nome='Company' />
            <Sobre />
            <Valores />
            <Serviços />
            <Contato
                localização='São Paulo, SP'
                emailContato='company@email.com'
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
