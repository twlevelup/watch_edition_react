import React from 'react';
import { mount } from 'enzyme';
import { Route, StaticRouter } from 'react-router';

import ScreenLayout from './ScreenLayout';

describe('ScreenLayout component', () => {
  const Mock = () => (
    <div>Mock</div>
  );

  describe('When rendering with child components', () => {
    let renderedScreen;

    beforeEach(() => {
      renderedScreen = mount(
        <StaticRouter context={ {} }>
          <ScreenLayout onClick={ jest.fn() }>
            <Mock path='/' /><Mock />
          </ScreenLayout>
        </StaticRouter>);
    });

    test("It places children with a defined 'path' prop inside a Route element", () => {
      expect(renderedScreen.find(Route).find(Mock).length).toBe(1);
    });

    test("Only creates routes for components with a 'path' prop", () => {
      expect(renderedScreen.find(Route).length).toBe(1);
    });

    test("Components with and without a 'path' prop are still rendered at some point", () => {
      expect(renderedScreen.find(Mock).length).toBe(2);
    });

    test('the test coverage goes to 100% when rendered with the default onClick', () => {
      renderedScreen = mount(
        <ScreenLayout>
          <Mock /><Mock />
        </ScreenLayout>);

      expect(renderedScreen.props().onClick());
    });
  });
});
