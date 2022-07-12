export default class Modal {
  constructor() {
    this.modal = document.querySelector('#contact_modal');
    this.body = document.querySelector('body');
    this._handlerCloseModal = this.closeModal.bind(this);
    this._handlerKeyclose = this.keyClose.bind(this);
    this._form = this.modal.querySelector('form');
    this.header = document.querySelector('header');
    this.main = document.querySelector('#main');
  }

  get name() {
    return this._name;
  }

  submitModal(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputs = form.querySelectorAll('.text');
    inputs.forEach((input) => {
      console.log(input.value);
    });
    this.closeModal();
  }

  keyClose(e) {
    console.log(e.code);
    if (this.modal.ariaHidden === 'false' && e.code === 'Escape') {
      this.closeModal();
    }
  }

  displayModal() {
    this.modal.style.display = 'flex';
    this.modal.ariaHidden = 'false';
    this.header.style.display = 'none';
    this.main.style.display = 'none';
    this.body.style.overflow = 'hidden';
    const iconClose = document.querySelector('.modal header img');
    this._form.addEventListener('submit', this.submitModal.bind(this));
    iconClose.addEventListener('click', this._handlerCloseModal);
    document.addEventListener('keydown', this._handlerKeyclose);
  }

  closeModal() {
    this.modal.ariaHidden = 'true';
    this.modal.style.display = 'none';
    this.header.style.display = 'block';
    this.main.style.display = 'block';
    this._form.removeEventListener('submit', this.submitModal.bind(this));
    document.removeEventListener('keydown', this._handlerKeyclose);
    const iconClose = document.querySelector('.modal header img');
    iconClose.removeEventListener('click', this._handlerCloseModal);
    this.body.style.overflow = 'scroll';
  }
}
