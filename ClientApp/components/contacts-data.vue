<template>
    <div>
        <h1>contacts</h1>

        <p>This component demonstrates fetching contacts data from the server DB (requrires login first).</p>

        <p v-if="!contacts"><em>Loading...</em></p>

        <table class="table" v-if="contacts">
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
                console.log('try to call getContacts...');
                api.getContacts().then((data) => {
                    console.log('data: ' + data)
                    this.contacts = data
                })

            } catch (error) {
                console.log('catch getContacts error : ' + error)
            }
        }

    }
</script>

<style>
</style>
