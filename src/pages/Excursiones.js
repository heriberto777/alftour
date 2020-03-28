import React from 'react';
// import ReactDOM from 'react-dom';

import Excursion from '../components/Excursion';


class Excursiones extends React.Component {

        constructor(props){
            super(props);
            this.state = { 
                loading: false,
                error: null,
                data: {
                    //declaramos los componentes del JSON
                    // countryInfo: [],
                    Excursiones: []
        
            },
            nextPage: 0
        };
        
    }

    componentDidMount(){
        // if (this.state.nextPage <= 1) {
        //     this.fetchExcursiones();
        // }
        // if (!this.state.loading) {
        //     window.onscroll = this.detectScrollEnd;
        // }
        this.fetchExcursiones();
        
    }

    // componentDidUpdate() {
    //     if(this.state.loading){
    //         window.onscroll = () => {};
    //     } else {
    //         window.onscroll = this.detectScrollEnd;
    //     }
    // }


    fetchExcursiones = async () => {
        this.setState({loading: true, error: null});
    
        try {
            const resp = await fetch(`https://raw.githubusercontent.com/heriberto777/alftour/master/data.json`);
            const data = await resp.json();
    
            this.setState({
                loading: false,
                data: {
                    // countryInfo: data.countryInfo,
                    Excursiones: [].concat(this.state.data.Excursiones, data.Excursiones)
                },
                // nextPage: this.state.nextPage + 1
            });
            
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };
   

    detectScrollEnd = () => {
        const contentHeight = document.body.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= contentHeight) {
            if (this.state.nextPage < 26){
                this.fetchExcursiones();
            }
        }
    };

    
    render() {

        if (this.state.loading === true){
            return (
                <div>Loading....</div>
            )
        }
        if(this.state.error){
            return (
            <div>{this.state.error}</div>
            )
        }
       return (
        
      
        <div id="cards-sp" className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col text-center text-uppercase">
                            <small>
                                Quiere conocer,
                            </small>
                            <h2>Republica Dominicana, Excurciones</h2>
                        </div>
        </div>
       
        <div className="row">
            {this.state.data.Excursiones.map(excur => (
                <div className="col-md-4 mb-4" key={excur.id}>
                    <Excursion excursion={excur} />
                    {/* // console.log(excur) */}
                </div>
            ))}
        </div>
        </div>
        </div>
       

       );
    }
}

export default Excursiones;