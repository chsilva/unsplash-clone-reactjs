import styled from "styled-components";

export const UnsplashHomeContainer = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5px;
  padding-top: 60px;
`;

export const UnsplashHomeColumn = styled.div`
  -ms-flex: 33%; /* IE10 */
  flex: 33%;
  max-width: 33%;
  padding: 0 5px;

  @media (max-width: 1280px) {
    -ms-flex: 33%;
    flex: 33%;
    max-width: 33%;
  }

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

export const UnsplashHomeItem = styled.img`
  margin-top: 10px;
  vertical-align: middle;
  width: 100%;
  :hover {
    cursor: zoom-in;
  }
`;
