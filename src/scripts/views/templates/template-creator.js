import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (detail) => {
  function restoDetailFoods() {
    const listContainer = document.querySelector('#foods_drinks_list');
    const menuTitle = document.querySelector('#menu_title');
    menuTitle.innerHTML = '<h2>Food Menu</h2>';
    listContainer.innerHTML = '';
    detail.menus.foods.forEach((item) => {
      listContainer.innerHTML += `<p class="menu-item" tabindex="0">${item.name}</p>`;
    });
  }

  function restoDetailDrinks() {
    const listContainer = document.querySelector('#foods_drinks_list');
    const menuTitle = document.querySelector('#menu_title');
    menuTitle.innerHTML = '<h2>Drink Menu</h2>';
    listContainer.innerHTML = '';
    detail.menus.drinks.forEach((item) => {
      listContainer.innerHTML += `<p class="menu-item">${item.name}</p>`;
    });
  }

  setTimeout(() => {
    document.getElementById('drinks_btn').addEventListener('click', restoDetailDrinks);
    document.getElementById('foods_btn').addEventListener('click', restoDetailFoods);
    restoDetailFoods();
  }, 500);
  return `
    <h1 tabindex="0">Restaurant Details</h1>
    <article class="resto-detail" id="resto_detail">
        <section>
            <img src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" alt="">
            <div class="caption">
                <div tabindex="0">
                    <h3>${detail.name}</h3>
                    <p>${detail.address}, ${detail.city} ⭐${detail.rating}</p>
                    <p class="description">${detail.description}</p>
                </div>
                <div class="btn-wrapper">
                    <input aria-label="add to favorite button" class="btn-size" type="image" src="./icons/love.svg">
                    <div class="menus-btn">
                      <button class="btn" id="foods_btn">🍽️Foods</button>
                      <button class="btn" id="drinks_btn">🧋drinks</button>
                    </div>
                </div>
            </div>
        </section>
    </article>
    <h2 id="menu_title" tabindex="0"></h2>
    <article class="container list" id="foods_drinks_list">

    </article>
  `;
};

const createRestoListTemplate = (resto) => `
  <section>
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="">
        <div class="caption">
            <div tabindex="0">
                <h3>${resto.name}</h3>
                <p>${resto.city} ⭐${resto.rating}</p>
            </div>
            <div class="btn-wrapper">
                <input aria-label="add to favorite button" class="btn-size" type="image" src="./icons/love.svg">
                <a aria-label="See restaurant button" class="btn" href="#/resto-detail/${resto.id}">Detail</a>
            </div>
        </div>
  </section>
  `;

export { createRestoListTemplate, createRestoDetailTemplate };
