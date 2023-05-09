import RestoList from '../views/pages/resto-list';
import RestoDetail from '../views/pages/resto-detail';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/resto-detail/:id': RestoDetail,
};

export default routes;
