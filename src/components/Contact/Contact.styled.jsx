import styled from '@emotion/styled';
import { theme } from 'constants';
export const Item = styled.li`
  margin-bottom: ${theme.sizing(3)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.sizing(1)};
`;
export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background-color: ${theme.colors.formBorder};
  color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: ${theme.colors.darkBlue};
  }
`;
export const Name = styled.p`
  display: inline-block;
`;
