import * as model from './model';
import * as view from '../js/views/recipeView';
import recipeView from '../js/views/recipeView';
import spinner from './views/spinner';

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const parent = document.querySelector('.recipe');
    spinner.renderSpinner(parent);
    await model.loadRecipe(id);
    const recipe = new recipeView(model.state.recipe);
    recipe.renderRecipe();
  } catch (Error) {
    throw Error;
  }
  // recipe.removeSpinner()
};

//////////////////////////////////////
const ev = ['load', 'hashchange'];
ev.forEach(ev => {
  window.addEventListener(ev, showRecipe);
});
