import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const Item = styled.li`
  padding-top: ${theme.space.secondary * 2}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space.secondary * 2}px;
  font-size: ${theme.typography.title};
  color: ${theme.colors.text};
`;

export const DeleteButton = styled.button`
  font-size: ${theme.typography.text};
  text-align: center;
  padding: ${theme.space.secondary}px;
  cursor: pointer;
  box-shadow: 1px 3px 5px ${theme.colors.buttonDelete};
  border: none;
  border-radius: 5px;
  background-color: ${theme.colors.buttonDelete};

  &:hover,
  &:focus {
    background-color: ${theme.colors.buttonDeleteHover};
  }
`;
