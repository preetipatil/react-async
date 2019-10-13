import React from 'react';

const NewsItem = ({ article }) => (
  <article>
    <div>
      <h3>
        <a href={article.url}>{article.title}</a>
      </h3>
      <img src={article.urlToImage} alt="" style={{ width: 300, height: 200 }} />
      <p>{article.description}</p>
    </div>
  </article>
);

export default NewsItem;
