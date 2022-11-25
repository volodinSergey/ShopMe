import LocalStorageService from "../shared/services/LocalStorage.service.js"

const cartNameForLocalStorage = 'cart'

const CartService = {
    getAll: () => {
        const cartItems = LocalStorageService.get(cartNameForLocalStorage)

        return cartItems
    },

    add: newProduct => {
        const cart = LocalStorageService.get(cartNameForLocalStorage)

        cart.push(newProduct)

        LocalStorageService.set(cartNameForLocalStorage, cart)
    },

    delete: id => {
        let cart = LocalStorageService.get(cartNameForLocalStorage)

        const cartWithoutDeletedProduct = cart.filter(item => item.id !== id)

        cart = [...cartWithoutDeletedProduct]

        LocalStorageService.set(cartNameForLocalStorage, cart)
    }
}

export default CartService