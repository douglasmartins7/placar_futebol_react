import React from 'react';


import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
    constructor() {
        super() 
            this.state = {
                gols_casa: 0,
                gols_visidante: 0,
            };
    }
    
    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });  
    }

    marcarGolVisidante() {
        this.setState({
            gols_visidante: this.state.gols_visidante + 1,
        });  
    }

    render() {
        return(
            <div>
                <div style={{float: "left", "marginRight": "20px"}}>
                    <h3>Casa</h3>
                    <Time nome={this.props.casa.nome} gols={2}
                          gols={this.state.gols_casa}
                          marcarGol={this.marcarGolCasa.bind(this)} />
                </div>
                <div style={{float: "left", "marginRight": "20px"}}>
                    <Partida estadio={this.props.partida.estadio}
                             data={this.props.partida.data}
                             horario={this.props.partida.horario} />
                </div>
                <div style={{float: "left", "marginRight": "20px"}}>
                    <h3>Visidante</h3>
                    <Time nome={this.props.visidante.nome} gols={0}
                          gols={this.state.gols_visidante}
                          marcarGol={this.marcarGolVisidante.bind(this)} />
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}