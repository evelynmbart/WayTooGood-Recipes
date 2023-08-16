import './App.css';
import { MainPage } from './MainPage';
import { RecipePage } from './RecipePage';

import { MOCK_RECIPE } from "./mockRecipe";


function App() {
  return (
    <>
      <MainPage break recipe={MOCK_RECIPE} />
      <RecipePage recipe={MOCK_RECIPE} />
    </> 
  );
}

export default App;
