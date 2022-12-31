require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: `Teju Nareddy`,
    siteTitleAlt: `Teju Nareddy`,
    siteHeadline: `Teju Nareddy - Google Cloud SWE and Smart Home Enthusiast`,
    siteUrl: `https://tejunareddy.com`,
    siteDescription: `Teju Nareddy's personal website and blog. Learn more about him, his work, and his hobbies.`,
    siteImage: `/banner.jpg`,
    author: `@nareddyt`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-LXHVPDVGKF", // Google Analytics: GA4
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body.
          // No need to worry about slow loading times.
          head: true,
          // Avoids sending pageview hits from custom paths.
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Talks`,
            slug: `/talks`,
          },
          {
            title: `Articles`,
            slug: `/articles`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/nareddyt`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/tejasvinareddyteju/`,
          },
        ],
        showLineNumbers: true,
        formatString: "dddd, MMMM Do, YYYY",
        postsPrefix: "/blog/",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teju Nareddy's Blog`,
        short_name: `Teju's Blog`,
        description: `Teju Nareddy's personal website and blog. Learn more about him, his work, and his hobbies.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                };
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `/rss.xml`,
            title: `Teju Nareddy's Blog RSS Feed`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
