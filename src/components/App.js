import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Excursiones from '../pages/Excursiones';
import Home from '../pages/Home';
// import BadgeNew from '../pages/BadgeNew';
import Layout from './Layout';
function App(){
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/excursiones" component={Excursiones} />
              {/* <Route exact path="/badges/new" component={BadgeNew} /> */}
              {/* <Route component={NotFound} /> */}
            </Switch>
          </Layout>
        </BrowserRouter>
      );
    }

export default App;