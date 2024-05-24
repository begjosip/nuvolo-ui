// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Wear your best moments',
        }
    },
    devtools: {enabled: true},
    pages: true,
    css: ['~/assets/css/main.css', '~/assets/css/hamburger.css', '~/assets/css/variables.css'],
    modules: ['@nuxtjs/google-fonts', "vue3-carousel-nuxt"],
    googleFonts: {
        families: {
            'Tenor+Sans': [400],
            Heebo: [300, 400, 700] // Enable Heebo in light (300), regular (400), and bold (700) weights
        }
    }
})