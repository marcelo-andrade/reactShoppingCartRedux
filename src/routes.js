import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Main from './pages/main';
// import Contato from './pages/contato';

const Main = lazy(() => import('./pages/main'));
const Contato = lazy(() => import('./pages/contato'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<div className="boxLoading"><i className="fas fa-spinner fa-spin animationLoading"></i></div>}>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/contato" component={Contato} />                
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Routes;