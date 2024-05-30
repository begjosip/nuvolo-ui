import {useAuthStore} from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const {authenticated, isAdmin} = storeToRefs(useAuthStore());
    const token = useCookie('token');
    const administrator = useCookie('admin');
    if (token.value) {
        authenticated.value = true;
    }
    if (administrator.value === 'true') {
        isAdmin.value = true;
    }


    // User which is signed in cannot visit authentication pages
    if (token.value &&
        (to?.name === 'sign-in' ||
            to?.name === 'register' ||
            to?.name === 'forgot-password')) {
        return navigateTo('/shop');
    }

    // If regular user tries to visit admin site redirect to home page
    if (to?.name?.toString().includes('admin') && (!token.value || !administrator.value)) {
        return navigateTo('/');
    }

    // If ADMIN user logged in set main page to admin page
    if (to?.name === 'index' && token.value && administrator.value) {
        return navigateTo('/admin');
    }
});