import React from 'react';
import './styles/estilo.css';
import surf from '../images/hooked6.jpg';
import pop1 from '../images/Puerto-Plata-1.jpg';
import pop2 from '../images/Puerto-Plata-4.jpg';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    render() {
        return (
          <div id="main">
            <div id="carousel" className="carousel slide carousel-fade " data-ride="carousel"  data-pause="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={surf} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={pop1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={pop2} className="d-block w-100" alt="..."/>
              </div>
              <div className="overlay">
              <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 offset-md-6 text-right">
                                    <h1>Pocoyo Show</h1>
                                    <p className="d-done d-md-block">El show de Pocoyo y su comunidad estara por primera en la republica Dominicana El show de Pocoyo y su comunidad estara por primera en la republica Dominicana 
                                        El show de Pocoyo y su comunidad estara por primera en la republica Dominicana El show de Pocoyo y su comunidad estara por primera en la republica Dominicana
                                        El show de Pocoyo y su comunidad estara por primera en la republica Dominicana
                                        El show de Pocoyo y su comunidad estara por primera en la republica Dominicana 
                                    </p>
                                    <Link to="/">Ver Trailler</Link>
                                    <button>Comprar Ticket</button>
                                </div>
                            </div>
                        </div>
              </div>
            </div>
           
          </div>
          </div>
        );
    }
}

export default Header
