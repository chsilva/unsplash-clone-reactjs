import styled from "styled-components";

export const Container = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5px;
`;

export const Column = styled.div`
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 10px;

  @media (max-width: 1024px) {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }

  @media (max-width: 600px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
`;
