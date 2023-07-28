import styled from '@emotion/styled';
import { theme } from 'constants';

export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;
  padding: ${theme.sizing(1)};
  li:nth-of-type(even) {
    background-color: ${theme.colors.contactBg};
  }
`;
