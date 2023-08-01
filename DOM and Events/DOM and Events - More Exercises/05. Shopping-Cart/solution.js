function solve() {
    const products = Array.from(document.querySelectorAll(".product"));
    const textarea = document.querySelector('textarea');

    console.log(products);
    const cart = {
        names: [],
        price: 0,
    }

    for (const product of products) {
        const button = product.querySelector('button')
        button.addEventListener('click', (e) => {
            const name = product.querySelector('.product-title').innerText;
            const price = product.querySelector('.product-line-price').innerText;
            textarea.textContent += `Added ${name} for ${price} to the cart.\n`
            if (!cart.names.includes(name)) {
                cart.names.push(name);
            }
            cart.price += Number(price);
            // console.log(cart.names);
            // console.log(cart.price);
        })
    }

    const checkoutBtn = document.querySelector('.checkout');

    checkoutBtn.addEventListener('click', () => {
        const productsByName = cart.names.join(', ')
        textarea.textContent +=`You bought ${productsByName} for ${cart.price.toFixed(2)}.`;
        const allButtons = Array.from(document.querySelectorAll('button'));
        for (const button of allButtons) {
            button.disabled = true;
        }
    })


}