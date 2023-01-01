/** @jsx jsx */
import * as React from "react";
import { useMediaQuery } from "react-responsive";

// Defaults to web page when rendering in server.
export const isTouchScreen = () => {
  // https://github.com/yocontra/react-responsive/issues/162#issuecomment-592082035
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  });

  // https://web.dev/accessible-tap-targets/
  const detectedTouchScreen = useMediaQuery({
    query: "(pointer: coarse)",
  })

  // Short circuiting must happen after ALL other hooks.
  // https://stackoverflow.com/a/65558219/4402434
  return isClient && detectedTouchScreen
};
