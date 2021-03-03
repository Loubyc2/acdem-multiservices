import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import DeepCleaning from './components/deepCleaning/DeepCleaning';

function PageNotFoung() {
  return (
    <h1>Page not Found</h1>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route path='/deep-cleaning' component={DeepCleaning} />
        <Route component={PageNotFoung} />
      </Switch>
    </Router>

  );
}

export default App;
