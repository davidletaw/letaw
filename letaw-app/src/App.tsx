import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {HeaderNav} from "./views/HeaderNav";
import {AppRoutes} from "./AppRoutes";

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <AppRoutes />
    </div>
  )
}


export default App;
