module.exports = {
  siteMetadata: {
    title: 'Лафче',
    description: ``,
    siteUrl: 'https://lafche.club',
    defaultImage: "/logo.png",
    events: {
      title: 'Събития',
      siteUrl: 'https://lafche.club/events',
    },
    team: {
      title: 'Екип',
      siteUrl: 'https://lafche.club/team',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-101997744-5',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `green`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Лафче',
        description: 'Лафче е платформа, която позволява на хора, които имат знания или опит в дадена сфера, да ги споделят със заинтересовани слушатели. Без излишни детайли, по един достъпен и по възможност - забавен начин.',
        short_name: 'Лафче',
        start_url: '/',
        background_color: "#FFF", //background color in splash screen
        theme_color: '#FFF', //navbar color
        lang: 'bg',
        display: 'standalone',
        icon: 'src/images/logo_transparent.png',
        icons: [ // Add or remove icon sizes as desired
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
  ],
}
