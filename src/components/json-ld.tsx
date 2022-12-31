/**
 * JSON-LD schemas (typed) for rich google search results.
 */

import * as React from "react";
import type { MBPostProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/post";
import { JsonLd } from "react-schemaorg";
import { ProfilePage, Person, BlogPosting } from "schema-dts";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

export const PostStructedData = (props: MBPostProps) => {
  const site = useSiteMetadata();

  const imageSource = props.post.banner?.childImageSharp?.resize?.src;
  const imageSchema = imageSource ? [`${site.siteUrl}${imageSource}`] : [];

  return (
    <JsonLd<BlogPosting>
      item={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: props.post.title,
        image: imageSchema,
        datePublished: props.post.date,
        author: [
          {
            "@type": "Person",
            name: "Teju Nareddy",
            sameAs: `${site.siteUrl}/about`,
          },
        ],
      }}
    />
  );
};

export const AboutTejuStructuredData = () => {
  const site = useSiteMetadata();

  return (
    <JsonLd<Person>
      item={{
        "@context": "https://schema.org",
        "@type": "Person",
        alternateName: "Tejasvi Nareddy",
        birthDate: "1997-04-12",
        email: "tejunareddy@gmail.com",
        familyName: "Nareddy",
        gender: "Male",
        givenName: "Teju",
        image: `${site.siteUrl}/profile.jpg`,
        jobTitle: "Software Engineer",
        url: `${site.siteUrl}/about`,
      }}
    />
  );
};

export const AboutWebsiteStructuredData = () => {
  const site = useSiteMetadata();

  return (
    <JsonLd<ProfilePage>
      item={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: `${site.siteUrl}/about`,
        license: "https://github.com/nareddyt/personal-blog/blob/main/LICENSE",
        keywords: ["personal website", "about", "teju nareddy"],
        significantLinks: [
          `${site.siteUrl}`,
          `${site.siteUrl}/blog`,
          `${site.siteUrl}/about`,
        ],
        mainEntity: {
          "@type": "Person",
          name: "Teju Nareddy",
          sameAs: `${site.siteUrl}/about`,
        },
      }}
    />
  );
};
