import React from 'react';
// import './styles/estilo.css';
// import pop1 from '../images/Puerto-Plata-1.jpg';
import { Link } from 'react-router-dom';

const Excursion = props => (

            <div className="card">
                 {/* Imagemes Top Card */}
                 <img src={props.excursion.urlImage} className="card-img-top" alt="Excursion"/>
                 {/* Cuerpo de la tarjeta */}
                <div className="card-body">
                    {/* Badges para asignar precios */}
                    <div className="badges text-right">
                        <h4><span className="badge badge-warning">{props.excursion.Price}</span></h4>
                    </div>  
                    <h5 className="card-title mb-2">{props.excursion.Name}</h5>
                    <p className="card-text">
                    {props.excursion.Detaills}
                    </p>
                
                    <Link to="/" className="btn btn-primary w-100 p-3">Mas Informacion</Link> 
                </div>
            </div>

);


export default Excursion