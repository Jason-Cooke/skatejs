import css from "@skatejs/shadow-css";

export const global = css`
  :root {
    --background-color: #f2f5eb;
    --font-family: helvetica;
    --font-size: 1em;
    --grid: 20px;
    --line-height: 1.4em;
    --text-color: #333;
  }
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    margin: 0;
    padding: 0;
  }
`;

export const shared = css`
  a {
    color: #f2567c;
    text-decoration: none;
  }
  blockquote {
    background-color: #dce4ca;
    border-left: 3px solid #c6d3a8;
    font-style: italic;
    margin: 20px 0;
    padding: 10px 15px;
  }
  blockquote code {
    background-color: transparent;
    display: inline;
    padding: 0;
  }
  blockquote p {
    margin: 0;
  }
  code {
    background-color: #dce4c9;
    display: inline-block;
    font-family: monaco;
    font-size: 0.8em;
    padding: 0 8px;
  }
  h1 {
    font-size: 2.5em;
    font-weight: normal;
  }
  h2 {
    font-size: 1.8em;
    font-weight: lighter;
    line-height: 1.2em;
    margin: 60px 0 30px 0;
  }
  h3 {
    font-size: 1.4em;
    font-weight: lighter;
    margin: 50px 0 25px 0;
  }
  h4 {
    font-size: 1.3em;
    font-weight: lighter;
    margin: 40px 0 20px 0;
  }
  .logo {
    display: block;
    margin: 0 auto;
  }
`;
