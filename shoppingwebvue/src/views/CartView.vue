<template>
    <div class="container mt-3">
        <!-- Title and Product Information -->
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

        <!-- Shopping Cart Table -->
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th class="text-center">Product desc</th>
                    <th class="text-center">Amount to buy</th>
                    <th class="text-center">Price</th>
                    <!-- <th class="text-center">Add to cart</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in cartItems" :key="product.prod_id">
                    <td class="text-center">{{ product.prod_desc }}</td>
                    <td class="text-center">{{ product.cart_qty }}</td>
                    <td class="text-center">${{ product.cart_price }}</td>
                    <!-- <td class="text-center">
                        <button class="btn btn-primary" @click="addToCart(product)">CART</button>
                    </td> -->
                </tr>
            </tbody>
        </table>

        <div class="text-center mt-5">
            <div class="btn-group" role="group" aria-label="Payment Buttons">
                <button class="btn btn-danger btn-lg" @click="payItems">Pay</button>
                <button class="btn btn-primary btn-lg" onclick="location.href='/products';">Back to prods</button>
                <button class="btn btn-info btn-lg" @click="deleteCart">Clear cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [],
            loggedIn: false,
            user: null,
            username: ''
        };
    },
    created() {
        this.loadCart();
    },
    methods: {
        loadCart() {
            const user = localStorage.getItem('user');
            if (user) {
                this.loggedIn = true;
                this.user = JSON.parse(user);
                this.username = this.user.cust_username;
                this.fetchCartItems();
            }
        },
        payItems() {
            // amout
            const totalAmount = this.cartItems.reduce((total, item) => {
                return total + (item.cart_qty * item.cart_price);
            }, 0);

            // pay
            const user = this.user.cust_username;
            const paymentWindow = window.open(`../pay.html?totalAmount=${totalAmount}&localUser=${user}`, 'paymentWindow', 'width=800,height=600');
            let windowCheckInterval = setInterval(function () {
                if (paymentWindow.closed) {
                    clearInterval(windowCheckInterval);
                    console.log('Payment window has been closed');
                    location.reload();
                }
            }, 200);


            // clean
            // fetch(`/api/cart/${this.username}`, {
            //     method: 'DELETE'
            // })
            //     .then(response => {
            //         if (response.ok) {
            //             location.reload();
            //         } else {
            //             throw new Error('Failed to clear cart.');
            //         }
            //     })
            //     .catch(error => console.error('Error:', error));
        },
        fetchCartItems() {
            fetch(`/api/cart/${this.username}`)
                .then(response => response.json())
                .then(data => {
                    this.cartItems = data;
                })
                .catch(error => console.error('Error:', error));
        },
        deleteCart() {
            fetch(`/api/cart/${this.username}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        location.reload();
                    } else {
                        throw new Error('Failed to clear cart.');
                    }
                })
                .catch(error => console.error('Error:', error));
        },

    }
};
</script>
<style>
.table-sm {
    max-width: 800px;
    margin: auto;
}

.tt-points {
    margin-top: 1rem;
}


.key-points {
    font-size: 1.2em;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #333;
    text-align: left;
}
</style>