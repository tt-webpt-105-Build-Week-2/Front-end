import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import PrivateRoute from './utils/PrivateRoute'
import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/RegistrationForm';
import RecipesList from "./components/recipes/RecipesList";
import AddRecipe from './components/recipes/AddRecipe';
import RecipePage from './components/recipes/RecipePage'

// Context
import RecipeProvider from './context/RecipeContext'
import EditPage from './components/recipes/EditPage';
// import AuthState from './context/AuthState';
// import RecipeState from './context/AuthState';

function App() {
  return (
    <RecipeProvider>

      <div className='App'>
        <Navigation />
        <Switch>
          <PrivateRoute exact path='/recipes' component={RecipesList} />
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/register' component={RegistrationForm} />
          <Route exact path='/addrecipe' component={AddRecipe} />

          <PrivateRoute path="/recipe/:id" component={RecipePage} >
            <RecipePage />

          </PrivateRoute>
          <Route path='/edit/:id' component={EditPage}>
            <EditPage />
          </Route>

        </Switch>
      </div>



    </RecipeProvider>
  );
}

export default App;
