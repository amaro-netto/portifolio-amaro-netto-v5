/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#0D2439',
                surface: '#D5D9DC',
                background: '#F4F5F7',
                foreground: '#15181C',
                white: '#FFFFFF',
            },
            fontFamily: {
                // Removemos a serifa. Agora 'sans' e 'serif' apontam para a mesma fonte moderna.
                sans: ['Inter', 'sans-serif'],
                serif: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1200px',
                },
            },
        },
    },
    plugins: [],
}