import React, { useEffect, useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Header from './components/Erik/Header';
import FirstSection from './components/Erik/firstSection/FirstSection';
import SecondSection from './components/Erik/SecondSection/SecondSection';
import MapSection from './components/Erik/Map Section/MapSection';
import Footer from './components/Erik/Footer/Footer';

function App() {
  const { t, i18n } = useTranslation();
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0); 
  const [cartItemsCount, setCartItemsCount] = useState(0); 
  const [successMessage, setSuccessMessage] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const handleAddToFavorites = () => {
    setFavoritesCount((prev) => prev + 1);
  };

  const handleSetFavoritesCountHeader = (newCount) => {
    setFavoritesCount(newCount);
  };

  const handleAddToCart = (price) => {
    setCartCount((prev) => prev + price); 
    setCartItemsCount((prev) => prev + 1); 
    setSuccessMessage(t('Դուք հաջողությամբ ավելացրել եք ապրանքը զամբյուղի մեջ'));

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="App">
      <Header
        changeLanguage={changeLanguage}
        favoritesCount={favoritesCount}
        cartCount={cartCount} 
        cartItemsCount={cartItemsCount}
      />
      <FirstSection
        onAddToFavorites={handleAddToFavorites}
        onAddToCart={handleAddToCart}
      />
      <SecondSection 
        onAddToFavorites={handleAddToFavorites}
        onAddToCart={handleAddToCart}
        setFavoritesCountHeader={handleSetFavoritesCountHeader}
      />
      <MapSection />
      <Footer />

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default App;
