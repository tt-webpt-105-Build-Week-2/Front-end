import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/RegistrationForm';
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <PrivateRoute exact path='/' component={PrivateRoute} />
        <Route path='/register' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
