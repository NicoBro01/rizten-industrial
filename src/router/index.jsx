import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ChiSiamo from '../pages/ChiSiamo';
import Servizi from '../pages/Servizi';
import PosizioniAperte from '../pages/PosizioniAperte';
import Contatti from '../pages/Contatti';
import PrivacyPolicy from '../pages/PrivacyPolicy';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'chi-siamo', element: <ChiSiamo /> },
        { path: 'servizi', element: <Servizi /> },
        { path: 'posizioni-aperte', element: <PosizioniAperte /> },
        { path: 'contatti', element: <Contatti /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
