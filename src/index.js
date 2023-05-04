import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Kegiatan from './pages/kegiatan/Kegiatan';
import Karya from './pages/karya/Karya';
import Mitra from './pages/mitra/Mitra';
import Galeri from './pages/galeri/Galeri';
import Pptik from './pages/pptik/Pptik';
import Peneliti from './pages/peneliti/Peneliti';
import Tentang from './pages/tentang/Tentang';
import Seminar, { Riset } from './pages/kegiatan/seminar/Seminar';
import SmartSystem from './pages/karya/smartsystem/SmartSystem';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "kegiatanpage",
    element: <Kegiatan />,
  },
  {
    path: "karyapage",
    element: <Karya />,
  },
  {
    path: "mitrapage",
    element: <Mitra />,
  },
  {
    path: "galeripage",
    element: <Galeri />,
  },
  {
    path: "pptikpage",
    element: <Pptik />,
  },
  {
    path: "penelitipage",
    element: <Peneliti />,
  },
  {
    path: "tentangpage",
    element: <Tentang />,
  },
  {
    path: "seminarpage",
    element: <Seminar />,
  },
  {
    path: "risetpage",
    element: <Riset />
  },
  {
    path: "smartpage",
    element: <SmartSystem />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
