import styled, { createGlobalStyle } from 'styled-components';

const { default: reset } = require('styled-reset');

const GlobalStyle = createGlobalStyle`
${reset}

  :root{
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --bg-color-alt: #666;
  --main-color: #323232;
  --primary: #d0e2ea;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  body {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

#root {
  height: 100%;
}
`;

export { GlobalStyle };
