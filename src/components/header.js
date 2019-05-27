import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import React from "react"

function HeaderLink({ to, children }) {
  return (
    <li
      css={css`
        padding-left: 1rem;
        padding-right: 1rem;
        margin: 0;
        .active {
          border-left-color: rgb(32, 28, 41);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(32, 28, 41);
          border-right-style: solid;
          border-right-width: 1px;
        }
      `}
    >
      <Link
        to={to}
        css={css`
          text-decoration: none;
          height: 70px;
        `}
        activeClassName="active"
      >
        {children}
      </Link>
    </li>
  )
}

const Header = ({ title }) => (
  <header
    css={css`
      margin-bottom: 1.45rem;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      ul {
        list-style: none;
        list-style-image: none;
        display: flex;
        align-items: "center";
        line-height: 70px;
      }
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <h1
        css={css`
          margin: 0;
          font-size: 2em;
          padding: 0 1rem;
          line-height: 70px;
          font-size: 1.5rem;
          height: 70px;
        `}
      >
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </h1>
      <nav
        css={css`
          display: block;
        `}
      >
        <ul style={{ margin: 0 }}>
          <HeaderLink to="/stk">STK</HeaderLink>
          <HeaderLink to="/hello">hello</HeaderLink>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
