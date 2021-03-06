import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import NoData from '../../../components/common/NoData';
import SeriesByTitleView from '../../../containers/Library/SeriesByTitleView';
import { Card } from 'react-bootstrap';
import Loading from '../../../components/common/Loading';
import LibraryNav from '../../../components/Library/LibraryNav';
import Paginator from '../../../components/common/Paginator';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockStore = configureMockStore([thunk]);

const mountRender = (store, props) => {
  return mount(
    <Provider store={store}>
      <SeriesByTitleView {...props} />
    </Provider>
  );
};

const mockGetAllSeries = jest.fn();

jest.mock('axios');
jest.mock('../../../actions/library.js', () => ({
  ...jest.requireActual('../../../actions/library.js'),
  getAllSeries: () => mockGetAllSeries,
}));

describe('<SeriesByTitleView /> in loading phase', () => {
  let store, props, wrapper;
  beforeEach(() => {
    store = mockStore({
      auth: {
        token: null,
      },
      library: {
        series_list: undefined,
      },
      ui: {
        card_break_size: 4,
      },
    });
    props = {
      getAllSeries: mockGetAllSeries,
      setCurrentSeries: jest.fn(),
      match: {
        params: {
          page_number: 1,
        },
      },
    };
  });

  it('Should render Loading', () => {
    wrapper = mountRender(store, props);
    expect(wrapper.containsMatchingElement(Loading)).toBe(true);
  });
});

describe('<SeriesByTitleView /> with no data', () => {
  let store, props, wrapper;
  beforeEach(() => {
    store = mockStore({
      auth: {
        token: null,
      },
      library: {
        series_list: [],
      },
      ui: {
        card_break_size: 4,
      },
    });
    props = {
      getAllSeries: mockGetAllSeries,
      setCurrentSeries: jest.fn(),
      match: {
        params: {
          page_number: 1,
        },
      },
    };
  });

  it('Should render NoData', () => {
    wrapper = mountRender(store, props);
    expect(wrapper.containsMatchingElement(NoData)).toBe(true);
  });
});

describe('<SeriesByTitleView /> with data', () => {
  let store, props, wrapper;
  beforeEach(() => {
    store = mockStore({
      auth: {
        token: null,
      },
      library: {
        series_list: [
          {
            id: 1,
            series_title: 'test series',
            series_author: 'test author',
            series_artist: 'test_artist',
            series_cover_image: '',
            series_genres: '',
            complete: true,
            volumes: [],
          },
        ],
      },
      ui: {
        card_break_size: 4,
      },
    });
    props = {
      getAllSeries: jest.fn(),
      setCurrentSeries: jest.fn(),
      match: {
        params: {
          page_number: 1,
        },
      },
    };
  });

  it('Should render NoData', () => {
    wrapper = mountRender(store, props);
    expect(
      wrapper.containsAllMatchingElements([LibraryNav, Card, Paginator])
    ).toBe(true);
  });
});
