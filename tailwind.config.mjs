/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#C42B27',
        'brand-brown': '#C9C5BC',
        'brand-navy': '#F5F1E8',
        'brand-gold': '#D4AF37',
        'brand-sky': '#E7C765',

        navy: '#F5F1E8',
        'navy-deep': '#F5F1E8',

        accent: '#C42B27',
        'accent-light': '#A61919',
        'accent-dark': '#681212',
        'accent-bright': '#E04A3A',

        gold: '#D4AF37',
        'gold-light': '#E7C765',
        'gold-muted': '#A88632',

        surface: '#111214',
        'surface-muted': '#22252A',
        'surface-alt': '#191B1F',

        border: '#2E3238',
        'border-light': '#3A3F46',
        muted: '#C9C5BC',
        'muted-dark': '#96938D',
        subtle: '#96938D',
        foreground: '#F5F1E8',
      },
      fontFamily: {
        sans: ['"Segoe UI"', '"Helvetica Neue"', 'Arial', 'system-ui', 'sans-serif'],
        display: ['Georgia', '"Times New Roman"', 'ui-serif', 'serif'],
        serif: ['Georgia', '"Times New Roman"', 'ui-serif', 'serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.18), 0 20px 60px -30px rgba(0, 0, 0, 0.7)',
        soft: '0 16px 40px -24px rgba(0, 0, 0, 0.7)',
        subtle: '0 1px 0 rgba(255,255,255,0.04), 0 15px 35px -25px rgba(0, 0, 0, 0.7)',
        card: '0 24px 50px -40px rgba(0, 0, 0, 0.75)',
        glass: '0 28px 60px -48px rgba(0, 0, 0, 0.7)',
      },
      maxWidth: {
        content: '80rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
