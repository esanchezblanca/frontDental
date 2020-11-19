import './App.css';
import Header from './components/header';
import Login from './containers/login/login';
import Appointment from './containers/appointments/appointment';
import Register from './containers/register/register';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/login" component={Login} exact />
          {/* <Route path="/" component={Home} exact/> */}
          <Route path="/appointment" component={Appointment} exact />

          <Route path="/register" component={Register} exact/>
          <Link to="/login" component={Login} exact></Link>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
