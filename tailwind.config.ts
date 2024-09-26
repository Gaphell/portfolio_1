import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        squada: ['"Squada One"', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#0057FF',
        secondary: '#007165',
      },
      keyframes: {
        scrollWave: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-50%)'}, // Moves the container left by 50%
        },
        rotateAnimation: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        }, // Add rotate animation
        typingAnimation: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        },
        blinkAnimation: {
          '0%, 100%': {borderColor: 'transparent'},
          '50%': {borderColor: 'currentColor'},
        },
        gradientAnimation: {
          "0%": {
            "background-position": "0% 50%",
            'background-size': '200% 200%', // Ensures smooth animation
          },
          "50%": {
            "background-position": "100% 50%",
            'background-size': '200% 200%', // Ensures smooth animation
          },
          "100%": {
            "background-position": "0% 50%",
            'background-size': '200% 200%', // Ensures smooth animation
          }
        },
        flicker: {
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0.2'},
        },
        loaderBlink: {
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0'},
        },
        breathe: {
          '0%, 100%': {
            transform: 'scale(1.25)',
            'transform-origin': 'center',
          },
          '50%': {
            transform: 'scale(1.05)',
            'transform-origin': 'center',
          }
        }
      },
      animation: {
        'scroll-wave': 'scrollWave 10s linear infinite', // Adjust timing as needed
        'rotate': 'rotateAnimation 10s linear infinite', // Add rotate animation
        typing: 'typingAnimation 5s steps(30, end) forwards', // Adjust duration and steps as needed
        blink: 'blinkAnimation 0.6s step-end infinite',
        gradient: 'gradientAnimation 3s ease infinite',
        flicker: 'flicker 1s infinite',
        loaderBlink: 'loaderBlink 1s infinite',
        breathing: 'breathe 3s infinite'
      },
      
    },
  },
  plugins: [],
};
export default config;
