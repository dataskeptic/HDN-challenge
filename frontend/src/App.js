import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import AddHero from './screens/AddHero'
import HeroesList from './screens/HeroesList'
import HeroesPowers from './screens/HeroesPowers';
import Home from './screens/Home'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    
    <GlobalProvider>
      <Router>   
          <div className="container">
            <Header />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/HeroesList' component={HeroesList} />
              <Route exact path='/HeroesPowers' component={HeroesPowers} />    
              <Route exact path='/AddHero' component={AddHero} />
            </Switch>
          </div>   
      </Router>
    </GlobalProvider>
  
  );
}

export default App;
