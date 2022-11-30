let productQuantityControls = document.querySelectorAll('.product__quantity-controls');
let productAdd = document.querySelectorAll('.product__add');
let bool = true;
let num;

for(let i = 0; i < productQuantityControls.length; i++) {
    productQuantityControls[i].addEventListener('click', (event) => {
        let productQuantityValue = productQuantityControls[i].querySelector('.product__quantity-value');
        if (bool) {
            if (event.target.className == 'product__quantity-control product__quantity-control_dec') {
                productQuantityValue.textContent = Number (productQuantityValue.textContent) - 1;
                num = Number(productQuantityValue.textContent);
            }
            else if (event.target.className == 'product__quantity-control product__quantity-control_inc') {
                productQuantityValue.textContent = Number (productQuantityValue.textContent) + 1;
                num = Number(productQuantityValue.textContent);
            }
            if (num > 0) {
                bool = true;
            } else {
                bool = true;
                productQuantityValue.textContent = Number (productQuantityValue.textContent) + 1;
            }
        } else {
            alert('Error');
            return;
        }
    })
}

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', (event) => {
        addProduct(event);
    })
}

function addProduct(event) {
    let cartProducts = document.querySelector('.cart__products');
    let productQuantity = event.target.closest('.product__quantity');
    let productQuantityValue = productQuantity.querySelector('.product__quantity-value');
    let num = Number(productQuantityValue.textContent);
    let product = productQuantity.closest('.product');
    let count = 0, sum = 0;

    let cartProduct = document.querySelectorAll('.cart__product');
    let cartProductArray = Array.from(cartProduct);
    const productFromCard = cartProductArray.find((element) => element.dataset.id == product.dataset.id);

    if (productFromCard) {
        let cartProductCount = productFromCard.querySelector('.cart__product-count');
        count = Number(cartProductCount.textContent);
        sum = count + num;
        cartProductCount.textContent = sum;
    } else {
        cartProducts.insertAdjacentHTML('beforeEnd',
        '<div class="cart__product" data-id=' + product.dataset.id + '>'
        +'<img class="cart__product-image" src=' + product.querySelector('.product__image').src + '>'
        +'<div class="cart__product-count">' + num + '</div>' 
        + '</div>');
    }
    event.preventDefault();
    return;
}
