import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/Home/Home';

const Routes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Layout>
);
    
export default Routes;