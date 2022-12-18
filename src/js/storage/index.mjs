
/**
 * Saves the given key-value pair to the local storage.
 * @param {string} key - The key to be saved.
 * @param {string} value - The value to be saved.
 */
 export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loads the value for the given key from the local storage.
 * @param {string} key - The key whose value is to be retrieved.
 * @returns {string} The value for the given key, or null if the key is not found.
 */
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
