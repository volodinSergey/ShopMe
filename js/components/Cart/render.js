import renderCartItemTemplate from './cartItemTemplate.js'

const renderCartItems = (renderData) => {
    const cartItemsList = document.querySelector('.cart-list')

    if (!renderData.length) {
        cartItemsList.textContent = 'No products in the cart.'

        return
    }

    cartItemsList.innerHTML = ''

    renderData.forEach(({ id, imageUrl, title }) => {
        const cartItemElement = document.createElement('li')
        cartItemElement.classList.add('cart-list__item')
        cartItemElement.setAttribute('data-id', id)

        cartItemElement.innerHTML = renderCartItemTemplate(imageUrl, title)

        cartItemsList.appendChild(cartItemElement)
    })
}

export default renderCartItems