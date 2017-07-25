import history from '../Router/BrowserHistory';

const ButtonAction = () => {
  return {
    goToPage: (pagePath) => {
      history.push(pagePath);
    },
    scrollUp: (querySelector, offset = 70) => {
      document.querySelector(querySelector).scrollTop -= offset;
    },
    scrollDown: (querySelector, offset = 70) => {
      document.querySelector(querySelector).scrollTop += offset;
    },
  };
};

export default ButtonAction();
