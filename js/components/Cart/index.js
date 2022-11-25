import cartStore from "../../stores/cartStore/cartStore.js"

const Cart = async () => {
    await cartStore.getAllCartItems()

    const cartStatusButton = document.querySelector('.cart-status__button')
    const closeCartButton = document.querySelector('.cart__top-close-cart-button')
    const overlay = document.querySelector('.overlay')
    const cart = document.querySelector('.cart')

    const isClassContains = (element, classToCheck) => element.classList.contains(classToCheck)

    const onDeleteFromCart = id => cartStore.deleteFromCart(id)

    cartStatusButton.addEventListener('click', (e) => {
        if (isClassContains(e.target, 'cart-status__button-cart') || isClassContains(e.target, 'cart-status__button')) {
            overlay.classList.add('overlay-active')
            cart.classList.add('cart-active')
        }
    })

    closeCartButton.addEventListener('click', (e) => {
        if (isClassContains(e.target, 'close-cart-icon') || isClassContains(e.target, 'cart__top-close-cart-button')) {
            overlay.classList.remove('overlay-active')
            cart.classList.remove('cart-active')
        }
    })

    cart.addEventListener('click', (e) => {
        if (isClassContains(e.target, 'cart-list__item-delete')) {
            const cartItem = e.target.closest('.cart-list__item')
            const cartItemId = cartItem.dataset.id

            onDeleteFromCart(cartItemId)

            const productItem = document.querySelector(`.products-list__item[data-id="${cartItemId}"]`)
            const productItemButton = productItem.querySelector('.products-list__item-cart-button')

            productItemButton.textContent = 'Add to cart'
            productItemButton.disabled = false
        }
    })
}

export default Cart