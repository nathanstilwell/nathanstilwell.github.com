/*eslint-disable */
module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './node_modules',
        aliases: {
          'styled-components': './styled-components'
        }
      }
    }
  ]
};
