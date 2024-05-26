import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth', {
        state: () => ({
            authenticated: false,
        }),
        actions: {
            logUserOut() {
                const token = useCookie('token');
                this.authenticated = false;
                token.value = null;
            },
            setAuthenticated(jwt: string) {
                this.authenticated = true;
                const token = useCookie('token');
                token.value = jwt;
            }
        },
    })
;