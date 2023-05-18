import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () =>  {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1});
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });
    const unlikeRestoBtn = document.querySelector('[aria-label="delete from favorite button"]');
    expect(unlikeRestoBtn).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });
    const likeRestoBtn = document.querySelector('[aria-label="add to favorite button"]');
    expect(likeRestoBtn).toBeFalsy();
  });
  
  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });
    const unlikeRestoBtn = document.querySelector('[aria-label="delete from favorite button"]');
    unlikeRestoBtn.dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
  
  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonHandlerWithResto({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);
    const unlikeRestoBtn = document.querySelector('[aria-label="delete from favorite button"]');
    unlikeRestoBtn.dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});