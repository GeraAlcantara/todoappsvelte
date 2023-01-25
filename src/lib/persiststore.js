// persited data store on local storage
import { writable } from "svelte/store";

export const persitStore = (key, startValue) => {
  const persist = localStorage.getItem(key);
  const data = persist ? JSON.parse(persist) : startValue;
  const store = writable(data, () => {
    const unsuscribe = store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
    return unsuscribe;
  });
  return store;
};
