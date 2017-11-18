import RestUtilities from './RestUtilities';
import AuthStore from '../stores/Auth';

interface IAuthResponse {
    access_token: string;
}

export default class Auth {
    static isSignedInIn(): boolean {
        return !!AuthStore.getToken();
    }

    signInOrRegister(email: string, password: string, isRegister: boolean = false) {
        return RestUtilities.post<IAuthResponse>(`/api/connect/${isRegister ? 'register' : 'token'}`,
            `username=${email}&password=${password}${!isRegister ? '&grant_type=password&client_id=mvc&client_secret=101564A5-E7FE-42CB-B10D-61EF6A8F3651' : ''}`)
            .then((response) => {
                if (!response.is_error) {
                    AuthStore.setToken(response.content.access_token);
                }
                return response;
            });
    }

    signIn(email: string, password: string) {
        return this.signInOrRegister(email, password, false);
    }

    register(email: string, password: string) {
        return this.signInOrRegister(email, password, true);
    }

    confirm(token: string): Promise<boolean> {
        return RestUtilities.post('/api/connect/confirm', { token: token })
            .then((response) => {
                return true;
            }).catch((err) => {
                console.log(err);
                return false;
            });
    }

    signOut(): void {
        AuthStore.removeToken();
    }
}
