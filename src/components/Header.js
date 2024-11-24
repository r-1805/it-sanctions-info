import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Header.scss';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          IT Санкции
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__nav-link">Главная</Link>
          <Link to="/news" className="header__nav-link">Новости</Link>
        </nav>
        <form className="header__search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Поиск санкций..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="header__search-input"
          />
          <button type="submit" className="header__search-button">
            Поиск
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
