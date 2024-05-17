// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'nuvolo',
        }
    },
    devtools: {enabled: true},
    pages: true,
    css: ['~/assets/css/main.css', '~/assets/css/variables.css'],
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxt/image',
    ],
    googleFonts: {
        families: {
            'Tenor+Sans': [400],
            Heebo: [100, 400, 700] // Enable Heebo in light (100), regular (400), and bold (700) weights
        }
    }
})