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
  mode: 'jit',
  content: [
    "./pages/*.{js,ts,jsx,tsx,json}",
    "./pages/**/*.{js,ts,jsx,tsx,json}",
    "./pages/**/**/*.{js,ts,jsx,tsx,json}",
    "./components/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1576px',
      '3xl': '1920px',
    },
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
      '100px': '100px',
      '150px': '150px',
      '200px': '200px',
      'screen': '100vh',
    },
    maxWidth: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1576px',
    },
    fontSize: {
      '0': '0rem',
      'xs': '0.75rem',
      'sm': '0.875rem',
      'tiny': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
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
      body: ['Roboto Condensed', 'sans-serif'],
      icon: ['glooticons', 'serif'],
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
        game: {
          apexlegends: withOpacityValue('--color-game-apexlegends'),
          csgo: withOpacityValue('--color-game-csgo'),
          dota2: withOpacityValue('--color-game-dota2'),
          leagueoflegends: withOpacityValue('--color-game-leagueoflegends'),
          pubg: withOpacityValue('--color-game-pubg'),
          rocketleague: withOpacityValue('--color-game-rocketleague'),
          valorant: withOpacityValue('--color-game-valorant'),
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
        },
        attention: {
          300: withOpacityValue('--color-attention-300'),
          500: withOpacityValue('--color-attention-500'),
          700: withOpacityValue('--color-attention-700'),
        },
        success: {
          300: withOpacityValue('--color-success-300'),
          500: withOpacityValue('--color-success-500'),
          700: withOpacityValue('--color-success-700'),
        },
        info: {
          300: withOpacityValue('--color-info-300'),
          500: withOpacityValue('--color-info-500'),
          700: withOpacityValue('--color-info-700'),
        },
        error: {
          300: withOpacityValue('--color-error-300'),
          500: withOpacityValue('--color-error-500'),
          700: withOpacityValue('--color-error-700'),
        },
        disabled: {
          300: withOpacityValue('--color-disabled-300'),
          500: withOpacityValue('--color-disabled-500'),
          700: withOpacityValue('--color-disabled-700'),
        },
        gold: {
          300: withOpacityValue('--color-gold-300'),
          500: withOpacityValue('--color-gold-500'),
          700: withOpacityValue('--color-gold-700'),
        },
        silver: {
          300: withOpacityValue('--color-silver-300'),
          500: withOpacityValue('--color-silver-500'),
          700: withOpacityValue('--color-silver-700'),
        },
        bronze: {
          300: withOpacityValue('--color-bronze-300'),
          500: withOpacityValue('--color-bronze-500'),
          700: withOpacityValue('--color-bronze-700'),
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-spotlight': 'radial-gradient(45% 45% at 50% 25%, var(--tw-gradient-stops))',
        'gradient-radial-to-b': 'radial-gradient(100% 100% at 50% 0%, var(--tw-gradient-stops))',
      },
      rotate: {
        '135': '135deg',
      },
      aspectRatio: {
        'story': '9 / 16',
        'landscape': '10 / 3',
      },
      height: {
        '0': '0rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '3.5rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '7.4rem',
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.88s cubic-bezier(0.7, 0, 0.1, 1) both',
        'slide-in-right': 'slideInRight 0.88s cubic-bezier(0.7, 0, 0.1, 1) both',
        'slide-in-top': 'slideInTop 0.88s cubic-bezier(0.7, 0, 0.1, 1) both',
        'slide-in-bottom': 'slideInBottom 0.88s cubic-bezier(0.7, 0, 0.1, 1) both',
        'fade-in': 'fadeIn 0.88s cubic-bezier(0.7, 0, 0.1, 1) both',
        'fade-out': 'fadeOut 0.44s cubic-bezier(0.7, 0, 0.1, 1) both',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite both',
        'drop-in': 'dropIn 1.1s both',
        'bounce-right': 'bounceRight 1.1s infinite',
        'bounce-left': 'bounceLeft 1.1s infinite',
        'floating': 'floating 6s cubic-bezier(.45,0,.4,1) infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-2rem)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(2rem)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInTop: {
          '0%': { 
            transform: 'translateY(-2rem)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInBottom: {
          '0%': { 
            transform: 'translateY(2rem)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': { 
            opacity: '1',
          },
          '100%': { 
            opacity: '0',
          },
        },
        bounceRight: {
          '0%, 100%': { 
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': { 
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        bounceLeft: {
          '0%, 100%': { 
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': { 
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        heartbeat: {
          'from': {
            transform: 'scale(1)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-out',
          },
          '10%': {
            transform: 'scale(0.91)',
            animationTimingFunction: 'ease-in',
          },
          '17%': {
            transform: 'scale(0.98)',
            animationTimingFunction: 'ease-out',
          },
          '33%': {
            transform: 'scale(0.87)',
            animationTimingFunction: 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            animationTimingFunction: 'ease-out',
          }
        },
        dropIn: {
          '0%': {
            transform: 'translateY(-500px)',
            animationTimingFunction: 'ease-in',
            opacity: '0',
          },
          '38%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
            opacity: '1',
          },
          '55%': {
            transform: 'translateY(-65px)',
            animationTimingFunction: 'ease-in',
          },
          '72%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '81%': {
            transform: 'translateY(-28px)',
            animationTimingFunction: 'ease-in',
          },
          '90%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '95%': {
            transform: 'translateY(-8px)',
            animationTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
        },
        floating: {
          '0%,80%,100%': { 
            transform: 'translateY(0)',
          },
          '40%,50%': { 
            transform: 'translateY(-7%)',
          },
        },
      },
      boxShadow: {
        'main': [
          '0px 0px 0px 2px rgba(19, 240, 148, 1)',
        ],
        'xl': [
          '0px 54px 80px rgba(0, 0, 0, 0.14)',
          '0px 22px 33px rgba(0, 0, 0, 0.1)',
          '0px 12px 17px rgba(0, 0, 0, 0.08)',
          '0px 6px 10px rgba(0, 0, 0, 0.07)',
          '0px 3px 5px rgba(0, 0, 0, 0.05)',
          '0px 1px 2px rgba(0, 0, 0, 0.03)',
        ],
      },
      dropShadow: {
        'main': [
          '0px 0px 10px rgba(19, 240, 148, 0.075)',
          '0px 0px 3px rgba(19, 240, 148, 0.1)',
          '0px 0px 1.3px rgba(19, 240, 148, 0.15)',
          '0px 0px 0.5px rgba(19, 240, 148, 0.3)',
        ],
        'blue': [
          '0px 0px 10px rgba(77 180 255, 0.125)',
          '0px 0px 3px rgba(77 180 255, 0.2)',
          '0px 0px 1.3px rgba(77 180 255, 0.3)',
          '0px 0px 0.5px rgba(77 180 255, 0.6)',
        ],
        'premium': [
          '0px 0px 10px rgba(251 192 45, 0.125)',
          '0px 0px 3px rgba(251 192 45, 0.2)',
          '0px 0px 1.3px rgba(251 192 45, 0.3)',
          '0px 0px 0.5px rgba(251 192 45, 0.6)',
        ],
        'main-lg': [
          '0px 0px 3px rgba(19, 240, 148, 0.25)',
          '0px 0px 6px rgba(19, 240, 148, 0.5)',
          '0px 0px 16px rgba(19, 240, 148, 0.75)',
          '0px 0px 32px rgba(19, 240, 148, 1)',
        ]
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
    'from-purple-700',
    'from-purple-500',
    'bg-attention-300',
    'bg-attention-500',
    'bg-attention-700',
    'bg-success-300',
    'bg-success-500',
    'bg-success-700',
    'bg-info-300',
    'bg-info-500',
    'to-info-500',
    'bg-info-700',
    'bg-error-300',
    'bg-error-500',
    'bg-error-700',
    'bg-disabled-300',
    'bg-disabled-500',
    'bg-disabled-700',
    'bg-gold-300',
    'bg-gold-500',
    'bg-gold-700',
    'bg-silver-300',
    'bg-silver-500',
    'bg-silver-700',
    'bg-bronze-300',
    'bg-bronze-500',
    'bg-bronze-700',
    'bg-game-apexlegends',
    'bg-game-csgo',
    'bg-game-dota2',
    'bg-game-leagueoflegends',
    'bg-game-pubg',
    'bg-game-rocketleague',
    'bg-game-valorant',
    'fom-game-apexlegends',
    'fom-game-csgo',
    'fom-game-dota2',
    'fom-game-leagueoflegends',
    'fom-game-pubg',
    'fom-game-rocketleague',
    'fom-game-valorant',
    'to-game-apexlegends',
    'to-game-csgo',
    'to-game-dota2',
    'to-game-leagueoflegends',
    'to-game-pubg',
    'to-game-rocketleague',
    'to-game-valorant',
    'text-game-apexlegends',
    'text-game-csgo',
    'text-game-dota2',
    'text-game-leagueoflegends',
    'text-game-pubg',
    'text-game-rocketleague',
    'text-game-valorant',
  ],
}