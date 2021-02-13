import './App.css';
import { Component } from 'react';
import Main from './Components/MainComponent';
import {BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
 
  render() {
    return(
    <Router>
      <div className="App">
        <Main/>
      </div>
   </Router>
    );
  }
}

export default App;
