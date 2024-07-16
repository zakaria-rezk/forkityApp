import { view } from "./view";

class searchRecpies extends view {
  #parentEl = document.querySelector('.search');
  #data
  getQuery() {
    
    const query= '?search=' + this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }
  #clearInput(){
    this.#parentEl.querySelector('.search__field').value =''
  }
  handelSearch(handle){
    
    
    this.#parentEl.addEventListener('submit',function(e){
      console.log("handelsearch")
      e.preventDefault();
      handle();
    
    })
  }
  generateMarkup(){
    console.log(this.#data)
    // this.#data.map(` <li class="preview">
    //         <a class="preview__link preview__link--active" href="#23456">
    //           <figure class="preview__fig">
    //             <img src="src/img/test-1.jpg" alt="Test" />
    //           </figure>
    //           <div class="preview__data">
    //             <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
    //             <p class="preview__publisher">The Pioneer Woman</p>
    //             <div class="preview__user-generated">
    //               <svg>
    //                 <use href="src/img/icons.svg#icon-user"></use>
    //               </svg>
    //             </div>
    //           </div>
    //         </a>
    //       </li>`).join

  }
}
export default new searchRecpies;