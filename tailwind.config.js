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
    "./pages/*.{js,ts,jsx,tsx,json}",
    "./pages/*/*.{js,ts,jsx,tsx,json}",
    "./components/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    minWidth: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
    },
    minHeight: {
      '4': '1rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
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
      '2xl': '1.75rem',
      '3xl': '2.25rem',
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
        black: withOpacityValue('--color-black'),
        ui: {
          100: withOpacityValue('--color-ui-100'),
          200: withOpacityValue('--color-ui-200'),
          300: withOpacityValue('--color-ui-300'),
          400: withOpacityValue('--color-ui-400'),
          500: withOpacityValue('--color-ui-500'),
          600: withOpacityValue('--color-ui-600'),
          700: withOpacityValue('--color-ui-700'),
          800: withOpacityValue('--color-ui-800'),
          850: withOpacityValue('--color-ui-850'),
          900: withOpacityValue('--color-ui-900'),
        },
        mono: {
          100: withOpacityValue('--color-mono-100'),
          900: withOpacityValue('--color-mono-900'),
        },
        premium: {
          300: withOpacityValue('--color-premium-300'),
          500: withOpacityValue('--color-premium-500'),
          700: withOpacityValue('--color-premium-700'),
        },
        interaction: {
          300: withOpacityValue('--color-interaction-300'),
          500: withOpacityValue('--color-interaction-500'),
          700: withOpacityValue('--color-interaction-700'),
        },
        blue: {
          300: withOpacityValue('--color-blue-300'),
          500: withOpacityValue('--color-blue-500'),
          700: withOpacityValue('--color-blue-700'),
        },
        purple: {
          300: withOpacityValue('--color-purple-300'),
          500: withOpacityValue('--color-purple-500'),
          700: withOpacityValue('--color-purple-700'),
        },
        teal: {
          300: withOpacityValue('--color-teal-300'),
          500: withOpacityValue('--color-teal-500'),
          700: withOpacityValue('--color-teal-700'),
        }
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
  safelist: [
    'bg-ui-100',
    'bg-ui-200',
    'bg-ui-300',
    'bg-ui-400',
    'bg-ui-500',
    'bg-ui-600',
    'bg-ui-700',
    'bg-ui-800',
    'bg-ui-850',
    'bg-ui-900',
    'bg-mono-100',
    'bg-mono-900',
    'bg-main',
    'bg-premium-300',
    'bg-premium-500',
    'bg-premium-700',
    'bg-interaction-300',
    'bg-interaction-500',
    'bg-interaction-700',
    'bg-blue-300',
    'bg-blue-500',
    'bg-blue-700',
    'bg-purple-300',
    'bg-purple-500',
    'bg-purple-700',
    'bg-teal-300',
    'bg-teal-500',
    'bg-teal-700',
    'bg-gradient-to-r',
    'from-teal-500',
    'to-blue-500',
    'from-purple-500',
  ],
  plugins: [],
}