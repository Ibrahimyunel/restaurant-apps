import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => addLikeButtonContainer());

  it('should show the like button when the Resto has not been liked before', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite button"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the Resto has not been liked before', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="delete from favorite button"]')).toBeFalsy();
  });

  it('should be able to like the Resto', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const Resto = await FavoriteRestoIdb.getResto(1);

    expect(Resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a Resto again when its already liked', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a Resto when it has no id', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});