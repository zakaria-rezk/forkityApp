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
    recipeView.render(model.state.recipe)
    recipeView.renderRecipe()
   
  } catch (Error) {
    recipeView.renderError()
    throw Error;
  }
  // recipe.removeSpinner()
};
const init = function(){
  recipeView.handleRender(showRecipe)
}
init();
console.log("render")
//////////////////////////////////////

