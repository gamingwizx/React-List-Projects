import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --bg-zinc-50:  rgb(250 250 250);
  --bg-zinc-100: rgb(244 244 245);
  --bg-zinc-200: rgb(228 228 231);
  --bg-zinc-300: rgb(212 212 216);

  --bg-blue-50: rgb(239 246 255);
  --bg-blue-100: rgb(219 234 254);
  --bg-blue-200: rgb(191 219 254);
  --bg-blue-300: rgb(147 197 253);
  --bg-blue-400: rgb(96 165 250);
  --bg-blue-500: rgb(59 130 246);
  --bg-blue-600: rgb(37 99 235);
  --bg-blue-700: rgb(29 78 216);

  
  --bg-gray-50: #F9FAFB;
  --bg-gray-100: #F3F4F6;
  --bg-gray-200: #E5E7EB;
  --bg-gray-300: #D1D5DB;
  --bg-gray-400: #9CA3AF;
  --bg-gray-500: #6B7280;
  --bg-gray-600: #4B5563;
  --bg-gray-700: #374151;
  --bg-gray-800: #1F2937;
  --bg-gray-900: #111827;

  --bg-indigo-50: rgb(238 242 255);
  --bg-indigo-100: rgb(224 231 255);
  --bg-indigo-200: rgb(199 210 254);
  --bg-indigo-300: rgb(165 180 252);
  --bg-indigo-400: rgb(129 140 248);
  --bg-indigo-500: rgb(99 102 241);
  --bg-indigo-600: rgb(79 70 229);
  --bg-indigo-700: rgb(67 56 202);
  --bg-indigo-800: rgb(55 48 163);
  --bg-indigo-900: rgb(49 46 129);
  --bg-indigo-950: rgb(30 27 75);

  --bg-green-50: rgb(240 253 244);
  --bg-green-100: rgb(220 252 231);
  --bg-green-200: rgb(187 247 208);
  --bg-green-300: rgb(134 239 172);
  --bg-green-400: rgb(74 222 128);
  --bg-green-500: rgb(34 197 94);
  --bg-green-600: rgb(22 163 74);
  --bg-green-700: rgb(21 128 61);
  --bg-green-800: rgb(22 101 52);
  --bg-green-900: rgb(20 83 45);
  --bg-green-950: rgb(5 46 22);

  --bg-yellow-50: rgb(254 252 232);
  --bg-yellow-100: rgb(254 249 195);
  --bg-yellow-200: rgb(254 240 138);
  --bg-yellow-300: rgb(253 224 71);
  --bg-yellow-400: rgb(250 204 21);
  --bg-yellow-500: rgb(234 179 8);
  --bg-yellow-600: rgb(202 138 4);
  --bg-yellow-700: rgb(161 98 7);
  --bg-yellow-800: rgb(133 77 14);
  --bg-yellow-900: rgb(113 63 18);
  --bg-yellow-950: rgb(66 32 6);

  --fs-1: 8rem;
  --fs-2: 6rem;
  --fs-3: 4.5rem;
  --fs-4: 3.75rem;
  --fs-5: 3rem;
  --fs-6: 2.25rem;
  --fs-7: 1.875rem;
  --fs-8: 1.5rem;
  --fs-9: 1.25rem;
  --fs-10: 1.125rem;
  --fs-11: 1rem;
  --fs-12: 0.875rem;
  --fs-13: 0.75rem;

  --spacing: 1rem;
  --border-radius: 0.5rem;

  --layout-width: 80%;
}


a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
font-family: "Poppins", sans-serif;
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: auto;
  background-color: var(--bg-zinc-100);
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`

export default GlobalStyles