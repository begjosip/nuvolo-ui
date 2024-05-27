import {useAuthStore} from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const {authenticated, isAdmin} = storeToRefs(useAuthStore());
    const token = useCookie('token');

    if (token.value) {
        authenticated.value = true;
    }

    if (token.value &&
        (to?.name === 'sign-in' ||
            to?.name === 'register' ||
            to?.name === 'forgot-password')) {
        return navigateTo('/shop');
    }
    if (to?.name?.toString().includes('admin') && (!authenticated.value || isAdmin.value !== 'true')) {
        return navigateTo('/');
    }

});