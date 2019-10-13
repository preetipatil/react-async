import React from 'react';
import { REQUEST_LOADED, REQUEST_LOADING, REQUEST_FAILED_TO_LOAD } from './action-types';
import * as actions from './news';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('News Action Creator Test', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates REQUEST_LOADED when fetching todos has been done', () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [{ type: REQUEST_LOADING }, { type: REQUEST_LOADED, body: { todos: ['do something'] } }];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.loadNews()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
