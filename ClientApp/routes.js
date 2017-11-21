import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import ContactData from 'components/contacts-data'
import Login from 'components/Login'
import AfterLogin from 'components/AfterLogin'

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { path: '/login', component: Login, display: 'Login', style: 'glyphicon glyphicon-th-list' },
    { path: '/contacts-data', component: ContactData, display: 'Contact data', style: 'glyphicon glyphicon-th-list' },
    { path: '/afterlogin', component: AfterLogin },
]
