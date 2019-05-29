import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import React from "react"

function HeaderLink({ to, children }) {

  React.useEffect(() => {
    
  })

  return (
    <li
      css={css`
        height: var(--header-height);
        margin: 0;
        border-bottom: 2px solid red;
      `}
    >
      <Link
        to={to}
        css={css`
          text-decoration: none;
          font-size: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        `}
        activeClassName="active"
      >
        {children}
      </Link>
    </li>
  )
}

function Header({ title }) {
  return (
    <header
      css={css`
        padding: 0 1rem;
        background-color: white;
        z-index: 1000;
        border-bottom: 1px solid #ddd;
        ul {
          list-style: none;
          list-style-image: none;
          display: flex;
          align-items: "center";
          line-height: var(--header-height);
        }
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <h1
          css={css`
            margin: 0;
            font-size: 2em;
            line-height: var(--header-height);
            font-size: 1.5rem;
            height: var(--header-height);
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
            <HeaderLink to="/">Accueil</HeaderLink>
            <HeaderLink to="/sections">Sections</HeaderLink>
            <HeaderLink to="/hello">hello</HeaderLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
