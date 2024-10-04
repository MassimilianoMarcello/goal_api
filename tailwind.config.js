// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './views/**/*.ejs',
//     './public/**/*.js',
//     './components/**/*.js',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './views/**/*.ejs', // Include tutti i file EJS
    './public/**/*.js', // Includi i tuoi file JavaScript
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}




