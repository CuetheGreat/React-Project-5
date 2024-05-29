import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import NavigationBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavigationBar />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
);
