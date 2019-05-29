/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header title={data.site.siteMetadata.title} />
        <div
          css={css`
            background-color: white;
            padding: 3rem 0;
            z-index: 10;
          `}
        >
          <div
            css={css`
              margin: 0 auto;
              background-color: #fff;
              padding: 3em;
              border-radius: 10px;
            `}
          >
            <main>{children}</main>
            <footer
              css={css`
                margin-top: 2rem;
              `}
            >
              © FPMA Nantes {new Date().getFullYear()}
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
