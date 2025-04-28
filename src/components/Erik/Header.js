import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header({ favoritesCount, cartCount, cartItemsCount, changeLanguage }) {
  const { t } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <header className="header">
      <div className="background_header"></div>

      <div className="container">
        <div className="top-bar">
          <div className="hamburgerMenu">
            <HamburgerMenu />
          </div>
          <div className="logo_two">
            <img src="/img/logo.png" alt="Logo" title="webIcon" />
          </div>

          <div className="first_flex">
            <div className="language-selector">
              <button onClick={toggleLanguageMenu}>Language</button>
              {showLanguageMenu && (
                <div className="language-menu">
                  <div className="language-option" onClick={() => changeLanguage('en')}>
                    <img src="/img/usa-flag.png" alt="USA Flag" />
                    <span>ENG</span>
                  </div>
                  <div className="language-option" onClick={() => changeLanguage('hy')}>
                    <img src="/img/armenia-flag.webp" alt="Armenia Flag" />
                    <span>ՀԱՅ</span>
                  </div>
                </div>
              )}
            </div>
            <div className="phone-icon">
              <img src="/img/call_icon.png" alt="Phone Icon" title="callIcon" />
              <span>+374 33-25-01-25</span>
            </div>
          </div>

          <div className="search_flex">
            <div className="search-bar">
              <input type="text" />
              <img className="search-icon" src="/img/search_icon.png" alt="Search Icon" title="SearchIcon" />
            </div>

            <div className="cart-info">
              <span>{cartCount} ֏</span>
            </div>
          </div>

          <div className="global_information_flex">
            <div className="buy_info">
              <img src="/img/buy_icon.png" alt="Buy Icon" title="buyIcon" />
              {cartItemsCount > 0 && (
                <span className="buy-count">{cartItemsCount}</span>
              )}
            </div>

            <div className="heart_info">
              <img src="/img/heart_icon.png" alt="Heart Icon" title="heartIcon" />
              {favoritesCount > 0 && (
                <span className="heart-count">{favoritesCount}</span>
              )}
            </div>

            <div className="user_info">
              <NavLink to="/register">
                <img src="/img/account_icon.png" alt="User Icon" title="userIcon" />
              </NavLink>
            </div>


            <div className="second_search">
              <img className="search-icon_two" src="/img/search_icon.png" alt="Search Icon" title="SearchIcon" />
            </div>
          </div>
        </div>

        <div className="logo">
          <NavLink to="/">
            <img src="/img/logo.png" alt="Logo" title="webIcon" />

          </NavLink>
        </div>
      </div>
      <div className="my_navbar">
        <ul>
          <li><NavLink to="/shops" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Խանութներ')}</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Մեր մասին')}</NavLink></li>
          <li><NavLink to="/therapy" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Թերապիա')}</NavLink></li>
          <li><NavLink to="/endodontics" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Էնդոդոնտիա')}</NavLink></li>
          <li><NavLink to="/orthopedics" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Օրթոպեդիա')}</NavLink></li>
          <li><NavLink to="/orthodontics" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Օրթոդոնտիա')}</NavLink></li>
          <li><NavLink to="/surgery" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Վիրաբուժություն/Պարոդոնտոլոգիա')}</NavLink></li>
          <li><NavLink to="/equipment" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Սարքավորումներ')}</NavLink></li>
          <li><NavLink to="/laboratory" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Լաբորատորիա')}</NavLink></li>
          <li><NavLink to="/books" className={({ isActive }) => (isActive ? 'active-link' : '')}>{t('Գրքեր')}</NavLink></li>
        </ul>
      </div>

    </header>
  );
}

export default Header;