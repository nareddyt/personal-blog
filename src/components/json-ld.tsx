/**
 * JSON-LD schemas (typed) for rich google search results.
 */

import * as React from "react"
import type { MBPostProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/post"
import { JsonLd } from "react-schemaorg";
import { ProfilePage, Person, BlogPosting } from "schema-dts";

export const PostStructedData = (props: MBPostProps) => {
  return (
    <JsonLd<BlogPosting>
      item={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": props.post.title,
        "image": [
          // TODO(nareddyt)
          // post.banner?.childImageSharp?.resize?.src,
        ],
        "datePublished": props.post.date,
        "author": [
          {
            "@type": "Person",
            "name": "Teju Nareddy",
            "sameAs": "https://tejunareddy.com/about"
          },
        ]
      }}
    />
  )
}

export const AboutTejuStructuredData = () => {
  return (
    <JsonLd<Person>
      item={{
        "@context": "https://schema.org",
        "@type": "Person",
        "alternateName": "Tejasvi Nareddy",
        "birthDate": "1997-04-12",
        "email": "tejunareddy@gmail.com",
        "familyName": "Nareddy",
        "gender": "Male",
        "givenName": "Teju",
        "image": "https://tejunareddy.com/profile.jpg",
        "jobTitle": "Software Engineer",
        "url": "http://www.tejunareddy.com/about",
      }}
    />
  )
}

export const AboutWebsiteStructuredData = () => {
  return (
    <JsonLd<ProfilePage>
      item={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "url": "http://www.tejunareddy.com/about",
        "license": "https://github.com/nareddyt/personal-blog/blob/main/LICENSE",
        "keywords": [
          "personal website",
          "about",
          "teju nareddy",
        ],
        "significantLinks": [
          "http://www.tejunareddy.com",
          "http://www.tejunareddy.com/blog",
          "http://www.tejunareddy.com/about",
        ],
        "mainEntity": {
          "@type": "Person",
          "name": "Teju Nareddy",
          "sameAs": "https://tejunareddy.com/about",
        }
      }}
    />
  )
}
