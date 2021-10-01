
export const localStorageService = {
    saveToStorage,
    loadFromStorage,
    removeFromStorage
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}