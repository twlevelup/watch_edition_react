import history from '../Router/BrowserHistory';
import ButtonAction from './ButtonAction';

jest.mock('../Router/BrowserHistory');
history.push = jest.fn();
document.querySelector = jest.fn();

describe('ButtonAction ', () => {
  let scrollTopObj;
  beforeEach(() => {
    scrollTopObj = { scrollTop: 0 };
    document.querySelector = jest.fn(() => {
      return scrollTopObj;
    });
  });

  beforeEach(() => {
    history.push.mockClear();
    document.querySelector.mockClear();
  });

  describe('goToPage', () => {
    test('it should call the BrowserHistory.push method', () => {
      ButtonAction.goToPage('/');
      expect(history.push).toBeCalledWith('/');
    });
  });

  describe('scrollUp', () => {
    describe('When called with an offset value', () => {
      test('it should scroll element up by changing its offset scrollTop value', () => {
        ButtonAction.scrollUp('testElm', 80);
        expect(document.querySelector).toBeCalledWith('testElm');
        expect(document.querySelector().scrollTop).toBe(-80);
      });
    });

    describe('When called without an offset value', () => {
      test('it should scroll element up by changing its offset scrollTop by -70', () => {
        ButtonAction.scrollUp('testElm5');
        expect(document.querySelector).toBeCalledWith('testElm5');
        expect(document.querySelector().scrollTop).toBe(-70);
      });
    });
  });


  describe('scrollDown', () => {
    describe('When called with an offset value', () => {
      test('it should scroll element down by changing its offset scrollTop value', () => {
        ButtonAction.scrollDown('testElm2', 80);
        expect(document.querySelector).toBeCalledWith('testElm2');
        expect(document.querySelector().scrollTop).toBe(80);
      });
    });

    describe('When called without an offset value', () => {
      test('it should scroll element down by changing its offset scrollTop by -70', () => {
        ButtonAction.scrollDown('testElm3');
        expect(document.querySelector).toBeCalledWith('testElm3');
        expect(document.querySelector().scrollTop).toBe(70);
      });
    });
  });
});

