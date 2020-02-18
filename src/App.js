import React, { Component } from 'react';
import Header from './Components/interface/Header';
import List from './Components/contact/List';
import { Provider } from './Context';
import AddContact from './Components/contact/AddContact';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from './Components/interface/Apropos';
import Erreur from './Components/interface/pages/Erreur'

class App extends Component {

  render() {

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
            <Switch>

            <Route exact path="/liste" component={List} />
            <Route exact path="/ajouter" component={AddContact} />
            <Route exact path="/apropos" component={Apropos} />
            <Route exact path="/" component={List} />
            <Route component={Erreur}></Route>
            </Switch>
            </div>
            

           
          </div>
        </Router>
      </Provider>
    );

  }
}

export default App;
/*
presentation = ()=>{
  return "youhou";
}


  let nom = "juju";return (
  <div className="App">
    Hello {nom} !ghhg
    <br/>
    {this.presentation()}
  </div>
);
} */
