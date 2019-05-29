import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

function MoreButton({ children, ...props }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Link
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1em;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          background: linear-gradient(
            to right,
            rgb(255, 138, 0),
            rgb(218, 27, 96)
          );
          :hover > svg {
            margin-left: 1rem;
          }
        `}
        {...props}
      >
        {children}
        <svg
          css={css`
            margin-left: 0.5em;
            transition: margin-left 0.3s ease-in;
          `}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-arrow-right"
        >
          <path
            d="M7 12.5L23 12.5"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 12.5H2"
            stroke="url(#paint1_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 7L23 12.5L17.5 18"
            stroke="url(#paint2_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="10.7498"
              y1="12.5"
              x2="11.3447"
              y2="9.73465"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF" />
              <stop offset="1" stopColor="#FFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="1.23436"
              y1="12.5"
              x2="2.00945"
              y2="12.2748"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF" />
              <stop offset="1" stopColor="#FFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="18.789"
              y1="17.9995"
              x2="23.3162"
              y2="17.3419"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF" />
              <stop offset="1" stopColor="#FFF" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </div>
  )
}

export default MoreButton
