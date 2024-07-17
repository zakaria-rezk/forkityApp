import { view } from './view';

class paginationView extends view {
  _parentContainer = document.querySelector('.pagination');
  _data;
  handerPagination(handel) {
    this._parentContainer.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const pageToGo = +btn.dataset.goto;
      console.log('handerPagination');
      console.log(pageToGo);
      handel(pageToGo);
    });
  }
  generateMarkup() {
    console.log(this._data);
    const numOfpages = Math.ceil(
      this._data.searchRecipes.length / this._data.resultPerPage
    );

    if (this._data.pageNum === 1 && !(this._data.pageNum === numOfpages)) {
      console.log('first');
      return `<button data-goto="${
        this._data.pageNum + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.pageNum + 1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>`;
    } else if (this._data.pageNum === numOfpages && this._data.pageNum != 1) {
      console.log('last page');
      return `<button data-goto="${
        this._data.pageNum - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.pageNum - 1}</span>
          </button>`;
    } else if (this._data.pageNum > 1 && !(this._data.pageNum === numOfpages)) {
      console.log('middel');
      return `<button data-goto="${
        this._data.pageNum - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.pageNum - 1}</span>
          </button>
          <button data-goto="${
            this._data.pageNum + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.pageNum + 1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>`;
    } else return ` `;
  }
}
export default new paginationView();
