import * as model from './model';
import * as view from '../js/views/recipeView';
import recipeView from '../js/views/recipeView';
import spinner from './views/spinner';
import searchResult from './views/searchResult';
import { loadSearch } from './model';
const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner(parent);
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
    recipeView.renderRecipe();
  } catch (Error) {
    recipeView.renderError();
    throw Error;
  }
  // recipe.removeSpinner()
};
const makeSearch = async function () {
  const query = searchResult.getQuery();
  if (!query) return;
 
  await loadSearch(query);
};
const init = function () {
  recipeView.handleRender(showRecipe);
  searchResult.handelSearch(makeSearch);
};
init();
console.log('render');
//////////////////////////////////////
