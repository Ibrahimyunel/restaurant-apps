import LikeButtonHandler from '../../src/scripts/handler/like-button';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonHandlerWithResto = async (resto) => {
  await LikeButtonHandler.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};

export { createLikeButtonHandlerWithResto };