module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
    theme: {
        fontFamily: {
            phosphate: ['Phosphate', 'sans-serif'],
            caption: ['PT Sans Caption', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
            },
            keyframes: {
                glitch: {
                    '0%': {transform: 'scale(1, 1.5)'},
                    '50%': {transform: 'scale(1, 1.2)'},
                    '100%': {transform: 'scale(1.2, 1)'},
                },
            },
            animation: {'terminal-glitch': 'glitch .1s linear infinite'},
        },
    },
};