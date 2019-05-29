import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import MoreButton from "../components/more-button"
import SEO from "../components/seo"

function Event({
  day = "30",
  month = "Mai",
  title = "Prochain culte",
  subtitle,
  link,
}) {
  return (
    <article
      css={css`
        padding: 2em;
        display: flex;
      `}
    >
      <div
        css={css`
          margin-right: 2rem;
          background: linear-gradient(0deg, #da1b60 0%, #ff8a00 100%);
          border-radius: 5px;
          padding: 0.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        `}
      >
        <h2>{day}</h2>
        <h4>{month}</h4>
      </div>
      <div>
        <div
          css={css`
            margin-right: 10rem;
          `}
        >
          <h2>{String(title).toUpperCase()}</h2>
          <div>jeudi</div>
        </div>
      </div>
      <MoreButton to="/events">DETAILS</MoreButton>
    </article>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <div>
      <h1
        css={css`
          background: linear-gradient(
            to right,
            rgb(255, 138, 0),
            rgb(218, 27, 96)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1em;
          font-size: 5em;
        `}
      >
        Paroisse de Nantes
      </h1>
      <h3 style={{ color: "#333" }}>> Église Protestante Malgache en France</h3>
      <section>
        <h1
          css={css`
            font-size: 2em;
            margin: 2rem 0 1rem 0;
          `}
        >
          Evènements
        </h1>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </section>
      <section>
        <h1
          css={css`
            font-size: 2em;
            margin: 2rem 0 1rem 0;
          `}
        >
          Evènements
        </h1>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </section>
    </div>
  </Layout>
)

export default IndexPage
