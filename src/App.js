import './App.css';
import Header from './components/header';
import Login from './containers/login/login';
import Appointment from './containers/appointments/appointment';
import Register from './containers/register/register';
import Home from './containers/home/home';
import AddAppntm from './containers/appointments/addAppointment';
import SeeAppntm from './containers/appointments/seeAppointment';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
                    
          <Route path="/login" component={Login} exact />
          <Route path="/appointment" component={Appointment} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/register" component={Register} exact/>
          <Route path="/addappointment" component={AddAppntm} exact/>
          <Route path="/seeappointment" component={SeeAppntm} exact/>

          {/* Arranca la página desde aquí. Tiene que estar al final para no sobreescribir */}
          <Link to="/home" component={Home} exact></Link> 
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
