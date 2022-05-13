function withOpacityValue(variable) {
  return ({
    opacityValue
  }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
    },
    maxWidth: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1.75rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '7.4rem',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      headings: ['Podium Sharp', 'sans-serif'],
      body: ['Roboto Condensed', 'serif'],
    },
    extend: {
      colors: {
        main: withOpacityValue('--color-main'),
        white: withOpacityValue('--color-white'),
        black: withOpacityValue('--color-white'),
        ui: {
          100: withOpacityValue('--color-ui-100'),
          200: withOpacityValue('--color-ui-200'),
          300: withOpacityValue('--color-ui-300'),
          400: withOpacityValue('--color-ui-400'),
          500: withOpacityValue('--color-ui-500'),
          600: withOpacityValue('--color-ui-600'),
          700: withOpacityValue('--color-ui-700'),
          800: withOpacityValue('--color-ui-800'),
          900: withOpacityValue('--color-ui-900'),
        },
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
        '10': '10 10 0%',
        '11': '11 11 0%',
        '12': '12 12 0%',
      },
      skew: {
        '30': '30deg',
      }
    }
  },
  plugins: [],
}