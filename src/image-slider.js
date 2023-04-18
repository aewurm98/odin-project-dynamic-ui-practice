export default class Carousel {
  constructor() {
    this.photos = [];
    this.navs = [];
    this.position = 0;
  }

  createPhoto(source) {
    const slides = document.querySelector('.slides');

    const newPhoto = document.createElement('img');
    newPhoto.classList.add('slide-item');
    newPhoto.src = source;
    slides.appendChild(newPhoto);
  }

  addPhoto(source) {
    this.photos.push(source);
  }

  removePhoto(source) {
    const idx = this.photos.indexOf(source);
    this.photos.splice(idx, 1);
  }

  createNav() {
    const dots = document.querySelector('.slide-nav');

    const newDot = document.createElement('div');
    newDot.classList.add('slide-nav-item');
    newDot.addEventListener('click', jumpToPhoto);

    const newDotId = this.navs.length;
    newDot.id = this.photos[newDotId];

    dots.appendChild(newDot);
  }

  addNav() {
    this.navs.push(this.photos[this.navs.length]);
  }

  removeNav(idx) {
    this.navs.splice(idx, 1);
  }

  initialize(array) {
    for (let i = 0; i < array.length; i++) {
      this.createPhoto(array[i]);
      this.addPhoto(array[i]);
      this.createNav();
      this.addNav();

      const firstPhoto = document.getElementsByClassName('slide-item')[0];
      firstPhoto.classList.add('active');

      const firstNav = document.getElementsByClassName('slide-nav-item')[0];
      firstNav.classList.add('active');
    }
  }

  next() {
    if (this.position < this.photos.length - 1) {
      this.position += 1;
    }
  }

  prev() {
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  jump(idx) {
    if (this.position != idx) {
      this.position = idx;
    }
  }
}

export const imageSlider = new Carousel();

export function nextPhoto(e) {
  if (imageSlider.position < imageSlider.photos.length - 1) {
    const oldPhoto =
      document.getElementsByClassName('slide-item')[imageSlider.position];
    oldPhoto.classList.remove('active');

    const oldNav =
      document.getElementsByClassName('slide-nav-item')[imageSlider.position];
    oldNav.classList.remove('active');

    imageSlider.next();

    const newPhoto =
      document.getElementsByClassName('slide-item')[imageSlider.position];
    newPhoto.classList.add('active');

    const newNav =
      document.getElementsByClassName('slide-nav-item')[imageSlider.position];
    newNav.classList.add('active');
  }
}

export function prevPhoto(e) {
  if (imageSlider.position > 0) {
    const oldPhoto =
      document.getElementsByClassName('slide-item')[imageSlider.position];
    oldPhoto.classList.remove('active');

    const oldNav =
      document.getElementsByClassName('slide-nav-item')[imageSlider.position];
    oldNav.classList.remove('active');

    imageSlider.prev();

    const newPhoto =
      document.getElementsByClassName('slide-item')[imageSlider.position];
    newPhoto.classList.add('active');

    const newNav =
      document.getElementsByClassName('slide-nav-item')[imageSlider.position];
    newNav.classList.add('active');
  }
}

export function jumpToPhoto(e) {
  const navLink = e.target.id;

  const photoLink = imageSlider.photos.indexOf(navLink);

  if (photoLink != imageSlider.position) {
    const oldPhoto =
      document.getElementsByClassName('slide-item')[imageSlider.position];
    oldPhoto.classList.remove('active');

    const oldNav =
      document.getElementsByClassName('slide-nav-item')[imageSlider.position];
    oldNav.classList.remove('active');

    imageSlider.jump(photoLink);

    const newPhoto =
      document.getElementsByClassName('slide-item')[imageSlider.position];
    newPhoto.classList.add('active');

    const newNav =
      document.getElementsByClassName('slide-nav-item')[imageSlider.position];
    newNav.classList.add('active');
  }
}
