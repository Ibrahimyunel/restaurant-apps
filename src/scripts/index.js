import 'regenerator-runtime';
import '../styles/style.scss';
import { Navbar, NavResponsive } from './navbar';
import FoodList from './food-list';
import swRegister from './utils/sw-register';

swRegister();

const navbarObj = new Navbar();
navbarObj.onScroll();

const navbarResObj = new NavResponsive();
navbarResObj.onResize();

const foodListObj = new FoodList();
foodListObj.showData();
