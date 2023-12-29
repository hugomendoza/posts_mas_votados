import styled from "styled-components";

export const StyledLayout = styled.main.attrs({
  className: "Layout",
})``

export const Container = styled.div.attrs({
  className: "Container",
})`
  width: min(1280px, 90%);
  margin: 0 auto;
`