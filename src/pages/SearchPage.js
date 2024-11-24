import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { sanctionsData } from '../data/sanctions';
import '../styles/pages/SearchPage.scss';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const searchResults = Object.entries(sanctionsData).flatMap(([categoryId, category]) =>
    category.items
      .filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.products.some((product) => product.toLowerCase().includes(query))
      )
      .map((item) => ({
        ...item,
        categoryId,
        categoryTitle: category.title,
        categoryIcon: category.icon,
      }))
  );

  return (
    <div className="search-page">
      <div className="container">
        <h1 className="search-page__title">
          Результаты поиска: {query}
        </h1>
        <p className="search-page__count">
          Найдено результатов: {searchResults.length}
        </p>

        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="search-result-item">
                <div className="search-result-item__category">
                  <Link to={`/category/${item.categoryId}`}>
                    <span className="category-icon">{item.categoryIcon}</span>
                    {item.categoryTitle}
                  </Link>
                </div>
                <h2 className="search-result-item__title">{item.name}</h2>
                <p className="search-result-item__description">{item.description}</p>
                <div className="search-result-item__products">
                  {item.products.map((product) => (
                    <span key={product} className="product-tag">
                      {product}
                    </span>
                  ))}
                </div>
                <div className="search-result-item__alternatives">
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
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>По вашему запросу ничего не найдено</p>
              <p>Попробуйте изменить поисковый запрос</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
