import React from 'react';

import PlacarContainer from './PlacarContainer';


const dados = {
    partida: {
        estadio: "Beatweek",
        data: "01/06/2016",
        horario: "19h",
    },
    casa: {
        nome: "Salão Vip",
    },
    visitante: {
        nome: "Avec"
    }
};


export default class App extends React.Component {
    render() {
        return <PlacarContainer {...dados} />
        
    }
}