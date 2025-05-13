/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        dark: '#050505',
        'dark-secondary': '#0c0c0f',
        'dark-tertiary': '#161620',
        'primary-10': 'rgba(0, 112, 243, 0.1)',
        'primary-20': 'rgba(0, 112, 243, 0.2)',
        'primary-30': 'rgba(0, 112, 243, 0.3)',
        'primary-40': 'rgba(0, 112, 243, 0.4)',
        'primary-50': 'rgba(0, 112, 243, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow: {
        'primary-sm': '0 1px 2px 0 rgba(0, 112, 243, 0.05)',
        primary: '0 1px 3px 0 rgba(0, 112, 243, 0.1), 0 1px 2px 0 rgba(0, 112, 243, 0.06)',
        'primary-md': '0 4px 6px -1px rgba(0, 112, 243, 0.1), 0 2px 4px -1px rgba(0, 112, 243, 0.06)',
        'primary-lg': '0 10px 15px -3px rgba(0, 112, 243, 0.1), 0 4px 6px -2px rgba(0, 112, 243, 0.05)',
        'primary-xl': '0 20px 25px -5px rgba(0, 112, 243, 0.1), 0 10px 10px -5px rgba(0, 112, 243, 0.04)',
        'primary-2xl': '0 25px 50px -12px rgba(0, 112, 243, 0.25)',
        'primary-inner': 'inset 0 2px 4px 0 rgba(0, 112, 243, 0.06)',
      },
      backgroundImage: {
        'gradient-primary-fade': 'linear-gradient(to bottom, rgba(0, 112, 243, 0.1), transparent)',
        'gradient-primary-fade-t': 'linear-gradient(to top, rgba(0, 112, 243, 0.1), transparent)',
      }
    },
    safelist: [
      'hover:shadow-primary-sm',
      'hover:shadow-primary',
      'hover:shadow-primary-md',
      'hover:shadow-primary-lg',
      'hover:shadow-primary-xl',
      'hover:shadow-primary-2xl',
      'hover:shadow-primary-inner'
    ]
  },
  plugins: [],
};
 