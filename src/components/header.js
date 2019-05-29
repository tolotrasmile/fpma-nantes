import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

function HeaderLink({ to, children }) {
  const [isActive, setActive] = React.useState(false)
  const setIsActive = React.useCallback(active => setActive(active), [to])

  React.useEffect(() => {
    setIsActive(() => window.location.pathname === to)
  }, [to])

  return (
    <li
      css={css`
        height: var(--header-height);
        margin: 0;
      `}
    >
      <Link
        to={to}
        css={css`
          text-decoration: none;
          font-size: 1.2rem;
          padding-left: 1rem;
          padding-right: 1rem;
          transition: color 0.3s ease-in;
          color: ${isActive ? "rgb(218, 27, 96)" : null};
        `}
        activeClassName="active"
      >
        {children}
      </Link>
      <div
        css={css`
          margin: 0;
          padding: 0;
          margin-top: -2px;
          background: ${isActive ? "rgb(218, 27, 96)" : null};
          transition: background 0.3s ease-in;
          height: 2px;
        `}
      />
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
