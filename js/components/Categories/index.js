import productsStore from "../../stores/productsStore/productsStore.js";

const Categories = async () => {
    await productsStore.getAllCategories()

    const onFilterByCategory = categoryToFilter => productsStore.filterByCategory(categoryToFilter)

    const categoriesButton = document.querySelector('.categories__button')
    const categoriesMenu = document.querySelector('.categories__menu')

    categoriesButton.addEventListener('click', (e) => {
        categoriesMenu.classList.toggle('categories__menu--opened')
        categoriesButton.classList.toggle('categories__button--clicked')
    })

    categoriesMenu.addEventListener('click', (e) => {
        const allCategoriesItems = document.querySelectorAll('.categories__menu-item')
        const currentCategoryItem = e.target

        onFilterByCategory(currentCategoryItem.textContent)

        allCategoriesItems.forEach(categoriesItem => {
            categoriesItem.classList.remove('active-category')
        })

        currentCategoryItem.classList.add('active-category')

        categoriesButton.textContent = currentCategoryItem.textContent

        categoriesMenu.classList.remove('categories__menu--opened')
    })
}

export default Categories