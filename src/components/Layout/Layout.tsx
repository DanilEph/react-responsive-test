import styled from "styled-components";

export const LayoutLarge = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 10px;
  & * {
    background-color: #b7b7b7;
    height: 100px;
    line-height: 100px;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  };
  & > header {
    grid-column: span 2;
  };
  & > footer {
    grid-column: span 2;
  };


`;

export const LayoutSmall = styled(LayoutLarge)`
  & > nav {
    grid-column: span 2;
  };
  & > main {
    grid-column: span 2;
  }
`;

export const LayoutMedium = styled(LayoutLarge)`
  & > nav {
    grid-column: span 2;
  };
  & > main {
    grid-column: span 2;
  }
`;

export const LayoutExtraLarge = styled(LayoutLarge)`

`;



