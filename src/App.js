import React from 'react';
import './App.css';
import Nav from './component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import About from './component/About';
import Shop from './component/Shop';
import Login from './component/Login/Login';
import Meeting from './component/meeting/Meeting';




function App() {
  return (
    <Router >
    <div className="App">
     {/* <Nav  /> */}
     <Switch>
     <Route path="/"  exact component={Login}></Route>
     <Route path="/about" component={About}></Route>
     <Route path="/shop" component={Shop}></Route>
     <Route path="/meeting" component={Meeting}></Route>
     
     </Switch>
    </div>
    </Router>
  );
}

const Home =() => (
  <div>
    <h1>wlecome to Home</h1>
  </div>
)

export default App;
