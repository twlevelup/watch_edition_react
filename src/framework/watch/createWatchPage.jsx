import React, { Component } from 'react';

import WatchPage from './WatchPage';

const mapObjectValues = (object, func) => (
  Object.keys(object).reduce((newObject, key) => (
    { ...newObject, [key]: func(object[key]) }
  ), {})
);

const createWatchPage = (actions, initalPageState = {}) => (
  PageComponent => ((props) => {
    class PageWrapper extends Component {
      constructor(p) {
        super(p);
        this.state = { pageState: initalPageState };
        this.updatePageState = this.updatePageState.bind(this);
      }
      updatePageState(newState) {
        this.setState({ pageState: newState });
      }
      render() {
        const { pageState } = this.state;
        const boundActions = mapObjectValues(actions, action => action(pageState, this.updatePageState, this.props));
        return (
          <WatchPage actions={ boundActions } >
            <PageComponent { ...props } pageState={ pageState } />
          </WatchPage>
        );
      }
    }

    return <PageWrapper { ...props } />;
  })
);


export default createWatchPage;
