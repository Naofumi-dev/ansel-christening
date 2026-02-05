import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
<<<<<<< HEAD
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        driver: {
          blue: '#0ea5e9',
          red: '#ef4444',
          chrome: '#e5e7eb',
          dark: '#0f172a',
        },
        games: {
          forest: '#059669',
          fire: '#f97316',
          gold: '#fbbf24',
          coal: '#1c1917',
        },
        brand: {
          primary: '#1e40af',
          secondary: '#c2410c',
          accent: '#dc2626',
          dark: '#030712',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(239,68,68,0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(249,115,22,0.8)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'fire-gradient': 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)',
        'forest-gradient': 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)',
        'speed-gradient': 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 50%, #ef4444 100%)',
=======
  theme: {
    extend: {
      colors: {
        // Baby Driver inspired - cool blues and reds
        'driver': {
          'blue': '#1a365d',
          'red': '#dc2626',
          'chrome': '#e5e7eb',
          'asphalt': '#1f2937',
          'sky': '#38bdf8',
        },
        // Hunger Games inspired - earthy greens and oranges
        'games': {
          'forest': '#064e3b',
          'fire': '#ea580c',
          'gold': '#fbbf24',
          'coal': '#292524',
          'wheat': '#fef3c7',
        },
        // Combined palette
        'ansel': {
          'primary': '#1e3a5f',
          'secondary': '#b45309',
          'accent': '#dc2626',
          'muted': '#f5f5f4',
          'dark': '#171717',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'tire-track': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h60v2H0zM0 30h60v2H0zM0 50h60v2H0z' fill='%23374151' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        'arrow-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5l5 10h-10z' fill='%23064e3b' fill-opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'drive': 'drive 8s linear infinite',
        'flame': 'flame 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        flame: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
      },
    },
  },
  plugins: [],
}

export default config
