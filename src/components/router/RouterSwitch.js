import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../../pages/layout/Layout';

import {routes, LAYOUT_PRINCIPAL, LAYOUT_USER} from './Routes';

export default function RouterSwitch() {
  return (
    <Switch>
      {
        routes.filter(
          elt => elt.layout === LAYOUT_PRINCIPAL 
        ).map(
          item => 
            <Route exact path={item.endpoint} key={item.title}>
              <Layout title={item.title}>
                <item.component />
              </Layout>
            </Route>
        )
      }
      {
        routes.filter(
          elt => elt.layout === LAYOUT_USER 
        ).map(
          item => 
            <Route exact path={item.endpoint} key={item.title}>
                <item.component />
            </Route>
        )
      }
      </Switch>
  );
}