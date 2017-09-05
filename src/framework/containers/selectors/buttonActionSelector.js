const getButtonActions = state => state.ButtonActionsReducer;

export const getActionByType = (type, state) =>
    getButtonActions(state).OVERRIDE || getButtonActions(state)[type];
