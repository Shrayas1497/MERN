import{BrowserRouter,Switch,Route} from 'react-router-dom';
import {Box} from '@material-ui/core'
import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';

import DetailView from './components/product/Detailview';
import ContextProvider from './context/ContextProvider';



function App() {
  return (
    <TemplateProvider> 
      <ContextProvider> 
    <BrowserRouter>
     <Header/>
    <Box style={{marginTop:54}}> 
    <Switch>
    <Route  exact path="/" component={Home}/>
     <Route exact path='/cart'component={Cart}/>
     <Route exact path='/product/:id'component={DetailView}/>
     </Switch>
     </Box>
  </BrowserRouter>
  </ContextProvider>
  </TemplateProvider>
  );
}

export default App;
