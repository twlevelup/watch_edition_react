import Scroll from 'react-scroll';
import history from '../Router/BrowserHistory';
import ButtonAction from './ButtonAction';

jest.mock('../Router/BrowserHistory');
history.push = jest.fn();
Scroll.animateScroll.scrollMore = jest.fn();
Scroll.animateScroll.scrollToTop = jest.fn();
const options = { 'containerId': 'watch-screen', 'duration': 0 };
describe('ButtonAction ', () => {
  beforeEach(() => {
    history.push.mockClear();
    Scroll.animateScroll.scrollMore.mockClear();
    Scroll.animateScroll.scrollToTop.mockClear();
  });

  describe('goToPage', () => {
    test('it should call the BrowserHistory.push method', () => {
      ButtonAction.goToPage('/');
      expect(history.push).toBeCalledWith('/');
    });
    test('it should scroll to the top of the page', () => {
      ButtonAction.goToPage('/');
      expect(Scroll.animateScroll.scrollToTop).toBeCalled();
    });
  });

  describe('scrollUp', () => {
    describe('When called with an offset value', () => {
      test('it should scroll element up by its offset value', () => {
        ButtonAction.scrollUp(80);
        expect(Scroll.animateScroll.scrollMore).toBeCalledWith(-80, options);
      });
    });

    describe('When called without an offset value', () => {
      test('it should scroll element up by 70', () => {
        ButtonAction.scrollUp();
        expect(Scroll.animateScroll.scrollMore).toBeCalledWith(-70, options);
      });
    });
  });

  describe('scrollDown', () => {
    describe('When called with an offset value', () => {
      test('it should scroll element down by its offset value', () => {
        ButtonAction.scrollDown(80);
        expect(Scroll.animateScroll.scrollMore).toBeCalledWith(80, options);
      });
    });

    describe('When called without an offset value', () => {
      test('it should scroll element down by 70', () => {
        ButtonAction.scrollDown();
        expect(Scroll.animateScroll.scrollMore).toBeCalledWith(70, options);
      });
    });
  });
  describe('doNothing', () => {
    it('should be a function', () => {
      ButtonAction.doNothing();
    });
  });
});
