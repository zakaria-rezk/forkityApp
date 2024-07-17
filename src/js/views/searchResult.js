import { view } from "./view";

class searchRecpies extends view {
  _parentContainer = document.querySelector('.results');
  _btn=document.querySelector('.search');
  _data
  getQuery() {
    
    const query= '?search=' + this._btn.querySelector('.search__field').value;
    
    this.#clearInput();
    return query;
  }
  #clearInput(){
    this._btn.querySelector('.search__field').value =''
  }
  spinner = function () {
    const markup = `<div class="spinner">
            <svg>
              <use href="src/img/icons.svg#icon-loader"></use>
            </svg>
          </div> -->`;
    this._parentContainer.innerHTML = '';
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  };
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
  handelSearch(handle){
    this._btn.addEventListener('submit',function(e){
      console.log("handelsearch")
      e.preventDefault();
      handle();
    
    })
  }
  generateMarkup(){
   const markup= this._data.map(rec => {return `<li class="preview">
            <a class="preview__link preview__link--active" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`}).join('')
      
 return markup;
  }
}
export default new searchRecpies;