import { fetchPro } from './helper';
import { API_Url } from './views/config';
export const state = {
  recipe: {},
};
export const loadRecipe = async id => {
  try {
  

    const data = await fetchPro(`${API_Url}/${id}`);

  
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
