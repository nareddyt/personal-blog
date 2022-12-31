/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { OutboundLink as AnalyticsOutboundLink } from "gatsby-plugin-google-gtag"

export interface OutboundLinkProps {
  href?: string
  ariaLabel?: string
  children: React.ReactNode
}

const OutboundLink = (props: OutboundLinkProps) => {
  return (
    <AnalyticsOutboundLink
      href={props.href}
      aria-label={props.ariaLabel}
      sx={{
        textDecoration: 'none',
        "&:hover": {
          textDecoration: 'underline',
        },
        transition: "all 0.3s ease-in-out",
      }}
    >
      {props.children}
    </AnalyticsOutboundLink>
  )
}

export default OutboundLink