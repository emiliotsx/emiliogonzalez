module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sz: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          green: 'var(--green)',
          'ligth-green': 'var(--ligth-green)',
          red: 'var(--red)',
          blue: 'var(--blue)',
          yellow: 'var(--yellow)',
          dark: 'var(--dark)',
          white: 'var(--white)',
          transparent: 'var(--transparent)'
        }
      },
      backgroundColor: {
        sz: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          green: 'var(--green)',
          'ligth-green': 'var(--ligth-green)',
          red: 'var(--red)',
          blue: 'var(--blue)',
          yellow: 'var(--yellow)',
          dark: 'var(--dark)',
          white: 'var(--white)',
          transparent: 'var(--transparent)'
        }
      }
    }
  },
  plugins: []
}
