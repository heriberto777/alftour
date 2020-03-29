import React from 'react';
import { Link } from 'react-router-dom';

class ExcursionListItem extends React.Component {
    render() {
        return (
            <div className="card">
                 {/* Imagemes Top Card */}
                 <img src={this.props.excur.urlImage} className="card-img-top" alt="Excursion"/>
                 {/* Cuerpo de la tarjeta */}
                <div className="card-body">
                    {/* Badges para asignar precios */}
                    <div className="badges text-right">
                        <h4><span className="badge badge-warning">{this.props.excur.Price}</span></h4>
                    </div>  
                    <h5 className="card-title mb-2">{this.props.excur.Name}</h5>
                    <p className="card-text">
                    {this.props.excur.Detaills}
                    </p>
                
                    <Link to="/" className="btn btn-primary w-100 p-3">Mas Informacion</Link> 
                </div>
            </div>
        )
    }
}

class ExcursionList extends React.Component {
    render() {
        if(this.props.excursion.length === 1){
            return (
                <div>
                <h3>Regresar</h3>
                <Link className="btn btn-primary" to="/">
                  Regresar
                </Link>
              </div>
            );
        }

        return(
            <div className="row">
    
              {this.props.excursion.map(excurc => {
                return (
                    // <div className="col-md-4 mb-4"  key={character.country}>
                  <div className="col-md-4 mb-4"  key={excurc.id}>
                    <Link
                      className="text-reset text-decoration-none"
                      to={`/excurcionDetaill/${excurc.id}/detaills`}
                    >
                      <ExcursionListItem excur={excurc} />
                    </Link>
                  </div>
                );
              })}
    
          </div>
        );
    }
}

export default ExcursionList;