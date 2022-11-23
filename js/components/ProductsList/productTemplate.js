const renderProductTemplate = (title, price, description, image) => (
    `
          <div class="products-list__item-top">
                        <img src=${image} alt="good" class="products-list__item-image">
                        <p class="products-list__item-title">${title}</p>
                        <p class="products-list__item-descr">${description}</p>
                    </div>

                    <div class="products-list__item-bottom">
                        <button class="products-list__item-cart-button">
                            <svg class="add-to-cart-image" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 296.605 296.605" xmlns:xlink="http://www.w3.org/1999/xlink"
                                enable-background="new 0 0 296.605 296.605">
                                <g>
                                    <polygon
                                        points="187.149,66.105 187.149,115.105 210.345,115.105 170.921,181.105 132.62,115.105 155.149,115.105 155.149,66.105    84.715,66.105 73.983,19.968 15.842,0 5.123,31.211 45.981,45.243 84.982,214.105 257.982,214.105 291.482,66.105  " />
                                    <circle cx="117.982" cy="264.105" r="32.5" />
                                    <circle cx="224.982" cy="264.105" r="32.5" />
                                </g>
                            </svg>

                            <svg class="added-to-cart-image" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 297.5 297.5" xmlns:xlink="http://www.w3.org/1999/xlink"
                                enable-background="new 0 0 297.5 297.5">
                                <g>
                                    <path
                                        d="m172.416,124.813c-15.453-15.461-24.005-35.976-24.134-57.813h-68.452l-10.732-46.138-58.141-19.967-10.719,31.21 40.858,14.032 29.058,124.932 9.943,43.931h173l17.236-76.146c-11.76,6.456-25.251,10.137-39.59,10.137-22.035-0.007-42.75-8.593-58.327-24.178z" />
                                    <circle cx="113.097" cy="265" r="32.5" />
                                    <circle cx="220.097" cy="265" r="32.5" />
                                    <path
                                        d="m230.748,133c0.007,0 0.013,0 0.02,0 36.717,0 66.484-29.765 66.495-66.482 0.009-36.724-29.754-66.518-66.479-66.518 0,0-0.012,0-0.019,0-36.717,0-66.485,29.765-66.495,66.482-0.012,36.724 29.752,66.518 66.478,66.518zm-21.758-72.162l12.631,12.632 30.922-30.922 11.314,11.314-42.236,42.234-23.946-23.946 11.315-11.312z" />
                                </g>
                            </svg>
                        </button>
                        <span class="products-list__item-price">${price} $</span>
                        `
)

export default renderProductTemplate