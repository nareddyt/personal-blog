/** 
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/footer.tsx 
 * */

/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Footer = () => {
  const { author } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div 
        sx={{
          textAlign: `center`,
        }}
      >
        &copy; {new Date().getFullYear()} by {author}.
        <br/>
        All rights reserved.
      </div>
      <div 
        sx={{
          textAlign: `center`,
        }}
      >
        View this website's
        {` `}
        <OutboundLink
          aria-label="Link to the website's GitHub repository"
          href="https://github.com/nareddyt/personal-blog"
        >
          source code
        </OutboundLink>
        {` `}
        on Github.
        <br/>
        <OutboundLink
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
        >
          Gatsby theme
        </OutboundLink>
        {` `}
        by
        {` `}
        <OutboundLink
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
        >
          @LekoArts
        </OutboundLink>
        .
      </div>
    </footer>
  )
}

export default Footer
