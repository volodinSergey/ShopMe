// When you visit this site for the first time, empty cart array will be created in your local storage

if (localStorage.getItem('cart') === null) localStorage.setItem('cart', JSON.stringify([]))