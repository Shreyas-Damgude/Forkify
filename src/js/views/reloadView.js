class ReloadView {
  _parentElement = document.querySelector('.header__logo');

  addHandlerClick() {
    this._parentElement.addEventListener('click', function () {
      window.location.href = 'http://localhost:1234/';
    });
  }
}

export default new ReloadView();
