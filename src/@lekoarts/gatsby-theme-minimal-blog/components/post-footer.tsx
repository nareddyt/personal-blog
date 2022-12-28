/** 
 * Gatsby shadow for
 * https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/post-footer.tsx 
 * to add JSON-LD (for rich Google Search results).
 * */

import * as React from "react"
import type { MBPostProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/post"
import { PostStructedData } from "../../../components/json-ld";

const PostFooter = (props: MBPostProps) => {
  return (
    <PostStructedData {...props} />
  );
}

export default PostFooter
