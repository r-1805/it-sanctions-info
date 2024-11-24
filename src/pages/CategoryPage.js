import React from 'react';
import { useParams } from 'react-router-dom';
import { sanctionsData } from '../data/sanctions';
import '../styles/pages/CategoryPage.scss';

function CategoryPage() {
  const { categoryId } = useParams();
  const category = sanctionsData[categoryId];

  if (!category) {
    return <div className="container">Категория не найдена</div>;
  }

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <span className="category-header__icon">{category.icon}</span>
          <h1 className="category-header__title">{category.title}</h1>
        </div>
        <p className="category-description">{category.description}</p>

        <div className="sanctions-list">
          {category.items.map((item) => (
            <div key={item.id} className="sanction-item">
              <h2 className="sanction-item__title">{item.name}</h2>
              <div className="sanction-item__products">
                <strong>Затронутые продукты:</strong>
                <div className="tags">
                  {item.products.map((product) => (
                    <span key={product} className="tag">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              <p className="sanction-item__description">
                <strong>Описание:</strong> {item.description}
              </p>
              <p className="sanction-item__impact">
                <strong>Влияние:</strong> {item.impact}
              </p>
              <div className="sanction-item__alternatives">
                <strong>Альтернативы:</strong>
                <div className="alternatives-list">
                  {item.alternatives.map((alt) => (
                    <a
                      key={alt.name}
                      href={alt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="alternative-link"
                    >
                      {alt.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="sanction-item__date">
                Дата введения: {new Date(item.date).toLocaleDateString('ru-RU')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
