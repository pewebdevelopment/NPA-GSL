


export default defineNuxtConfig({
  srcDir: "./",
  css: [
    '@/assets/css/main.css',
  ],

  buildModules: [
    '@pinia/nuxt',
    
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  alias: {
    // 'aws-amplify': 'aws-amplify/lib/',
    '@aws-amplify/core': '@aws-amplify/core/lib',
    '@aws-amplify/auth': '@aws-amplify/auth/lib',
      './runtimeConfig': './runtimeConfig.browser',
  },

  vite: {
    define: {
        'window.global': {} // Amplify fix, pt. 2
    },
}



});




