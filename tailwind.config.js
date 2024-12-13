/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'panel-bg': "url('./assets/panel-bg.jpg')",
        'select-arrow': "url('./assets/down.png')",
        'search-icon': "url('./assets/search-icon.png')",
      },
      backgroundPosition: {
        'select-arrow': 'right 5px center',
        'search-icon': 'left 8px center',
      },
      backgroundSize: {
        'select-arrow': '15px 15px',
        'search-icon': '22px 20px',
      },
      colors: {
        'primary': '#E904CF',
        'secondary': '#110554',
        'high': '#FA2323',
        'medium-high': '#FAF023',
        'medium': '#39FF32',
        'medium-low': '#0555F9',
        'low': '#E6E6E6',
      },
      width: {
        'priority-small': '15px',
        'priority-medium': '17px',
        'priority-huge': '25px',
      },
      height: {
        'priority-small': '15px',
        'priority-medium': '17px',
        'priority-huge': '25px',
      },
      boxShadow: {
        'high': '0 0 10px 0px rgba(250, 35, 35, 0.5)',
        'medium-high': '0 0 10px 0px rgba(250, 240, 35, 0.5)',
        'medium': '0 0 10px 0px rgba(57, 255, 50, 0.5)',
        'medium-low': '0 0 10px 0px rgba(5, 85, 249, 0.5)',
        'low': '0 0 10px 0px rgba(230, 230, 230, 0.5)',
      }
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      const sortingBox = {
        '.sorting-box': {
          backgroundColor: 'white',
          padding: '0.5rem',
          position: 'absolute',
          zIndex: 2,
          minWidth: '200px',
          right: 0,
          borderRadius: '0.5rem',
          top: '40px'
        },
        '.sorting-box > li': {
           width:'100%'
        },
        '.sorting-box > li > button': {
          color: '#110554',
          fontWeight: '300',
          padding: '0.25rem',
          width: '100%',
          textAlign: 'left',
          borderRadius: '5px',
          paddingLeft: '1rem',
        },
        '.sorting-box > li > button:hover':{
          backgroundColor:'#110554',
          color:'white'
        }
      };
      addComponents(sortingBox);
    }),
    require('tailwind-scrollbar-hide'),
  ],
};
