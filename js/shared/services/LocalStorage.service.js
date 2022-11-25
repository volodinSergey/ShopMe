const LocalStorageService = {
    get: item => JSON.parse(localStorage.getItem(item)),

    set: (item, valueToAdd) => localStorage.setItem(item, JSON.stringify(valueToAdd))
}

export default LocalStorageService