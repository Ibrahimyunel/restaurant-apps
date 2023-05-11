import RestoList from '../views/pages/resto-list';
import RestoDetail from '../views/pages/resto-detail';
import RestoFavorite from '../views/pages/resto-favorite';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/resto-detail/:id': RestoDetail,
  '/favorite': RestoFavorite,
};

export default routes;
