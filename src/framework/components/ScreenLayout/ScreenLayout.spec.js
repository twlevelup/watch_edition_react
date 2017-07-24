import React from 'react';
import { mount, shallow } from 'enzyme';
import { Route, StaticRouter } from 'react-router-dom';

import ScreenLayout from './ScreenLayout';

describe('ScreenLayout component', () => {
  class Mock extends React.Component {
    render() {
      return <div>Mock</div>;
    }
  }

  describe('When rendering with child components', () => {
    let renderedScreen;
    let handlerMapperFn;

    beforeEach(() => {
      handlerMapperFn = jest.fn();
      renderedScreen = mount(
        <StaticRouter context={ {} }><ScreenLayout><Mock path='/' /><Mock /></ScreenLayout></StaticRouter>);
    });

    describe('injectHandlerMap function', () => {
      test('It should attach the handler mapper to the given component', () => {
        const result = shallow(
          <ScreenLayout handlerMapper={ handlerMapperFn }>
            <Mock path='/' /><Mock />
          </ScreenLayout>
        );
        expect(result.instance().injectHandlerMap(<Mock />).props.handlerMapper).toBeDefined();
        result.instance().injectHandlerMap(<Mock />).props.handlerMapper();
        expect(handlerMapperFn).toHaveBeenCalled();
      });
    });

    test('It should a have default handlerMapper attached to children components', () => {
      const result = shallow(
        <ScreenLayout>
          <Mock path='/' /><Mock />
        </ScreenLayout>
      );
      expect(result.instance().injectHandlerMap(<Mock />).props.handlerMapper).toBeDefined();
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
  });
});
