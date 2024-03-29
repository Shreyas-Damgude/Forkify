import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // First page, there are other pages
    if (currPage === 1 && numPages > 1)
      return this._generateMarkupButton('next', currPage);

    // First page, there are no other pages
    if (numPages === 1) return '';

    // Last Page
    if (currPage === numPages)
      return this._generateMarkupButton('prev', currPage);

    // Other page
    if (currPage < numPages && currPage > 1)
      return `${this._generateMarkupButton(
        'prev',
        currPage
      )}${this._generateMarkupButton('next', currPage)}`;
  }

  _generateMarkupButton(direction, page) {
    return direction === 'prev'
      ? `<button data-goto="${
          page - 1
        }" class="btn--inline pagination__btn--${direction}">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page - 1}</span>
            </button>`
      : `<button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--${direction}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
  }
}

export default new PaginationView();
