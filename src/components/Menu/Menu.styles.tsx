import styled from "styled-components";

export const StyledMenu = styled.nav.attrs({
  className: "StyledMenu",
})`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  @media (width < 576px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }
`

export const StyledDiv = styled.div.attrs({
  className: "StyledDiv",
})`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const StyledInputRounded = styled.input.attrs({
  className: "StyledInputRounded",
})`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  border: 1px solid ${(props) => `rgb(var(${props.color})/var(--tw-bg-opacity))`};
  accent-color: ${(props) => `rgb(var(${props.color})/var(--tw-bg-opacity))`};

  &:checked {
    background-color: ${(props) => `rgb(var(${props.color})/var(--tw-bg-opacity))`};
  }

  @media (width < 576px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`
