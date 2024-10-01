// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { Provider } from 'react-redux';
// // import { configureStore } from '@reduxjs/toolkit';
// // import reducer from './store/reducer';
// import store from './store/store';

// // const store = configureStore({ reducer });
// createRoot(document.getElementById('root')!).render(
//   <Provider store={store}>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </Provider>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

import store from './store/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

