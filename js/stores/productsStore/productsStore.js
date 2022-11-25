import { ReactiveSystem } from '../../../reactiveLibrary/core.js'

import {
    productsObservable,
    categoriesObservable
} from './productsStore.observers.js'

import ProductsService from '../../services/Products.service.js'
import CategoriesService from '../../services/Categories.service.js'

const reactiveSystem = new ReactiveSystem([productsObservable, categoriesObservable])

const productsStore = reactiveSystem.createReactive({
    products: [],
    categories: [],

    getAllProducts: async function () {
        const productsResponse = await ProductsService.getAll()

        this.products = productsResponse
    },


    getAllCategories: async function () {
        const categoriesResponse = await CategoriesService.getAll()

        this.categories = categoriesResponse
    },

    filterByCategory: async function (categoryToFilter) {
        if (categoryToFilter === 'all') {
            this.getAllProducts()

            return
        }

        const filteredProducts = await CategoriesService.getBySpecificCategory(categoryToFilter)

        this.products = filteredProducts
    }
})


export default productsStore