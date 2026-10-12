/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4F5F7',
        surface: '#FFFFFF',
        charcoal: {
          DEFAULT: '#1F2937',
          light: '#374151',
          muted: '#6B7280',
          dark: '#111827',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        stitch: {
          bg: '#F4F5F7',
          card: '#FFFFFF',
          text: '#1F2937',
          subtext: '#6B7280',
          accent: '#10B981',
          mint: '#0BBC83',
          darkMint: '#00775A',
          border: '#E5E7EB',
          pill: '#EEF2FF',
        }
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
      },
      boxShadow: {
        'soft': '0 14px 34px rgba(33, 47, 68, 0.06)',
        'soft-hover': '0 20px 40px rgba(33, 47, 68, 0.10)',
        'glow-emerald': '0 10px 25px -5px rgba(16, 185, 129, 0.3)',
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 1.8s infinite linear',
        'pulse-subtle': 'pulseSubtle 2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
