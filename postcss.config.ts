import {type Config as PostCSSConfig} from 'postcss-load-config'
// Config  from "postcss";

const config: PostCSSConfig = {
  plugins: {
    "@tailwindcss/postcss": {},
    // tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;


// import type { Config } from "postcss";

// const config: Config = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// export default config;
