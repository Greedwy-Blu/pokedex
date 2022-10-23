import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';
import {RecoilRoot} from "recoil"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);

reportWebVitals();
