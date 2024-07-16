class spinner {
   renderSpinner = function (parent) {
    const span = `<div class="spinner">
        <svg>
          <use href="src/img/icons.svg#icon-loader"></use>
        </svg>
      </div> -->`;
    parent.innerHTML = '';
    parent.insertAdjacentHTML('afterbegin', span);
  };
}
export default spinner;