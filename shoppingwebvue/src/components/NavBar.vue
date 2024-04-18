<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="Logo" class="logo">
                SIPPER
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">Cart</router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <a class="nav-link" href="#" @click="logout">logout: {{ username }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="text-center bg-primary text-white py-3">
        <!-- <img src="../assets/cs_logo.png" alt="Logo" class="mx-auto d-block" style="width:300px; height:100px;"> -->
        <h1>COMP 7780 Special Topics in Knowledge and Information Management</h1>
        <h2>Team no. 00, Team Name: HKBU team</h2>
        <!-- <img src="../assets/cs_logo.png" alt="CS Logo" class="mx-auto d-block my-4" style="width:300px; height:200px;"> -->
    </header>
</template>

<script>
export default {
    name: 'NavView',
    data() {
        return {
            user: '',
            loggedIn: false,
            username: ''
        }
    },
    created() {
        this.checkLogin();
    },
    watch: {
        '$route': 'checkLogin'
    },
    methods: {
        checkLogin() {
            const user = localStorage.getItem('user');
            if (user) {
                this.loggedIn = true;
                this.user = JSON.parse(user);
                this.username = this.user.cust_username;
            } else {
                this.loggedIn = false;
                this.user = '';
                this.username = '';
            }
        },
        logout() {
            localStorage.removeItem('user');
            this.loggedIn = false;
            this.user = '';
            this.username = '';
            // Optionally redirect to home page
            this.$router.push('/');
        }
    }
}

</script>

<style>
.logo {
    /* height: 50px; */
}

.navbar-brand {
    display: flex;
    align-items: center;
}
</style>
