import { Switch, Route } from 'react-router-dom'


import Navigation from './components/Navigation'
import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/RegistrationForm';

function App() {
  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <Route path='/sign-up' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
