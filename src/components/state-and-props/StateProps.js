import React, { Component } from 'react';

//state propsgit st
export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan: 'Bakso'
        }
    }

    gantiMakanan(makanan_baru){
        this.setState({
            makanan: makanan_baru
        })
    }

    render() {
        return (
        <div>
            <h2>{this.state.makanan}</h2>
            <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
        </div>
        )
    }
}
