import Home from '../client/components/Home';
import AllBooks from '../client/components/AllBooks';
import Dashboard from '../client/components/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/allbooks',
    exact: true,
    component: AllBooks,
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
];

export default routes;
