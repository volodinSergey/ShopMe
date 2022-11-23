import { reactive } from '../../../reactiveLibrary/core.js'
import useNotifier from './productsStore.observers.js'

import ProductsService from '../../services/Products.service.js'
import CategoriesService from '../../services/Categories.service.js'

const productsStore = reactive({
    products: [],
    categories: [],

    getAllProducts: async function () {
        const productsResponse = await ProductsService.getAllProducts()

        this.products = productsResponse
    },

    getAllCategories: async function () {
        const categoriesResponse = await ProductsService.getAllProducts()

        this.categories = categoriesResponse

    }

}, useNotifier)


export default productsStore