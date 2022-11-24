const CartService = {
    getAll: function () {
        const cartItems = JSON.parse(localStorage.getItem('cart'))

        return cartItems
    },

    add: newProduct => {
        const cart = JSON.parse(localStorage.getItem('cart'))

        cart.push(newProduct)

        localStorage.setItem('cart', JSON.stringify(cart))
    },

    get: name => JSON.parse(localStorage.getItem(name)),

    set: (name, value) => localStorage.setItem(name, JSON.stringify(value))
}

export default CartService