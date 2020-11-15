import Navigation from './components/Navigation'

import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Navigation />

      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
