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

    delete: id => {
        let cart = JSON.parse(localStorage.getItem('cart'))

        const cartWithoutDeletedProduct = cart.filter(item => item.id !== id)

        cart = [...cartWithoutDeletedProduct]

        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export default CartService