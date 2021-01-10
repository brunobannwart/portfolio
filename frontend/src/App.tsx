import React from 'react';

import Navegar from './components/navegar';
import Rodape from './components/rodape';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <>
            <Navegar nome='Company' />
            <Rodape 
                nome='Company'
                ano={new Date().getFullYear().toString()}
            />
        </>
    );
}

export default App;
