const renderProductTemplate = (title, price, description, image) => (
    `
          <div class="products-list__item-top">
                        <img src=${image} alt="good" class="products-list__item-image">
                        <p class="products-list__item-title">${title}</p>
                        <p class="products-list__item-descr">${description}</p>
                    </div>

                    <div class="products-list__item-bottom">
                        <button class="products-list__item-cart-button">
                            Add to cart
                        </button>
                        <span class="products-list__item-price">${price} $</span>
                        `
)

export default renderProductTemplate