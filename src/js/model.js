import { GetJson } from './helper';
import { API_Url, res_per_page } from './views/config';

export const state = {
  recipe: {},
  searchResult: {
    query: '',
    searchRecipes: [],
    resultPerPage: res_per_page,
    pageNum:1,
  },
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
    if (data.data.recipes.length === 0) {
      const err = 'dsfsa';
      throw err;
    }
    state.searchResult.itemsNum = data.data.recipes.length;
    state.searchResult.searchRecipes = data.data.recipes;
  } catch (err) {
    throw err;
  }
};
export const seaarchResPage = function (pagenum) {
  const start = (pagenum - 1) * state.searchResult.resultPerPage;
  const end = pagenum * state.searchResult.resultPerPage;
 console.log(state.searchResult.resultPerPage)
  return state.searchResult.searchRecipes.slice(start, end);
};
