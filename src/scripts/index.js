import 'regenerator-runtime';
import '../styles/style.scss';
import './component/jumbo-tron';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
