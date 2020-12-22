import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFount from './components/NotFound/NotFount';
import KrishiBazaar from './components/KrishiBazaar/KrishiBazaar/KrishiBazaar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/krishiBazaar">
          <KrishiBazaar></KrishiBazaar>
        </Route>
        <Route path="*">
          <NotFount></NotFount>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
