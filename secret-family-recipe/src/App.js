import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import PrivateRoute from './utils/PrivateRoute'
import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/RegistrationForm';
import RecipesList from "./components/recipes/RecipesList";
import AddRecipe from './components/recipes/AddRecipe';
import RecipesPage from './components/recipes/RecipesPage'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <PrivateRoute exact path='/recipes' component={RecipesList} />
        <Route path='/register' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/addrecipe' component={AddRecipe} />

        <Route path='/recipe0' component={RecipesPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
