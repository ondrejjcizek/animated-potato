class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
};

const productList = {
    products: [
        new Product (
            'A pillow',
            'https://indian-tv.cz/uploads/ls/e81aa3faf1b544bca4461666e830f31e/1641199818.jpg?',
            'A soft pillow!',
            19.99
        ),
        new Product (
            'A Carpet',
            'https://indian-tv.cz/uploads/ls/e81aa3faf1b544bca4461666e830f31e/1641199818.jpg?',
            'A carpet which you might like - or not.',
            99.99
        )
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}"
                    <div class="products-item__content">
                        <h2>${prod.title}</h2>
                        <h3>${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();