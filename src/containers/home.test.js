import React from 'react';
import { shallow } from 'enzyme';
import Home, { Loading, Error } from './home';
import News from './components/News';

describe('Home Page Test', () => {
  it('should renders News correctly', () => {
    const props = {
      newsFeed: { loading: false, newsfeed: [], error: null },
      loadNews: () => {},
    };
    const tree = shallow(<Home.WrappedComponent {...props} />);
    expect(tree).toMatchSnapshot();
    expect(tree.containsMatchingElement(<News />)).toEqual(true);
  });

  it('should renders Loading when APi is loading', () => {
    const props = {
      newsFeed: { loading: true, newsfeed: [], error: null },
      loadNews: () => {},
    };
    const tree = shallow(<Home.WrappedComponent {...props} />);
    //expect(tree).toMatchSnapshot();
    expect(tree.containsMatchingElement(<Loading />)).toEqual(true);
  });

  it('should renders Error when APi is failed to load data', () => {
    const props = {
      newsFeed: { loading: false, newsfeed: [], error: 'Failed to load' },
      loadNews: () => {},
    };
    const tree = shallow(<Home.WrappedComponent {...props} />);
    //expect(tree).toMatchSnapshot();
    expect(tree.containsMatchingElement(<Error />)).toEqual(true);
  });
});
