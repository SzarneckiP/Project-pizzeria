import { templates, select, classNames } from './../settings.js';
import Carousel from './Carousel.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.activePages();
  }

  render(element) {
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    const generatedHTML = templates.homeWidget();
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.containerOf.carousel);
    thisHome.dom.orderBtn = thisHome.dom.wrapper.querySelector(select.home.orderBtn);
    thisHome.dom.bookingBtn = thisHome.dom.wrapper.querySelector(select.home.bookingBtn);

    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);
  }

  initWidgets() {
    const thisHome = this;

    thisHome.carousel = new Carousel(thisHome.dom.carousel);
  }

  activePages() {
    const thisHome = this;

    thisHome.dom.orderBtn.addEventListener('click', function(e){
      e.preventDefault();
      thisHome.pages[0].classList.remove(classNames.pages.active);
      thisHome.pages[1].classList.add(classNames.pages.active);
      thisHome.navLinks[0].classList.remove(classNames.nav.active);
      thisHome.navLinks[1].classList.add(classNames.nav.active);
    });

    thisHome.dom.bookingBtn.addEventListener('click', function(e){
      e.preventDefault();
      thisHome.pages[0].classList.remove(classNames.pages.active);
      thisHome.pages[2].classList.add(classNames.pages.active);
      thisHome.navLinks[0].classList.remove(classNames.nav.active);
      thisHome.navLinks[2].classList.add(classNames.nav.active);
    });
  }
}

export default Home;
