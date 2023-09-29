import React from 'react';
import { Header } from './Header';
import 'boxicons';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Pages} from './products/Pages';
import { Dataprovider } from '../context/Dataprovider';


function App () {
  return (

          <div className='App'>
            <Router>
              <Dataprovider>
                <Header/>
                <Pages/>
                
              </Dataprovider>
            </Router>           
 
          </div>

  );
}

export default App;




