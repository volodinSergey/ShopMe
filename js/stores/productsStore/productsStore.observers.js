// import { createObservable } from "../../../reactiveLibrary/core.js"

// import renderProducts from '../../components/ProductsList/render.js'
// import renderCategories from '../../components/Categories/render.js'


// // Product observers
// const renderProductsObserver = state => renderProducts(state)

// const productsObservable = createObservable()
// productsObservable.subscribe(renderProductsObserver)


// const productsNotifySystem = (state) => {
//     if (typeof state === 'object') {
//         productsObservable.notify(state)
//     }
// }

// // Categories observers
// const renderCategoriesObserver = state => renderCategories(state)

// const categoriesObservable = createObservable()
// categoriesObservable.subscribe(renderCategoriesObserver)


// const categoriesNotifySystem = (state) => {
//     if (typeof state === 'object') {
//         categoriesObservable.notify(state)
//     }
// }



// // const useNotifier = (state) => {
// //     notifySystem(state)
// // }


// // const useNotifier = (state) => {
// //     productsNotifySystem(state)
// //     categoriesNotifySystem(state)
// // }

// export default useNotifier


