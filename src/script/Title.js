class Grille {
  constructor(param) {
    this.param = param;
  }

  title(param = this.param) {
    document.title = param;
    const add = document.querySelector('#title_bot');
    const addH1 = document.createElement('h1');
    addH1.textContent = param;
    add.appendChild(addH1);
  }
}

module.exports = Grille;
