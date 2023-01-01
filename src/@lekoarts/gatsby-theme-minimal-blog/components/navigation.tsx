/**
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/navigation.tsx
 * to fix button padding.
 * */

/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import { isTouchScreen } from "../../../utils/responsive";

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
  }[];
};

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            a: {
              mr: 3,
            },
            fontSize: [1, `18px`],
            ".active": { color: `heading` },
            paddingTop: isTouchScreen() ? "8px" : undefined,
          }}
        >
          {nav.map((item) => (
            <Link
              activeClassName="active"
              key={item.slug}
              sx={(t) => ({
                ...t.styles?.a,
                paddingTop: isTouchScreen() ? "8px" : undefined,
              })}
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navigation;
