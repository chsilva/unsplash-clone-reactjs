import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  padding-top: 60px;
`;

// export const SearchTags = styled.div``;

export const SearchQuery = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

export const SearchQueryText = styled.h2`
  font-size: 4em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const SearchQueryResultsCount = styled.h2`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const SearchNav = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
`;

export const SearchNavLink = styled.div``;

export const SearchNavCount = styled.span`
  font-weight: 800;
  font-size: 1.3em;
`;

export const SearchNavType = styled.span`
  font-weight: 200;
  font-size: 1.3em;
  margin-left: 5px;
`;
