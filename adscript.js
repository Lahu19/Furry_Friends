document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h2').innerText;
            const listItem = document.createElement('li');
            listItem.innerText = productName;
            cartItems.appendChild(listItem);
        });
    });
});
