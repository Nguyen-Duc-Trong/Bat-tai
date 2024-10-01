import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './store/reducer';
import store from './store/store';

// const store = configureStore({ reducer });
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);



// // Lấy container nơi bạn muốn render ứng dụng
// const container = document.getElementById('root');

// // Khởi tạo root bằng createRoot
// const root = ReactDOM.createRoot(container!);

// // Render ứng dụng
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
