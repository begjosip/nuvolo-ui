import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth', {
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
                const token = useCookie('token');
                token.value = jwt;
                if (isAdmin) {
                    this.isAdmin = true;
                    const admin = useCookie('admin');
                    admin.value = String(isAdmin);
                }
            }
        },
    })
;