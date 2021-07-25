import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom"; 
import AddHero from './screens/AddHero'
import HeroesList from './screens/HeroesList'
import HeroesPowers from './screens/HeroesPowers';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/HeroesList' component={HeroesList} />
          <Route exact path='/HeroesPowers' component={HeroesPowers} />    
          <Route exact path='/AddHero' component={AddHero} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
