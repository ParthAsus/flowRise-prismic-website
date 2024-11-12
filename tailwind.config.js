/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    fontFamily: {
      display: ["var(--font-nunito-sans)"],
      body: ["var(--font-nunito)"],
    }
  },
},
  plugins: [],
}


// content: [
//   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
//   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
// ],
// theme: {
//   extend: {
//     fontFamily: {
//       display: ["var(--font-nunito-sans)"],
//       body: ["var(--font-nunito)"],
//     }
//   },
// },
