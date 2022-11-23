import { createObservable } from "../../../reactiveLibrary/core.js";
import renderProducts from '../../components/ProductsList/render.js'

// Product observers
const renderProductsObserver = state => renderProducts(state)

const productsObservable = createObservable()
productsObservable.subscribe(renderProductsObserver)


const notifySystem = (state) => {
    if (typeof state === 'object') {
        productsObservable.notify(state)
    }
}


const useNotifier = (state) => {
    notifySystem(state)
}

export default useNotifier


