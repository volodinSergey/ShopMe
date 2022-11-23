import { productsAPI } from "../shared/publicApi/index.js"

const ProductsService = {
    getAllProducts: async () => {
        const productsResponse = await fetch(productsAPI.allProducts)
        const jsonedProductsResponse = await productsResponse.json()

        return jsonedProductsResponse
    }
}

export default ProductsService