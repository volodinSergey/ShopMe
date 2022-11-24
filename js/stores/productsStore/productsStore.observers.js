import { createObservable } from "../../../reactiveLibrary/core.js"

import renderProducts from '../../components/ProductsList/render.js'
import renderCategories from '../../components/Categories/render.js'


// Product observers
const renderProductsObserver = newState => renderProducts(newState)

const productsObservable = createObservable('products')
productsObservable.subscribe(renderProductsObserver)

// Categories observers
const renderCategoriesOserver = newState => renderCategories(newState)

const categoriesObservable = createObservable('categories')
categoriesObservable.subscribe(renderCategoriesOserver)


export {
    productsObservable,
    categoriesObservable
}


