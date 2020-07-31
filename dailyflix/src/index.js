import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './pages/Home';
import CadastroVideo from './pages/Cadastro/CadastroVideo';
import CadastroCategoria from './pages/Cadastro/CadastroCategoria';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div>Página em branco ERRO 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
