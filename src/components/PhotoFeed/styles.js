import styled from "styled-components"

export const Container = styled.div`
  margin: auto;
  margin-top: 20px;
  max-width: 1440px;
  column-count: ${(props) => props.columnCount};
  -webkit-column-count: ${(props) => props.columnCount}; /* Chrome, Safari, Opera */
  -moz-column-count: ${(props) => props.columnCount}; /* Firefox */
  column-gap: 20px;
  -webkit-column-gap: 20px; /* Chrome, Safari, Opera */
  -moz-column-gap: 20px; /* Firefox */

  /* @media (max-width: 1024px) {
    column-count: 2;
  }
  @media (max-width: 600px) {
    column-count: 1;
  } */
`
