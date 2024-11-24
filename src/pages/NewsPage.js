import React, { useState } from 'react';
import { newsData } from '../data/news';
import '../styles/pages/NewsPage.scss';

function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsData.news
    .filter(news => 
      (selectedCategory === 'all' || news.category === selectedCategory) &&
      (searchQuery === '' || 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.content.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="news-page">
      <div className="container">
        <h1 className="news-page__title">Новости и заявления</h1>
        
        <div className="news-filters">
          <div className="news-categories">
            <button 
              className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              🌐 Все новости
            </button>
            {newsData.categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
          
          <div className="news-search">
            <input
              type="text"
              placeholder="Поиск новостей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="news-search__input"
            />
          </div>
        </div>

        <div className="news-list">
          {filteredNews.map(news => (
            <article key={news.id} className="news-card">
              <div className="news-card__header">
                <span className="news-card__category">
                  {newsData.categories.find(c => c.id === news.category)?.icon}
                  {newsData.categories.find(c => c.id === news.category)?.name}
                </span>
                <time className="news-card__date">
                  {new Date(news.date).toLocaleDateString('ru-RU')}
                </time>
              </div>
              
              <h2 className="news-card__title">{news.title}</h2>
              <p className="news-card__description">{news.description}</p>
              
              <div className="news-card__content">
                {news.content}
              </div>
              
              <div className="news-card__footer">
                <div className="news-card__tags">
                  {news.tags.map(tag => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-card__source"
                >
                  Источник: {news.source}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
