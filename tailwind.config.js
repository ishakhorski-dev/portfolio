/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#25272c',
                white: '#fafafa',
                primary: '#0092ca'
                // accent: '#8dc6ff'
            }
        }
    },
    plugins: []
}
