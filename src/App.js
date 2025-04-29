import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Header from './components/Erik/Header';
import FirstSection from './components/Erik/firstSection/FirstSection';
import SecondSection from './components/Erik/SecondSection/SecondSection';
import MapSection from './components/Erik/Map Section/MapSection';
import Footer from './components/Erik/Footer/Footer';
import AboutUs from './components/Erik/AboutUs/AboutUs';
import Registration from './components/Erik/Registration/Registration';
import ShopSection from './components/Erik/ShopSection/ShopSection';

function App() {
  const { t, i18n } = useTranslation();
  const [favorites, setFavorites] = useState([]);  // Для хранения избранных товаров
  const [cartCount, setCartCount] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const handleAddToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === product.id)) {
        return prevFavorites;  // Если товар уже в избранном, не добавляем его снова
      }
      return [...prevFavorites, product];
    });
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
    <Router>
      <div className="App">
        <Header
          changeLanguage={changeLanguage}
          favoritesCount={favorites.length}  
          cartCount={cartCount}
          cartItemsCount={cartItemsCount}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <FirstSection
                  onAddToFavorites={handleAddToFavorites}
                  onAddToCart={handleAddToCart}
                />
                <SecondSection
                  onAddToFavorites={handleAddToFavorites}
                  onAddToCart={handleAddToCart}
                />
                <MapSection />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shops" element={<ShopSection onAddToCart={handleAddToCart} onAddToFavorites={handleAddToFavorites} />} />
          <Route path="/register" element={<Registration />} />
        </Routes>

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
