import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DrinksPage from '../containers/DrinkContainer';
import DrinkPage from '../components/DrinkPage';
import DrinkForm from '../components/DrinkForm/DrinkForm';
import LoginPage from '../containers/LoginContainer';
import UserProfilePage from '../components/UserProfile/UserProfile';
import Home from '../components/Home/Home';
import About from '../components/About/About';

const App = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='drinks/new' element={<DrinkForm />} />
        <Route path='drinks/:slug' element={<DrinkPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign_up' element={<LoginPage />} />
        <Route path='profile' element={<UserProfilePage />} />
      </Routes>
  );
};

export default App;
