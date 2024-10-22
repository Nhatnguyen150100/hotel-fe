import { createBrowserRouter } from 'react-router-dom';
import DEFINE_ROUTE from '../constants/route-mapper';
import TheLayout from '../components/layout/TheLayout';
import TheLandingPage from '../modules/TheLandingPage';

const router = createBrowserRouter([
  {
    path: DEFINE_ROUTE.home,
    Component: TheLayout,
    children: [
      {
        index: true,
        element: <TheLandingPage />
      }
    ]
  }
]);

export default router;
