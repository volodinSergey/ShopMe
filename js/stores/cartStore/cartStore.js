import { ReactiveSystem } from '../../../reactiveLibrary/core.js'

import CartService from '../../services/Cart.service.js'

import { cartObservable } from './cartStore.observers.js'

const reactiveSystem = new ReactiveSystem([cartObservable])

const cartStore = reactiveSystem.createReactive({
    cart: [],

    getAllCartItems: async function () {
        const response = await CartService.getAll()

        this.cart = response
    },


    addToCart: function (newProduct) {
        CartService.add(newProduct)

        this.cart = [...this.cart, newProduct]
    },

    deleteFromCart: function (id) {
        CartService.delete(id)

        const theRestCartItems = this.cart.filter(item => item.id !== id)

        this.cart = [...theRestCartItems]
    }
})

export default cartStore