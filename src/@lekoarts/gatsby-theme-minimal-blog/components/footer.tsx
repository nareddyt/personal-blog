/**
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/footer.tsx
 * to add extra elements to footer.
 * */

/** @jsx jsx */
import { jsx } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import OutboundLink from "../../../components/outbound-link";
import { Link } from "gatsby";

const Footer = () => {
  const { author } = useSiteMetadata();

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
        &copy; {new Date().getFullYear()} by
        {` `}
        <OutboundLink
          ariaLabel="Link to the author's github"
          href="https://github.com/nareddyt"
        >
          {author}.
        </OutboundLink>
        <br />
        All rights reserved.
      </div>
      <div
        sx={{
          textAlign: `center`,
        }}
      >
        <OutboundLink
          ariaLabel="Link to the website's GitHub repository"
          href="https://github.com/nareddyt/personal-blog"
        >
          This website is open source!
        </OutboundLink>
        <br />
        <Link to="/attributions">Creative commons attributions.</Link>
      </div>
    </footer>
  );
};

export default Footer;
