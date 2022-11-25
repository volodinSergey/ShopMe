import LocalStorageService from "../shared/services/LocalStorage.service.js"

const CartService = {
    getAll: () => {
        const cartItems = LocalStorageService.get('cart')

        return cartItems
    },

    add: newProduct => {
        const cart = LocalStorageService.get('cart')

        cart.push(newProduct)

        LocalStorageService.set('cart', cart)
    },

    delete: id => {
        let cart = LocalStorageService.get('cart')

        const cartWithoutDeletedProduct = cart.filter(item => item.id !== id)

        cart = [...cartWithoutDeletedProduct]

        LocalStorageService.set('cart', cart)
    }
}

export default CartService