/**
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/mdx-components.tsx
 * to add Google Analytics.
 *
 * Based on https://theme-ui.com/mdx/linked-headings.
 * */

import OutboundLink from "../../../components/outbound-link";
import { LinkProps } from "theme-ui";
import React from "react";
import originalComponents from "@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components";

const rewriteLinks = (props: LinkProps) => (
  <OutboundLink href={props.href} ariaLabel={props.title}>
    {props.children}
  </OutboundLink>
);

const MdxComponents = {
  a: rewriteLinks,
  ...originalComponents,
};

export default MdxComponents;
