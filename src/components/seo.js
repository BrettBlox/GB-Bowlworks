import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, siteUrl }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            link={[
              {
                href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
                rel: 'stylesheet',
                type: 'text/css',
              },
            ]}
            script={[
              {
                type: 'text/javascript',
                url: '',
                id: 'snipcart',
                'data-api-key': 'NzZhZGMxMGEtMjZkMS00MzQ4LWE3YmMtNzY1MmE0NmRmYzI4NjM2ODQwNTIzODg1MTYwNjg4',
                src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
                async: true,
                defer: true,
              },
              {
                type: 'text/javascript',
                src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                async: true,
                defer: true,
              },
            ]}
            title={title}
            url={siteUrl}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`
