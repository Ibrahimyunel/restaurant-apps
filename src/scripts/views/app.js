import { Navbar, NavResponsive } from '../handler/navbar';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

const navbarObj = new Navbar();
const navbarResObj = new NavResponsive();

class App {
  constructor() {
    this._content = document.querySelector('.mainContent');
    this._initialAppShell();
  }

  _initialAppShell() {
    navbarObj.onScroll();
    navbarResObj.onResize();
  }

  _skipContent() {
    const skipContentBtn = document.querySelector('.skip-content');
    skipContentBtn.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('.mainContent').focus();
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    this._skipContent();
  }
}

export default App;
