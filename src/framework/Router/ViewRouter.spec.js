import React from 'react';
import { shallow } from 'enzyme';
import ViewRouter from './ViewRouter';
import BrowserHistory from './BrowserHistory';

describe('ViewRouter component', () => {
  class MockChild extends React.Component {
    render() {
      return <div>Mock</div>;
    }
  }
  const componentWrapper = shallow(
    <ViewRouter>
      <MockChild />
      <MockChild />
      <MockChild />
    </ViewRouter>
  );

  test('it should Router component with a global BrowserHistory object', () => {
    expect(componentWrapper.props().history).toBe(BrowserHistory);
  });

  describe('When rendering with children components ', () => {
    test('it should list them as children of ScreenLayout component', () => {
      expect(componentWrapper.find('MockChild')).toHaveLength(3);
    });
  });
});
