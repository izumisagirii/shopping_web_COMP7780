<template>
    <section class="container">
        <div class="reg container mt-5">
            <h2 class="text-center mb-4">login</h2>
            <form @submit.prevent="loginUser">
                <div class="form-group mb-3">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="user.username" required>
                </div>
                <div class="form-group mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="user.password" required>
                </div>
                <!-- <div class="btn-group-vertical" role="group" aria-label="Vertical button group"> -->
                <button type="submit" class="btn btn-primary w-100 mb-2">OK</button>
                <button class="btn btn-info w-100" @click="this.$router.push('/register')">Register</button>
                <!-- </div> -->


            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        loginUser() {
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.user)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('fail login!');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.user) {
                        localStorage.setItem('user', JSON.stringify(data.user));
                        this.$router.push('/');
                    } else {
                        alert(data.message);
                    }
                })
                .catch(error => {
                    this.resetForm();
                    alert(error.message);
                });
        },
        resetForm() {
            this.user.username = '';
            this.user.password = '';
        }
    }
};
</script>


<style>
.reg {
    max-width: 400px;
    margin: auto;
    margin-top: 100px;
}
</style>