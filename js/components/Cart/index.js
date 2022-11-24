const Cart = () => {
    const cartStatusButton = document.querySelector('.cart-status__button')
    const closeCartButton = document.querySelector('.cart__top-close-cart-button')
    const overlay = document.querySelector('.overlay')
    const cart = document.querySelector('.cart')

    const isClassContains = (element, classToCheck) => element.classList.contains(classToCheck)

    cartStatusButton.addEventListener('click', (e) => {
        if (isClassContains(e.target, 'cart-status__button-cart') || isClassContains(e.target, 'cart-status__button')) {
            overlay.classList.add('overlay-active')
            cart.classList.add('cart-active')
        }

        return
    })

    closeCartButton.addEventListener('click', (e) => {
        if (isClassContains(e.target, 'close-cart-icon') || isClassContains(e.target, 'cart__top-close-cart-button')) {
            overlay.classList.remove('overlay-active')
            cart.classList.remove('cart-active')
        }
    })
}

export default Cart