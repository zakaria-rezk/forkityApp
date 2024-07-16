import { GetJson } from './helper';
import { API_Url } from './views/config';
import searchResult from './views/searchResult';
export const state = {
  recipe: {},
  searchResult:{
    query:'',
    searchRecpies:[]

  }
};
export const loadRecipe = async id => {
  try {
  

    const data = await GetJson(`${API_Url}/${id}`);

  
    let { recipe } = data.data;
 
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
export const loadSearch = async query => {
  try {
    const data = await GetJson(`${API_Url}${query}`);
    state.searchResult.searchRecpies = data.data.recipes;
    console.log(state.searchResult.searchRecpies);
  } catch (err) {
    throw err;
  }
};