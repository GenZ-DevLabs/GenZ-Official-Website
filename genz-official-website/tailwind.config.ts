import type { Config } from "tailwindcss";

/**
 * Design tokens transcribed from the GenZ DevLabs Figma file
 * https://www.figma.com/design/1WCYBq7CgJ1IiuYT341WBj/Genz-Website?node-id=360-889
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#05BEDD",   // primary accent — headings, highlights
          blue: "#3294F4",   // gradient terminus
          sky: "#34AAFF",    // outline button border
          teal: "#6ECDDD",   // nav underline
        },
        ink: "#2D2D2D",      // body headline colour
        muted: "#808080",    // paragraph copy
        placeholder: "#BDBDBD",
        divider: "#CECECE",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // 259.23deg gradient used on every filled CTA
        "brand-gradient":
          "linear-gradient(259.23deg, #3294F4 15.65%, #05BEDD 90.47%)",
        // 228.54deg variant used on the "Why Choose Us" cards
        "brand-card":
          "linear-gradient(228.54deg, #3294F4 3.81%, #05BEDD 96.68%)",
        "brand-card-alt":
          "linear-gradient(134.08deg, #3294F4 5.17%, #05BEDD 95.45%)",
        // vertical gradient behind the hero words
        "brand-text":
          "linear-gradient(178deg, #05BEDD 24.17%, #3294F4 72.21%)",
      },
      boxShadow: {
        nav: "0px 4px 25px 0px rgba(0,0,0,0.07)",
        "nav-up": "0px -4px 25px 0px rgba(0,0,0,0.07)",
        card: "0px 3px 36px 0px rgba(0,0,0,0.25)",
        thumb: "0px 4px 36px 0px rgba(0,0,0,0.25)",
        field: "0px 0px 7px 0px rgba(0,0,0,0.25)",
        panel: "0px 2px 17px 0px rgba(0,0,0,0.25)",
        outline: "1px 5px 12px 0px rgba(52,170,255,0.7)",
      },
      borderRadius: {
        card: "15px",
      },
      maxWidth: {
        shell: "1300px",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-10px)" },
        },
        caret: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        caret: "caret 1s step-end infinite",
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
