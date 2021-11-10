import localStorageValue from './localStorageValue';

const emptyState = {};


const persistState = key => {
  const { get, set } = localStorageValue(key);

  return {
    initialState: get() || emptyState,

    persistStateMiddleware: store => next => action => {
      const result = next(action);

      set(store.getState());

      return result;
    },
  };
};

export default persistState;