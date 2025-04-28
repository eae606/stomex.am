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
    <Router>
      <div className="App">
        <Header
          changeLanguage={changeLanguage}
          favoritesCount={favoritesCount}
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
                  setFavoritesCountHeader={handleSetFavoritesCountHeader}
                />
                <MapSection />
                <Footer />
              </>
            }
          />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/shops" element={<div style={{ padding: "100px" }}>Խանութներ Էջ</div>} />
          <Route path="/therapy" element={<div style={{ padding: "100px" }}>Թերապիա Էջ</div>} />
          <Route path="/endodontics" element={<div style={{ padding: "100px" }}>Էնդոդոնտիա Էջ</div>} />
          <Route path="/orthopedics" element={<div style={{ padding: "100px" }}>Օրթոպեդիա Էջ</div>} />
          <Route path="/orthodontics" element={<div style={{ padding: "100px" }}>Օրթոդոնտիա Էջ</div>} />
          <Route path="/surgery" element={<div style={{ padding: "100px" }}>Վիրաբուժություն/Պարոդոնտոլոգիա Էջ</div>} />
          <Route path="/equipment" element={<div style={{ padding: "100px" }}>Սարքավորումներ Էջ</div>} />
          <Route path="/laboratory" element={<div style={{ padding: "100px" }}>Լաբորատորիա Էջ</div>} />
          <Route path="/books" element={<div style={{ padding: "100px" }}>Գրքեր Էջ</div>} />
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
