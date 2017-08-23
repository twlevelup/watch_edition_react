import Scroll from 'react-scroll';
import history from '../Router/BrowserHistory';

const ButtonAction = () => {
  return {
    goToPage: (pagePath) => {
      history.push(pagePath);
      Scroll.animateScroll.scrollToTop({ containerId: 'watch-screen', duration: 0 });
    },

    scrollUp: (offset = 70) => {
      Scroll.animateScroll.scrollMore(-offset, { containerId: 'watch-screen', duration: 0 });
    },
    scrollDown: (offset = 70) => {
      Scroll.animateScroll.scrollMore(offset, { containerId: 'watch-screen', duration: 0 });
    },
    doNothing: () => {},
  };
};

export default ButtonAction();
