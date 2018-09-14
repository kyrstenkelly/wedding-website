import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Admin from 'views/admin/admin';
import App from 'views/main/app';
import './index.scss';

const Routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/admin" component={Admin}/>
    </div>
  </BrowserRouter>
);

render(
  Routes,
  document.getElementById('root')
);
registerServiceWorker();
