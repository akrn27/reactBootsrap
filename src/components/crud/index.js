import React, { Component } from 'react';
import Formulir from './Formulir';
import { NavbarComponent } from './NavbarComponent';
import { Tabel } from './Tabel';

export default class Crud extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       makanans : [],
       nama : "",
       deskripsi : "",
       harga : 0,
       id : "",
    }
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
        <div>
            <NavbarComponent />
            <div className="container mt-4">
                <Tabel />
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        </div>
    )
  }
}
