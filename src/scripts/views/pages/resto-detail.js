import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const RestoDetail = {
  async render() {
    return `
      <div class="content" id="resto_detail_container">
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRestoDbSource.restoDetail(url.id);
    const RestoDetailContainer = document.querySelector('#resto_detail_container');
    RestoDetailContainer.innerHTML = createRestoDetailTemplate(detail);
  },
};

export default RestoDetail;
