class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}"
                <div class="this.productucts-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        return prodEl;
    }
}

class ProductList {
    products = [
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
    ];

    constructor() {}

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();