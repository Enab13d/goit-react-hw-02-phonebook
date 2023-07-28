import styled from '@emotion/styled';
import { theme } from 'constants';

export const ContactsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.formBorder};
  border-radius: 8px;
  padding: ${theme.sizing(1)};
`;
export const Label = styled.label`
  margin-bottom: ${theme.sizing(2)};
`;
export const Field = styled.input`
  margin-bottom: ${theme.sizing(2)};
  height: ${theme.sizing(5)};
`;
export const SubmitBtn = styled.button`
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
