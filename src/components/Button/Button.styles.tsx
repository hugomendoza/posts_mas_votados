import styled from "styled-components";

export interface PropsButton {
  variant?: string;
  type?: string
}

export const StyledButton = styled.button.attrs({
  className: "StyledButton",
})<PropsButton>`
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

  ${props => props.variant === "icon" && `
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 0rem;

    div {
      display: grid;
      place-items: center;
    }

    svg {
      width: 1.5rem;
    }
  `}

  ${props => {
    switch (props.type) {
      case "like":
        return `
          background-color: rgb(var(--green-4)/var(--tw-bg-opacity));

          svg {
            path {
              stroke: rgb(var(--green-8)/var(--tw-text-opacity));
            }
          }

          &:hover {
            background-color: rgb(var(--green-5)/var(--tw-bg-opacity));
          }
        `
      case "dislike":
        return `
          background-color: rgb(var(--red-4)/var(--tw-bg-opacity));

          svg {
            path {
              stroke: rgb(var(--red-8)/var(--tw-text-opacity));
            }
          }

          &:hover {
            background-color: rgb(var(--red-5)/var(--tw-bg-opacity));
          }
        `
      default:
        return ''
    }
  }}
`