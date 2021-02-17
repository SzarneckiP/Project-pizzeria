import { templates, select } from './../settings.js';
import Carousel from './Carousel.js';
import app from './../app.js';

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
    thisHome.pageOptionsBtn = document.querySelectorAll(select.home.pageOptionsBtn);

  }

  initWidgets() {
    const thisHome = this;

    thisHome.carousel = new Carousel(thisHome.dom.carousel);
  }

  activePages() {
    const thisHome = this;

    for(let pageOptionBtn of thisHome.pageOptionsBtn){
      pageOptionBtn.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', ''); //replace to: zamiana # na pusty ciąg znaków

        /* run thisApp.activatePage with that id */
        app.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  }

}

export default Home;
