module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noliee': {
          pink: {
            50: '#FFF5F7', 100: '#FFE9ED', 200: '#FFCDD7', 300: '#FFB2C1', 400: '#FF8CA9',
            500: '#FF6692', 600: '#E64A7D', 700: '#B73A63', 800: '#8D2D4C', 900: '#6D2339',
          },
          cream: {
            50: '#FFFCF9', 100: '#FFF9F3', 200: '#FDF4EA', 300: '#FBEED1', 400: '#F9E8B8',
            500: '#F7E29F', 600: '#D9C48C', 700: '#B8A375', 800: '#96825E', 900: '#7A684C',
          },
          maroon: {
            50: '#FFEFF0', 100: '#FFDFE1', 200: '#FFBFC3', 300: '#FF9FA6', 400: '#FF7F89',
            500: '#FF5F6C', 600: '#E64A5B', 700: '#B73A47', 800: '#8D2D36', 900: '#6D2329',
          }
        }
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeIn': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } }
      }
    },
  },
  plugins: [],
}
