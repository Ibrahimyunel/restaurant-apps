import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonHandler from '../../handler/like-button';

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

    setTimeout(() => {
      LikeButtonHandler.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: detail.id,
          name: detail.name,
          city: detail.city,
          rating: detail.rating,
          pictureId: detail.pictureId,
        },
      });
    }, 800);
  },
};

export default RestoDetail;
