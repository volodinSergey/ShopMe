const renderCartItemTemplate = (imageUrl, title) => (
    `
     <img class="cart-list__item-image" src=${imageUrl} alt="good in cart">
     <h4 class="cart-list__item-title">${title}</h4>
     <button class="cart-list__item-delete">delete</button>
    `
)

export default renderCartItemTemplate