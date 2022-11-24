import productsStore from "../../stores/productsStore/productsStore.js"
import cartStore from "../../stores/cartStore/cartStore.js"

import useNewProductFactory from "../../stores/productsStore/productStore.newProduct.js"

const ProductsList = async () => {
    await productsStore.getAllProducts()

    const productsList = document.querySelector('.products-list')

    const onAddToCart = newProduct => cartStore.addToCart(newProduct)

    productsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-image') || e.target.classList.contains('products-list__item-cart-button')) {
            const productItem = e.target.closest('.products-list__item')
            const productCardImage = productItem.querySelector('.products-list__item-image')
            const productItemTitle = productItem.querySelector('.products-list__item-title')
            const productItemButton = productItem.querySelector('.products-list__item-cart-button')

            const newProduct = useNewProductFactory(
                productItem.dataset.id,
                productCardImage.src,
                productItemTitle.textContent,
            )

            onAddToCart(newProduct)
        }
    })
}

export default ProductsList