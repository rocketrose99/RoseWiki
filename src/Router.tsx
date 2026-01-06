import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './pages/About.page';
import { WorkExperience } from './pages/WorkExperience.page';
import { Contact } from './pages/Contact.page';
import { Home } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/work-experience',
    element: <WorkExperience />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
