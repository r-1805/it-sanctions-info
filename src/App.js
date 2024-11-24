import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import NewsPage from './pages/NewsPage';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
