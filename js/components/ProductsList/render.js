import renderProductTemplate from "./productTemplate.js"

const renderProducts = (renderData) => {
    const productsList = document.querySelector('.products-list')
    productsList.innerHTML = ''

    renderData.forEach(({ title, price, description, image, id }) => {
        const productItemElement = document.createElement('li')
        productItemElement.classList.add('products-list__item')
        productItemElement.setAttribute('data-id', id)

        productItemElement.innerHTML = renderProductTemplate(title, price, description, image)

        productsList.appendChild(productItemElement)
    })
}

export default renderProducts