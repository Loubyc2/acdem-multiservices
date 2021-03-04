import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import DeepCleaning from './components/deepCleaning/DeepCleaning';
import About from './components/about/About';
import Contact from './components/contactUs/Contact';

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
        <Route exact path='/deep-cleaning' component={DeepCleaning} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact-us' component={Contact} />
        <Route component={PageNotFoung} />
      </Switch>
    </Router>

  );
}

export default App;
