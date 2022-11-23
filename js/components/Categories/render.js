import renderCategoryTemplate from "./categoryTemplate.js";

const renderCategories = (renderData) => {
    const categoriesMenuList = document.querySelector('.categories__menu')

    renderData.forEach(category => {
        const categoryItemElement = document.createElement('li')

        categoryItemElement.innerHTML = renderCategoryTemplate(category)

        categoriesMenuList.appendChild(categoryItemElement)
    })
}

export default renderCategories