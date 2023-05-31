export const setLocalStorage = (name: string, value: never) => localStorage.setItem(name, value)

export const getLocalStorage = (name: string) =>
  localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name) || '') : null
