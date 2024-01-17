import styled from "styled-components";

export const StyledHeader = styled.header.attrs({
  className: "StyledHeader",
})`
  padding: 2rem 0;

  h1 {
    font-size: 2rem;
    text-align: center;
    color: ${(props) => `rgb(var(${props.theme.text[props.theme.selectedColor]})/var(--tw-bg-opacity))`};
    line-height: 1;
  }
`