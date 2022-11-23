const Cart = () => {
    const cartStatusButton = document.querySelector('.cart-status__button')

    cartStatusButton.addEventListener('click', (e) => {
        if (!e.target.classList.contains('cart-status__button-cart')) return

        document.querySelector('.overlay').classList.add('overlay-active')
        document.querySelector('.cart').classList.add('cart-active')
    })
}

export default Cart