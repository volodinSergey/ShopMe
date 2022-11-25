const baseUrl = 'https://fakestoreapi.com'
const baseProductsUrl = `${baseUrl}/products`

const productsAPI = {
    allProducts: `${baseProductsUrl}`,
}

const categoriesAPI = {
    allCategories: `${baseProductsUrl}/categories`,
    specificCategory: categoryToFilter => `${baseProductsUrl}/category/${categoryToFilter}`
}


export {
    productsAPI,
    categoriesAPI
}