/**
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/footer.tsx
 * to add extra elements to footer and fix padding sizes.
 * */

/** @jsx jsx */
import { jsx } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import OutboundLink from "../../../components/outbound-link";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const { author } = useSiteMetadata();

  // https://web.dev/accessible-tap-targets/
  const isTouchScreen = useMediaQuery({
    query: "(pointer: coarse)",
  });

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
          paddingTop: isTouchScreen ? "8px" : undefined,
          lineHeight: isTouchScreen ? 2 : undefined,
        }}
      >
        &copy; {new Date().getFullYear()} by
        {` `}
        <OutboundLink
          ariaLabel="Link to the author's github"
          href="https://github.com/nareddyt"
        >
          {author}.
        </OutboundLink>
        {` `}
        All rights reserved.
      </div>
      <div
        sx={{
          textAlign: `center`,
          paddingTop: isTouchScreen ? "8px" : undefined,
          lineHeight: isTouchScreen ? 2 : undefined,
        }}
      >
        <OutboundLink
          ariaLabel="Link to the website's GitHub repository"
          href="https://github.com/nareddyt/personal-blog"
        >
          This website is open source!
        </OutboundLink>
        {` `}
        Creative commons
        {` `}
        <Link
          to="/attributions"
          sx={(t) => ({
            ...t.styles?.a,
            paddingTop: isTouchScreen ? "8px" : undefined,
          })}
        >
          attributions.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
