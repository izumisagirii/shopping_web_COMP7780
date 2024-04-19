<template>
    <footer class="footer bg-light">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-4">
                    <h5>Group H2O</h5>
                    <img src="../assets/logo.png" alt="Logo" class="footer-logo">
                    <p>Location: xxxxxxx</p>
                </div>
                <div class="col-md-4">
                    <h5>Group menber</h5>
                    <table class="table table-hover">
                        <thead class="bg-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">ID</th>
                                <!-- <th scope="col">Role</th> -->
                            </tr>
                        </thead>
                        <tbody class="bg-light">
                            <tr>
                                <td> Li Wentao </td>
                                <td>23459123</td>
                                <!-- <td>vfvfv</td> -->
                            </tr>
                            <tr>
                                <td> Cui Yongheng </td>
                                <td>23466642</td>
                                <!-- <td>vfvfvfv</td> -->
                            </tr>
                            <tr>
                                <td> He Chuangyu </td>
                                <td>23431814</td>
                                <!-- <td>vfvbt</td> -->
                            </tr>
                            <tr>
                                <td> Wang Zishen </td>
                                <td>23466618</td>
                                <!-- <td>vfvbt</td> -->
                            </tr>
                            <tr>
                                <td> Zeng Haomin </td>
                                <td>23418281</td>
                                <!-- <td>vfvbt</td> -->
                            </tr>
                            <tr>
                                <td> Liu Haifeng </td>
                                <td>23455748</td>
                                <!-- <td>vfvbt</td> -->
                            </tr>
                            <!-- more -->
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <h5>Contact us</h5>
                    <p>email xxxxxxxx</p>
                    <a href="https://github.com/izumisagirii/shopping_web_COMP7780" class="github-link">GitHub</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="text-muted">© 2024 Team H2O - All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style>
.footer {
    padding: 2rem 0;
    background: #f8f9fa;
}

.table {
    margin-bottom: 0;
    font-size: 0.8rem;
}

.table th,
.table td {
    padding: 0.2rem;
    background-color: #f8f9fa;
}

.bg-light {
    background-color: #f8f9fa;
}

.footer-logo {
    max-height: 50px;
    margin-bottom: 1rem;
}

.github-link {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 1rem;
}

html,
body {
    height: 100%;
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

.content {
    flex: 1;
}

.footer {
    padding: 2rem 0;
    background: #f8f9fa;
    margin-top: auto;
}
</style>
