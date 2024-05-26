import {useAuthStore} from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const {authenticated} = storeToRefs(useAuthStore());
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

});