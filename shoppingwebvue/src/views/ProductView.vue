<template>

    <div class="container mt-3">
        <div class="text-center mb-5">
            <h1 class="tt-points">Sipper: Art of Drinking in China</h1>
            <p class="key-points">
                Company: Sipper website is committed to promoting the rich Chinese wine culture to the world.
            </p>
            <p class="key-points">
                Product: Chinese wine is divided into fermented wine and distilled wine, each with its own
                characteristics, deeply loved by people and used in different cultural occasions.
            </p>
            <img src="../assets/cs_logo.png" alt="mainpic" class="img-fluid">
        </div>
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th class="text-center">Product desc</th>
                    <th class="text-center">Amount to buy</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Add to cart</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.prod_id">
                    <td class="text-center">{{ product.prod_desc }}</td>
                    <td class="text-center">
                        <div class="input-group">
                            <button class="btn btn-outline-secondary" type="button"
                                @click="decrement(product)">-</button>
                            <input type="text" class="form-control text-center" v-model="product.quantity">
                            <button class="btn btn-outline-secondary" type="button"
                                @click="increment(product)">+</button>
                        </div>
                    </td>
                    <td class="text-center">${{ product.prod_price }}</td>
                    <td class="text-center">
                        <button class="btn btn-primary" @click="addToCart(product)">CART</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-center mt-5">
            <button class="btn btn-primary btn-lg" onclick="location.href='/cart';">Check your cart</button>
        </div>
    </div>
</template>

<style>
.table-sm {
    max-width: 800px;
    margin: auto;
}

.tt-points {
    margin-top: 1rem;
}

.container {
    padding-bottom: 20px;
}

.key-points {
    font-size: 1.2em;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #333;
    text-align: left;
}
</style>


<script>
export default {
    data() {
        return {
            products: []
        };
    },
    created() {
        this.fetchProducts();
    },

    methods: {
        fetchProducts() {
            fetch('/api/products')
                .then(response => response.json())
                .then(data => {
                    this.products = data.map(product => ({
                        ...product,
                        quantity: 1,
                        prod_price: (Math.random() * 5 + 5).toFixed(2)
                    }));

                })
                .catch(error => console.error('Error fetching products:', error));
        },
        increment(product) {
            product.quantity++;
        },
        decrement(product) {
            if (product.quantity > 0) product.quantity--;
        },
        addToCart(product) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.cust_username) {
                console.error('pls login');
                return;
            }
            const body = {
                username: user.cust_username,
                prodId: product.prod_id,
                qty: product.quantity,
                price: product.prod_price
            };
            fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                    alert(`Product ${product.prod_desc} added to cart with quantity ${product.quantity}`);
                    product.quantity = 1;
                })
                .catch(error => {
                    console.error('fail adding cart:', error);
                });

        }
    }
};
</script>
