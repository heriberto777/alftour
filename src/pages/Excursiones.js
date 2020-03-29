import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

import ExcursionList from '../components/ExcursionList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';



class Excursiones extends React.Component {

        constructor(props){
            super(props);
        this.state = {
            loading: true,
            error: false,
            data: undefined,
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

        this.internalId = setInterval(this.fetchExcursiones, 5000);
        
    }

    UNSAFE_componentWillMount() {
        clearInterval(this.internalId);
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
            // const resp = await api.excursiones.list();
            // const data = await resp.json();
    
            // this.setState({
            //     loading: false,
            //     data: {
            //         // countryInfo: data.countryInfo,
            //         Excursiones: [].concat(this.state.data.Excursiones, data.Excursiones)
            //     },
            //     // nextPage: this.state.nextPage + 1
            // });
            const data = await api.excursiones.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };
   

    // detectScrollEnd = () => {
    //     const contentHeight = document.body.offsetHeight;
    //     const scrollPosition = window.scrollY + window.innerHeight;
    //     if (scrollPosition >= contentHeight) {
    //         if (this.state.nextPage < 26){
    //             this.fetchExcursiones();
    //         }
    //     }
    // };

    
    render() {

        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
          }
      
          if (this.state.error) {
            return <PageError error={this.state.error} />;
          }


          return (
            <React.Fragment>
                <div className="containter">
                <ExcursionList excursion={this.state.data} />
            
                {this.state.loading && <MiniLoader />}
                </div>
            </React.Fragment>
          );
    }
}

export default Excursiones;