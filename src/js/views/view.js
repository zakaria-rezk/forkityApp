export class view{
    render=(data)=> {
      this._data = data;
      this.renderMarkup();
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
            this._parentContainer.innerHTML = '';
            this._parentContainer.insertAdjacentHTML('afterbegin', markup);
   }
    renderMarkup = () => {
      this._parentContainer.innerHTML = '';
      const markup = this.generateMarkup();
  
      this._parentContainer.insertAdjacentHTML('afterbegin', markup);
    };
}