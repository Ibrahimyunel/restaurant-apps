import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoListTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
      <div class="content">
        <jumbo-tron></jumbo-tron>
        <h2 id="restaurants" tabindex="0">Our Restaurants</h2>
        <article class="container list" id="resto_list">
        </article>
      </div>
    `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.restoList();
    const restosContainer = document.querySelector('#resto_list');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoListTemplate(resto);
    });
  },
};

export default RestoList;
