import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Teste2 from '~/pages/teste2';

import Teste from '../pages/teste';

export default function Routes() {
  return (
    <Switch>
      <Route path="/teste2" exact component={Teste2} />

      <Route path="/teste1" exact component={Teste} />
    </Switch>
  );
}
