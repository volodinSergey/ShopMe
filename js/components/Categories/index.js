import productsStore from "../../stores/productsStore/productsStore.js";

const Categories = async () => {
    productsStore.getAllCategories()
}

export default Categories