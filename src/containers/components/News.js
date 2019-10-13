import React from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export function NoNews() {
  return <h3>No News Available...</h3>;
}

let News = ({ news }) => {
  if (news) {
    return news.map((article, index) => (
      <div key={`${index}`}>
        <NewsItem article={news[index]} />
      </div>
    ));
  } else {
    return <NoNews />;
  }
};

News.propTypes = {
  news: PropTypes.array,
};
export default News;
