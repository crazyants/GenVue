<template>
    <div>
        <h1>contacts</h1>

        <p>This component demonstrates fetching contacts data from the server DB.</p>

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
            let response = await this.$http.get('/api/contacts')
            console.log(response.data);
            this.contacts = response.data;
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style>
</style>
