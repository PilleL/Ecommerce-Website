import { css } from "styled-components";

export const computer = (props) => {
  return css`
    @media only screen and (min-width: 1451px) and (max-width: 1800px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 1151px) and (max-width: 1450px) {
      ${props}
    }
  `;
};

export const bigTablet = (props) => {
  return css`
    @media only screen and (min-width: 901px) and (max-width: 1150px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 751px) and (max-width: 900px) {
      ${props}
    }
  `;
};

export const smallTablet = (props) => {
  return css`
    @media only screen and (min-width: 651px) and (max-width: 750px) {
      ${props}
    }
  `;
};

export const bigmobile = (props) => {
  return css`
    @media only screen and (min-width: 500px) and (max-width: 650px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 499px) {
      ${props}
    }
  `;
};
