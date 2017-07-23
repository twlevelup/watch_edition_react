export const changePage = (location) =>
  (pageState, updatePageState, props) => {
    const loc = typeof location === 'string' ? location : location(pageState);
    return () => props.history.push(loc);
  };

