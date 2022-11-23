import productsStore from "../../stores/productsStore/productsStore.js"

const ProductsList = async () => {
    await productsStore.getAllProducts()
}

export default ProductsList