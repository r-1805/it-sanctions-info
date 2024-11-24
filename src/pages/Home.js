import React from 'react';
import { Link } from 'react-router-dom';
import { sanctionsData } from '../data/sanctions';
import '../styles/pages/Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home__title">IT Санкции в России</h1>
        <p className="home__description">
          Актуальная информация о технологических санкциях, их влиянии на IT-сектор
          и доступные альтернативы
        </p>
        
        <div className="categories">
          {Object.entries(sanctionsData).map(([key, category]) => (
            <Link
              to={`/category/${key}`}
              key={key}
              className="category-card"
            >
              <div className="category-card__icon">{category.icon}</div>
              <h2 className="category-card__title">{category.title}</h2>
              <p className="category-card__description">{category.description}</p>
              <div className="category-card__items-count">
                {category.items.length} {category.items.length === 1 ? 'санкция' : 'санкций'}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
