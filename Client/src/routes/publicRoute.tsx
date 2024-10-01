import RoutesProps from '@/interface/route';
import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/views/page/client/Home';
import ProductDetails from '@/views/page/client/ProductDetails';

const publicRoute: RoutesProps[] = [
  {
    path: '/',
    layout: DefaultLayout,
    page: Home,
  },
  {
    path: '/product_detail',
    layout: DefaultLayout,
    page: ProductDetails,
  },
  {
    path: '/product',
    layout: DefaultLayout,
    page: () => 'day la trang san pham',
  },
];
export default publicRoute;
