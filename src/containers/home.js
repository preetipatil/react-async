import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadNews } from '../action-creators/news';
import News from './components/News';

export function Loading() {
  return <h1>LOADING</h1>;
}

export function Error() {
  return <h1>ERROR IN LOADING DATA</h1>;
}

class Home extends React.Component {
  componentDidMount() {
    this.props.loadNews();
  }

  render() {
    const { newsfeed, error, loading } = this.props.newsFeed;
    // console.log('news', newsfeed);
    // console.log('error', error);
    // console.log('loading', loading);
    if (loading) {
      return <Loading />;
    } else if (error == null) {
      return <News news={newsfeed} />;
    } else {
      return <Error />;
    }
  }
}

const mapStateToProps = state => ({
  newsFeed: state.news,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadNews }, dispatch);

Home.propTypes = {
  loadNews: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
