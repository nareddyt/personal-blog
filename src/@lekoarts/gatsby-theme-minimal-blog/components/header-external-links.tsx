/** 
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/header-external-links.tsx 
 * to add Google Analytics.
 * */

/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import OutboundLink from "../../../components/outbound-link"

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <OutboundLink
              key={link.url}
              href={link.url}
              ariaLabel="Link to external social media"
            >
              {link.name}
            </OutboundLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks