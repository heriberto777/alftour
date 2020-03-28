import React from 'react';
import './styles/estilo.css';
import logo from '../images/LogoAlftour.png';
import fb from '../images/facebook.svg';
import tw from '../images/twitter.svg';
import ytube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="container-fluid">
                 <div className="row">
                     <div className="col-12 col-lg">
                     <h6 className="text-uppercase font-weight-bold mb-4">Follow Us</h6>
                    <p> Here you can use rows and columns to organize your footer</p>
                    <Link className="Navbar__brand" to="/">
                        <img className="fb-logo" src={fb} alt="Logo" />
                    </Link>
                    <Link className="Navbar__brand" to="/">
                        <img className="tw-logo" src={tw} alt="Logo" />
                    </Link>
                    <Link className="Navbar__brand" to="/">
                        <img className="ut-logo" src={ytube} alt="Logo" />
                    </Link>
                    <Link className="Navbar__brand" to="/">
                        <img className="ig-logo" src={instagram} alt="Logo" />
                    </Link>
                     </div>

                    <div className="col-12 col-lg">
                        <h6 className="text-uppercase font-weight-bold">Elances</h6>
                        <Link to="/">Tour</Link> <br/>
                        <Link to="/">Blog</Link> <br />
                        <Link to="/">Contact Us</Link>
                    </div>

                    
                    <div className="col-12 col-lg">
                     <h6 className="text-uppercase font-weight-bold">Contact Us</h6>
                     <h3>Telefono:</h3> <br/>
                     <h3>Telefono:</h3> <br/>
                     <h3>Telefono:</h3> <br/>
                     <h3>Telefono:</h3>
                    </div>
                 </div>
                </div>
            </footer>
         
            
        );
    }
}

export default Footer;