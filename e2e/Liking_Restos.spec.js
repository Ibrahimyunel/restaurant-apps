const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('like and unlike one resto', async ({ I }) => {
  I.seeElement('.caption h3');

  const firstRestoTitle = locate('.caption h3').first();
  const getFirstRestoTitle = await I.grabTextFrom(firstRestoTitle);

  const detailRestoBtn = locate('.btn-wrapper a').first();
  I.click(detailRestoBtn);

  const likeRestoBtn = '[aria-label="add to favorite button"]';
  I.waitForElement(likeRestoBtn, 2);
  I.seeElement(likeRestoBtn);
  I.click(likeRestoBtn);

  I.amOnPage('/#/favorite');
  const getRestoTitleInDetail = await I.grabTextFrom('.caption h3');
  assert.strictEqual(getFirstRestoTitle, getRestoTitleInDetail);

  // Unlike Resto Process
  I.seeElement(detailRestoBtn);
  I.click(detailRestoBtn);

  const unlikeRestoBtn = '[aria-label="delete from favorite button"]';
  I.waitForElement(unlikeRestoBtn, 4);
  I.seeElement(unlikeRestoBtn);
  I.click(unlikeRestoBtn);

  I.amOnPage('/#/favorite');
  I.dontSeeElement('Detail', '.btn-wrapper a.btn');
});
