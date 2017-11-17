import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Contacts {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

@Component
export default class ContactsComponent extends Vue {
    contacts: Contacts[] = [];

    mounted() {
        fetch('api/contacts')
            .then(response => response.json() as Promise<Contacts[]>)
            .then(data => {
                this.contacts = data;
            });
    }
}
