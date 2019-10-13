import React from 'react';
import { shallow } from 'enzyme';
import News from './News';
import NewsItem from './NewsItem';
import { NoNews } from './News';

describe('News Component', () => {
  it('should render News Items correctly', () => {
    const props = {
      news: [
        {
          author: 'BBC News',
          title: 'Japan braced for biggest typhoon in decades',
          description: 'Typhoon Hagibis could be the worst to hit Japan since 1958 when more than 1,200 people died.',
          url: 'http://www.bbc.co.uk/news/world-asia-50020108',
          urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/78D2/production/_109203903_057241635.jpg',
        },
      ],
    };
    const treeWrapper = shallow(<News {...props} />);
    expect(treeWrapper).toMatchSnapshot();
    expect(treeWrapper.containsAnyMatchingElements([<NewsItem />])).toEqual(true);
  });

  it('should show NoNews when no news provided', () => {
    const props = {};
    const treeWrapper = shallow(<News {...props} />);
    //expect(treeWrapper).toMatchSnapshot();
    expect(treeWrapper.containsAnyMatchingElements([<NoNews />])).toEqual(true);
  });
});
