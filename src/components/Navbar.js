import React from 'react';
import './styles/estilo.css';
import logo from '../images/LogoAlftour.png';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (

                <div id="NavBar" className="navbar navbar-expand-lg navbar-dark fixed-top" >
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        {/* <span className="font-weight-dark">Alftour</span> */}
                        {/* <span className="font-weight-bold">Conf</span> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/excursiones">Tour</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link"  to="/">Reservations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/">Ofertas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/">Abou Us</Link>
                        </li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Navbar;