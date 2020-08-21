module.exports = {
  prefix: 'tw-',
  important: true,
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        main_green: '12394E',
        main_blue: '12324D',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '110': '30rem',
        '75vh': '75vh',
        '120': '40rem',
        '128': '42.75rem',
        '192': '48rem',
        '384': '96rem',
        '80vh': '80vh',
      },
    },
  },
}
