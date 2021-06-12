import React from 'react';
import './Hello.css';
import swal from 'sweetalert'; //importamos la libería de sweetalert 
//recordar instalar el paquete de node para seetalert usando npm instal sweetalert


  class Hello extends React.Component {
  handleEvent() {
   swal(`Esta es una web app hecha con React.`);
  }

  render() {
    return (
      <h2  onClick={this.handleEvent}>
        Hazme click
      </h2>
    );
  }
}
export default Hello