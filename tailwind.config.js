/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue,svelte}"],
  safelist: [
    "bg-[var(--color-mercury)]",
    "bg-[var(--color-venus)]",
    "bg-[var(--color-earth)]",
    "bg-[var(--color-mars)]",
    "bg-[var(--color-jupiter)]",
    "bg-[var(--color-saturn)]",
    "bg-[var(--color-uranus)]",
    "bg-[var(--color-neptune)]",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        monaspace: ["Monaspace", "monospace"],
        worksans: ["worksans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
