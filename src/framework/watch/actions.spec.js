import * as actions from './actions';

describe('actions', () => {
  describe('changePage', () => {
    let history;
    beforeEach(() => {
      history = { push: jest.fn() };
    });
    it('should create a action to change the page', () => {
      const goHome = actions.changePage('/home')({}, () => {}, { history });
      goHome();
      expect(history.push).toHaveBeenCalledWith('/home');
    });

    it('should create an action that changes based on the function passed', () => {
      const createPageRoute = pageState => `/page/${ pageState.number }`;
      const goToPage = actions.changePage(createPageRoute)({ number: 1 }, () => {}, { history });
      goToPage();
      expect(history.push).toHaveBeenCalledWith('/page/1');
    });
  });
  describe('changePageState', () => {
    it('should create an action that changes the page state', () => {
      const updateState = jest.fn();
      const state = 1;
      const addOne = actions.changePageState(oldState => oldState + 1)(state, updateState);

      addOne();

      expect(updateState).toHaveBeenCalledWith(2);
    });
  });
});
