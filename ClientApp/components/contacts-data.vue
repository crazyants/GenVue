<template>
    <div>
        <h1>Contacts</h1>

        <h5>
            <strong>This component demonstrates fetching contacts data from the server DB by WebAPI.</strong>
            <small class="text-muted">User login is required.</small>
        </h5>

        <p v-if="!contacts"><em>Loading...</em></p>

        <br/>

        <table class="table table-striped" v-if="contacts">
            <thead>
                <tr>
                    <th>lastName</th>
                    <th>firstName</th>
                    <th>phone</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts">
                    <td>{{ contact.lastName }}</td>
                    <td>{{ contact.firstName }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>{{ contact.email }}</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
    import api from '../api/api'

    export default {
        data() {
            return {
                contacts: null
            }
        },

        methods: {
        },

        async created() {
            try {

                console.log('is login...' + this.$store.state.isLoggedIn);

                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login')
                } else {
                    console.log('try to call getContacts...');
                    api.getContacts().then((data) => {
                        console.log('data: ' + data)
                        this.contacts = data
                    })
                }

            } catch (error) {
                console.log('catch getContacts error : ' + error)
            }
        }

    }
</script>

<style>
</style>
