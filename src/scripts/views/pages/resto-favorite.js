import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoListTemplate } from '../templates/template-creator';

const RestoFavorite = {
  async render() {
    return `
      <div class="content">
        <h2 tabindex="0">My Favorite Restaurants</h2>
        <article class="container list" id="resto_favorites">
        </article>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#resto_favorites');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoListTemplate(resto);
    });
    if (!restos.length) {
      restosContainer.innerHTML = `
      <section>
        <h3 class="empty-msg">Kamu belum punya Favorite Restaurant!</h3>
      <section>
      `;
    }
  },
};

export default RestoFavorite;
