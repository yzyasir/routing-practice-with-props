import './App.css';
import HomePage from './components/HomePage';
import Differ from './components/Differ';
import Color from './components/Color';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
    <Router>
      <HomePage path="/home" />
      <Differ path="/:id" /> 
      {/* goes to id first if its just a string */}
      <Color path="/:wordColor/:bgColor" />
    </Router>
    </div>
  );
}

export default App;
