import React from 'react';
import ReactNotifications from 'react-notifications-component';

import Contato from './components/contato';
import Navegar from './components/navegar';
import Portfolio from './components/portfolio';
import Rodape from './components/rodape';
import Serviços from './components/servicos';
import Sobre from './components/sobre';
import Valores from './components/valores';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
    function obterContatos() {
        const contatos = [];

        contatos.push({ icone: 'fa fa-map-marker', legenda: 'São Paulo, SP' });
        contatos.push({ icone: 'fa fa-phone', legenda: '(11) 9999-9999' });
        contatos.push({ icone: 'fa fa-envelope', legenda: 'company@email.com' });

        return contatos;
    }

    function obterPortfolio() {
        const portfolio = [];

        portfolio.push({ titulo: 'Projeto', descrição: 'Lorem ipsum dolor sit amet' });
        portfolio.push({ titulo: 'Projeto', descrição: 'Lorem ipsum dolor sit amet' });
        portfolio.push({ titulo: 'Projeto', descrição: 'Lorem ipsum dolor sit amet' });

        return portfolio;
    }

    function obterServiços() {
        const serviços = [];

        serviços.push({ icone: 'fa fa-tools', titulo: 'Dedicação', descrição: 'Lorem ipsum dolor sit amet' });
        serviços.push({ icone: 'fa fa-certificate', titulo: 'Qualidade', descrição: 'Lorem ipsum dolor sit amet' });
        serviços.push({ icone: 'fa fa-clock', titulo: 'Pontualidade', descrição: 'Lorem ipsum dolor sit amet' });
        serviços.push({ icone: 'fa fa-money', titulo: 'Preço justo', descrição: 'Lorem ipsum dolor sit amet' });
        serviços.push({ icone: 'fa fa-blind', titulo: 'Acessibilidade', descrição: 'Lorem ipsum dolor sit amet' });
        serviços.push({ icone: 'fa fa-marker', titulo: 'Personalização', descrição: 'Lorem ipsum dolor sit amet' });

        return serviços;
    }

    return (
        <>
            <ReactNotifications />
            <Navegar nome='Company' />
            <Sobre />
            <Valores />
            <Serviços 
                serviços={obterServiços()}
            />
            <Portfolio 
                portfolios={obterPortfolio()}
            />
            <Contato
                contatos={obterContatos()}
            />
            <Rodape
                nome='Company'
                ano={new Date().getFullYear().toString()}
            />
        </>
    );
}

export default App;
