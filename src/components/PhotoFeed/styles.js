import styled from "styled-components"

export const Container = styled.div`
  margin: auto;
  padding: 0 20px;
  margin-top: 20px;
  max-width: 1440px;
  column-count: 3;
  -webkit-column-count: 3; 
  -moz-column-count: 3;
  column-gap: 20px;
  -webkit-column-gap: 20px; 
  -moz-column-gap: 20px; 
  /* column-count: ${(props) => props.columnCount};
  -webkit-column-count: ${(props) => props.columnCount}; 
  -moz-column-count: ${(props) => props.columnCount};
  column-gap: 20px;
  -webkit-column-gap: 20px; 
  -moz-column-gap: 20px;  */

  @media (max-width: 1024px) {
    padding: 0 15px;
    column-count: 2;
    -webkit-column-count: 2; 
    -moz-column-count: 2;
    column-gap: 15px;
    -webkit-column-gap: 15px; 
    -moz-column-gap: 15px; 
  }
  @media (max-width: 600px) {
    padding: 0;
    column-count: 1;
    -webkit-column-count: 1; 
    -moz-column-count: 1;
    column-gap: 10px;
    -webkit-column-gap: 10px; 
    -moz-column-gap: 10px; 
  }
`
