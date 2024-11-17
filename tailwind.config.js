module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        customRed: {
          DEFAULT: '#EE1925',  // Use HEX color code here
        },
      },
      fontFamily: {
        abyssinica: ['"Abyssinica SIL"', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};


