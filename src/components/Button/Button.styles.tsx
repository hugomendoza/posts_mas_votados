import styled from "styled-components";

export const StyledButton = styled.button.attrs({
  className: "StyledButton",
})`
  align-items: center;
  background-color: rgb(var(--blue-4)/var(--tw-bg-opacity));
  color: rgb(var(--blue-11)/var(--tw-text-opacity));
  border-radius: 0.75rem;
  cursor: pointer;
  display: inline-flex;
  font-size: .875rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-align: center;
  transition: all .15s ease-in;
  user-select: none;
  will-change: transform;
  border: none;
  font-family: inherit;
  font-weight: 500;

  &:hover {
    background-color: rgb(var(--blue-5)/var(--tw-bg-opacity));
  }

  p {
    margin: 0;
  }
`