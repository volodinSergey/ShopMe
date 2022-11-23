import productsStore from "../../stores/productsStore/productsStore.js"

const ProductsList = async () => {
    productsStore.getAllProducts()
}

export default ProductsList




// !!! сначала await productsStore.getAllProducts(), потом рендерим ответ в productsList