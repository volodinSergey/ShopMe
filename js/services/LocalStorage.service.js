const LocalStorageService = {
    get: name => JSON.parse(localStorage.getItem(name)),

    set: (name, value) => localStorage.setItem(name, JSON.stringify(value))
}

export default LocalStorageService