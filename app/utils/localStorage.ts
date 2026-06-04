export const setLocalStorage = (key: string, value: any): void => {
  if (!import.meta.client) return

  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
  if (!import.meta.client) return null

  const item = localStorage.getItem(key)
  if (!item) return null

  return JSON.parse(item);
}

export const removeLocalStorage = (key: string): void => {
  if (!import.meta.client) return
  localStorage.removeItem(key)
}