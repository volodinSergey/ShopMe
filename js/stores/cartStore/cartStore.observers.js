import { createObservable } from "../../../reactiveLibrary/core.js"

import renderCartItems from '../../components/Cart/render.js'

// Cart observers
const renderCartItemsObserver = newState => renderCartItems(newState)

const updateCartCountObserver = (newState) => {
    const cartCount = document.querySelector('.cart-status__count-counter')

    if (!newState.length) {
        cartCount.textContent = 0

        return
    }

    cartCount.textContent = newState.length
}

const cartObservable = createObservable('cart')
cartObservable.subscribe(renderCartItemsObserver, updateCartCountObserver)


export {
    cartObservable
}


