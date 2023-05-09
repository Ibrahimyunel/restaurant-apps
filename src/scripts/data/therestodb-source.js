import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
