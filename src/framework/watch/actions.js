export const changePage = (location) =>
  (pageState, updatePageState, props) => {
    const loc = typeof location === 'function' ? location(pageState) : location;
    return () => props.history.push(loc);
  };

