import renderProductTemplate from "./productTemplate.js"

const renderProducts = (renderData) => {
    const productsList = document.querySelector('.products-list')

    renderData.forEach(({ title, price, description, image }) => {
        const productItemElement = document.createElement('li')
        productItemElement.classList.add('products-list__item')

        productItemElement.innerHTML = renderProductTemplate(title, price, description, image)

        productsList.appendChild(productItemElement)
    })
}

export default renderProducts