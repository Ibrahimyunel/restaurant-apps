import datas from '../DATA.json';

export default class FoodList {
  constructor() {
    this.foodListWrapper = document.getElementById('food_list');
    this.foodList = datas.restaurants;
  }

  showData = () => {
    for (const data of this.foodList) {
      this.foodListWrapper.innerHTML
      += `<section>
        <img src="${data.pictureId}" alt="">
        <div class="caption">
            <div tabindex="0">
                <h3>${data.name}</h3>
                <p>${data.city} ⭐${data.rating}</p>
            </div>
            <div class="btn-wrapper">
                    <input aria-label="add to favorite button" class="btn-size" type="image" src="./icons/love.svg">
                    <button aria-label="See restaurant button" class="btn">See</button>
            </div>
        </div>
      </section>`;
    }
  };
}
