import { categoriesAPI } from '../shared/publicApi/index.js'

const CategoriesService = {
    getAll: async () => {
        const categoriesResponse = await fetch(categoriesAPI.allCategories)
        const jsonedCategoriesResponse = await categoriesResponse.json()

        return jsonedCategoriesResponse
    },

    getBySpecificCategory: async (categoryToFilter) => {
        const filteredProducts = await fetch(categoriesAPI.specificCategory(categoryToFilter))
        const jsonedFilteredProducts = await filteredProducts.json()

        return jsonedFilteredProducts
    }
}

export default CategoriesService