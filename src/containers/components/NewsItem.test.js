import React from 'react';
import { shallow } from 'enzyme';
import NewsItem from './NewsItem';

describe('NewsItems Component', () => {
  it('should render NewsItems correctly', () => {
    const props = {
      article: {
        author: 'BBC News',
        title: 'Japan braced for biggest typhoon in decades',
        description: 'Typhoon Hagibis could be the worst to hit Japan since 1958 when more than 1,200 people died.',
        url: 'http://www.bbc.co.uk/news/world-asia-50020108',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/78D2/production/_109203903_057241635.jpg',
      },
    };

    const treeWrapper = shallow(<NewsItem {...props} />);
    //expect(treeWrapper).toMatchSnapshot();
    //expect(treeWrapper.contains)).toEqual(true);
    //expect(treeWrapper.find('h3').length).toBe(1);
    expect(
      treeWrapper.containsAllMatchingElements([
        <p>Typhoon Hagibis could be the worst to hit Japan since 1958 when more than 1,200 people died.</p>,
        <img alt="" src="https://ichef.bbci.co.uk/news/1024/branded_news/78D2/production/_109203903_057241635.jpg" />,
        <h3>
          <a href="http://www.bbc.co.uk/news/world-asia-50020108">Japan braced for biggest typhoon in decades</a>
        </h3>,
      ])
    ).toEqual(true);
  });
});
