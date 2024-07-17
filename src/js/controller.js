import * as model from './model';
import recipeView from '../js/views/recipeView';
import paginationView from './views/paginationView';
import { seaarchResPage } from './model';
import searchResult from './views/searchResult';
import { loadSearch } from './model';

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (Error) {
    recipeView.renderError();
    throw Error;
  }
  // recipe.removeSpinner()
};
const makeSearch = async function () {
  try {
    searchResult.spinner();
    const query = searchResult.getQuery();
    if (!query) return;
   
    await loadSearch(query);
  
    searchResult.render(seaarchResPage(model.state.searchResult.pageNum))
    //render pagination button
    paginationView.render(model.state.searchResult)
    recipeView.handelSurving(controlSurvings)
    

  } catch (Error) {
    console.log('error')
    searchResult.renderError();
    throw Error;
  }
};
const controlPagination =function(pageToGo){
  model.state.searchResult.pageNum=pageToGo;
  console.log("controlPagination")
  
  searchResult.render(seaarchResPage(model.state.searchResult.pageNum));
  paginationView.render(model.state.searchResult)
}
// 
const controlSurvings =function(num){
  console.log("controlSurvings")
  if(num==1){
    console.log("increase")
  }  
  else{
    console.log("descrease")
  }
}
const init = function () {
  recipeView.handleRender(showRecipe);
  
  searchResult.handelSearch(makeSearch);
  paginationView.handerPagination(controlPagination)
};
init();

//////////////////////////////////////
