/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors:{
        'b1':'#071822',
        'b2':'#1B2A34',
        'b3':'#22A6AB',
        'b4':'#F8D357',
        'b5':'#FAFAFA',
        'b6':'#22A6AB',
        'b7':'#FF9B3E',
        'b8':'#EDF8F8',
        'b9':'#016FD0',
        'b10':'#2FB956',
        'b11':'#F5F5F5',
        'b12':'#2BD35A',
        't1':'#22A6AB',
      },
    },
  },
  plugins: [],
}
