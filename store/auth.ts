import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth', {
        persist: {
            storage: persistedState.cookies
        },
        state: () => ({
            authenticated: false,
            isAdmin: false,
        }),
        actions: {
            logUserOut() {
                const token = useCookie('token');
                const admin = useCookie('admin');
                this.authenticated = false;
                this.isAdmin = false;
                token.value = null;
                admin.value = null;
            },
            setAuthenticated(jwt: string, isAdmin: boolean) {
                this.authenticated = true;
                this.isAdmin = isAdmin;
                const token = useCookie('token');
                const admin = useCookie('admin');
                token.value = jwt;
                admin.value = String(isAdmin);
            }
        },
    })
;