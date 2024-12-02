/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {


      fontFamily: {
        'sans': ['"Inter var"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'Candy_Grape_Fizz':'#6C58F1',
        'Paua':'#6C58F1',
        'Haiti':'#191333',
        'Llilacquered':{
          '700':'#DC6FB9',
          '800':'#F87DD0',
          '900':'#C060A1',
        },
        'Moonraker':'#C8ACD6',
        'Corbeau':{
          
          '800':'#302568',
          '900':'#0D0A1C',
        },
    },
    keyframes: {
      blob: {
        '0%': { transform: 'translate(0px,0px)' },
        
        '50%': { transform: 'translate(100px,0px)' },
        
        '100%': { transform: 'translate(0px,0px)' },
      },
      collapse: {
        '0%': { width: '100%' },
        
        
        

        '100%':  { width: '600px' , transform: 'translate(0,10px)' },
       
      },
      recollapse: {
        '0%': { width: '600px' , transform: 'translate(0,10px)'  },
        
        
        '100%':  { width: '100%'},
        
      },
      slide:{
        '0%': { transform: 'translate(0,0)'  },
        '100%':  { transform: 'translate(80px,0)'  },
      },
    },

    animation: {
      'blob': 'blob 8s linear infinite',
      'collapse': 'collapse 1000ms ease-in-out 1 forwards',
      'recollapse': 'recollapse 500ms ease-in 1 forwards',
      'slide': 'slide 1000ms ease-in-out 1 forwards',
    },
  },
  },
  plugins: [],
}

