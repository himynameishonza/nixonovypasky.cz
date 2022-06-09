module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,css,scss}',
        './components/**/*.{js,ts,jsx,tsx,css,scss}',
        './styles/**/*.{js,ts,jsx,tsx,css,scss}',
    ],

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
    theme: {
        fontFamily: {
            phosphateDisplay: ['PhosphateDisplay', 'sans-serif'],
            caption: ['PT Sans Caption', 'sans-serif'],
            terminal: ['IBM Plex Mono', 'monospace'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
            },
            keyframes: {
                glitch: {
                    '0%': {opacity: '0'},
                    '50%': {opacity: '0.1'},
                    '100%': {opacity: '0'},
                },
                fadeIn: {
                    '0%': {opacity: '0'},

                    '100%': {opacity: '1'},
                },
                pulseTerminal: {
                    '0%': {opacity: '0.8'},
                    '50%': {opacity: '1'},
                    '100%': {opacity: '0.8'},
                },
            },
            animation: {
                glitch: 'glitch .001s linear infinite',
                'fade-in': 'fadeIn 1s 1s linear forwards',
                'pulse-terminal': 'pulseTerminal 0.05s linear infinite',
            },
        },
    },
};
