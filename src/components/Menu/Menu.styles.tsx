import styled from "styled-components";

export const StyledMenu = styled.nav.attrs({
  className: "StyledMenu",
})`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const StyledDiv = styled.div.attrs({
  className: "StyledDiv",
})`
  display: flex;
  align-items: center;
  gap: 1rem;
`
