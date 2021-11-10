const localStorageValue = key => ({
    get: () => JSON.parse(localStorage.getItem(key)),
    set: value => {
      if (!value) {
        localStorage.clear();
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
  });
  
  export default localStorageValue;