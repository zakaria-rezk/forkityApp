export class view{
    _parentContaine = document.querySelector('.recipe');
    _data;
    render=(data)=> {
      this._data = data;
      this.renderRecipe();
    }
   renderError=()=>{
    const markup =`<div class="error">
              <div>
                <svg>
                  <use href="src/img/icons.svg#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>No recipes found for your query. Please try again!</p>
            </div> -->`
            this._parentContaine.innerHTML = '';
            this._parentContaine.insertAdjacentHTML('afterbegin', markup);
   }
    renderRecipe = () => {
      this._parentContaine.innerHTML = '';
      const markup = this.generateMarkup();
  
      this._parentContaine.insertAdjacentHTML('afterbegin', markup);
    };
}