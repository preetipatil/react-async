import news from './news';
import { REQUEST_LOADED, REQUEST_LOADING, REQUEST_FAILED_TO_LOAD } from '../action-creators/action-types';

describe('News reducer', () => {
  const newsFeedData = [
    {
      author: 'BBC News',
      title: 'Japan braced for biggest typhoon in decades',
      description: 'Typhoon Hagibis could be the worst to hit Japan since 1958 when more than 1,200 people died.',
      url: 'http://www.bbc.co.uk/news/world-asia-50020108',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/78D2/production/_109203903_057241635.jpg',
    },
  ];

  it('should set newsFeed on news API loaded', () => {
    expect(
      news([], {
        type: REQUEST_LOADED,
        data: newsFeedData,
      }).newsfeed
    ).toEqual(newsFeedData);
  });

  it('should set loading false when messages API loaded', () => {
    expect(
      news([], {
        type: REQUEST_LOADED,
        data: newsFeedData,
      }).loading
    ).toEqual(false);
  });

  it('should set loading when messages API Loading', () => {
    let actual = news([], { type: REQUEST_LOADING }).loading;
    expect(actual).toBe(true);
  });

  it('should set error message and loading flag false when message api failed to load', () => {
    let actual = news([], { type: REQUEST_FAILED_TO_LOAD, error: 'Failed to Load' });
    expect(actual.error).toBe('Failed to Load');
    expect(actual.loading).toBe(false);
  });
});
