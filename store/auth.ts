import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth', {
        state: () => ({
            authenticated: false,
            isAdmin: false,
        }),
        actions: {
            logUserOut() {
                const token = useCookie('token');
                this.authenticated = false;
                token.value = null;
            },
            setAuthenticated(jwt: string, isAdmin: boolean) {
                this.authenticated = true;
                this.isAdmin = isAdmin;
                const token = useCookie('token');
                token.value = jwt;
            }
        },
    })
;