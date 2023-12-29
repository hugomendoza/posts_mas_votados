import styled from "styled-components";

export const StyledSection = styled.section.attrs({
  className: "StyledSection",
})`
  padding: 1rem;
`

export const Grid = styled.div.attrs({
  className: "Grid",
})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (width < 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width < 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`