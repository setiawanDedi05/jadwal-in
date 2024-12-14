/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3875F6",
        "card-background": "#F6F8FA",
        secondary: "#969BA0",
        error: "#F43F5E",
        success: "#40C79A",
        muted: "#7B8190",
        "date-background": "#F7F7F7",
        "weekend-color": "#EC2A4D",
        "title-card": "#172D43",
      },
      borderRadius: {
        "rounded-button": "40px",
        "rounded-card": "12px",
      },
    },
  },
  plugins: [],
};
