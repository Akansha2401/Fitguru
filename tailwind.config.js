/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    // screens:{
    //   'ssm':'400px',
    // },
    
    extend: {
      colors: {
        primary: "#FF8C00",
      },
      screens: {
        sm: "480px",
      },
      content: {
        oval: 'url("orange1.png")',
      },
    },
  },
  plugins: [],
};
