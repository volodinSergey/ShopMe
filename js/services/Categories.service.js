import { categoriesAPI } from '../shared/publicApi/index.js'

const CategoriesService = {
    getAll: async () => {
        const categoriesResponse = await fetch(categoriesAPI.allCategories)
        const jsonedCategoriesResponse = await categoriesResponse.json()

        return jsonedCategoriesResponse
    }
}

export default CategoriesService