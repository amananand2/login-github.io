import logo from './logo.svg';
import './App.css';
import Login from "./login"
import Dashboard from "./dashboard"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
   <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />  
      </Switch>
    </Router>
   
    </>
  );
}

export default App;
