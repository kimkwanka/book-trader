import Home from '../client/components/Home';
import BookTrading from '../client/components/BookTrading';
import Dashboard from '../client/components/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/booktrading',
    exact: true,
    component: BookTrading,
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
];

export default routes;
