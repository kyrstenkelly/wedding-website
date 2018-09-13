import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import App from 'views/main/app';
import './index.scss';

const Routes = (
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>
);

render(
  Routes,
  document.getElementById('root')
);
registerServiceWorker();
