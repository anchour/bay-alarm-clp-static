import path from "path";

console.log(path.resolve(process.cwd(), "./src/resources/images"));

export default {
  plugins: {
    "postcss-inline-svg": {
      paths: [path.resolve(process.cwd(), "./src/resources/images")],
    },
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
