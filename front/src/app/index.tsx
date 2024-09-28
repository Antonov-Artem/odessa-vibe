import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { router } from './router';
import 'material-symbols/outlined.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
