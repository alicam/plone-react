import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import { AddComponent as Add } from './Add';

const mockStore = configureStore();

jest.mock('../Form/Form', () => jest.fn(() => <div className="Form" />));

describe('Add', () => {
  it('renders an empty add component', () => {
    const store = mockStore({
      schema: {
        schema: null,
      },
      content: {
        data: {},
        add: {
          loading: false,
          loaded: true,
        },
      },
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <Add location={{ pathname: '/blog', query: { type: 'Document' } }} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders an add component', () => {
    const store = mockStore({
      schema: {
        schema: {
          some: 'field',
        },
      },
      content: {
        data: {},
        add: {
          loading: false,
          loaded: true,
        },
      },
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <Add location={{ pathname: '/blog', query: { type: 'Document' } }} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
